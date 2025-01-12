import React, { useRef, useState, useCallback } from 'react';
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
  StyleSheet,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { CarouselProps } from '../../components/Interface';

const CarouselModels: React.FC<CarouselProps> = ({
  images,
  indicatorColor = "#ff2323",
  indicatorInactiveColor = "#ccc",
  autoPlay = false,
  autoPlayInterval = 3000,
  imageStyle = {},
}) => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const screenWidth = Dimensions.get('window').width;

  const handleScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffset / screenWidth);
    setActiveIndex(newIndex);
  }, [screenWidth]);

  const goToSlide = useCallback((index: number) => {
    scrollViewRef.current?.scrollTo({
      x: index * screenWidth,
      animated: true,
    });
  }, [screenWidth]);

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoPlay) {
      interval = setInterval(() => {
        const nextIndex = (activeIndex + 1) % images.length;
        goToSlide(nextIndex);
      }, autoPlayInterval);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [activeIndex, autoPlay, autoPlayInterval, images.length, goToSlide]);

  //Styles 
  const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    image: {
        height: 200,
        resizeMode: 'cover',
        width: Dimensions.get('window').width,
    },
    indicators: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        width: '100%',
    },
    indicatorButton: {
        padding: 5,
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {images.map((img, index) => (
          <Image
            key={index}
            source={{ uri: img.uri }}
            style={[styles.image, imageStyle]}
          />
        ))}
      </ScrollView>

      <View style={styles.indicators}>
        {images.map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => goToSlide(index)}
            style={styles.indicatorButton}
          >
            <Ionicons
              name={index === activeIndex ? "reorder-two" : "reorder-two-outline"}
              size={14}
              color={index === activeIndex ? indicatorColor : indicatorInactiveColor}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default CarouselModels;
