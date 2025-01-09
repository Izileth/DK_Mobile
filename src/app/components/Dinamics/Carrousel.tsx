import React, { useState, useRef, useEffect } from 'react';
import { BlurView } from '@react-native-community/blur';
import {
  ScrollView,
  View,
  Image,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';

const { width } = Dimensions.get('window');
const SPACING = 5; // Espaçamento entre as imagens
const ITEM_WIDTH = width * 1.0; // 80% da largura da tela
const EMPTY_ITEM_SPACE = (width - ITEM_WIDTH) / 2; // Espaço vazio nas bordas

interface CarouselProps {
  images: Array<{ uri: string }>;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  imageHeight?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  autoPlay = true,
  autoPlayInterval = 3000,
  imageHeight = 250,
}) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const scrollRef = useRef<ScrollView>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const autoPlayTimer = useRef<NodeJS.Timeout>();

  const infiniteImages = [images[images.length - 1], ...images, images[0]];

  const getItemLayout = (index: number) => ({
    offset: index * (ITEM_WIDTH + SPACING),
    length: ITEM_WIDTH,
  });

  const scrollToIndex = (index: number, animated: boolean = true) => {
    const offset = getItemLayout(index).offset - EMPTY_ITEM_SPACE;
    scrollRef.current?.scrollTo({
      x: offset,
      animated: animated
    });
  };

  useEffect(() => {
    scrollToIndex(1, false);
    if (autoPlay) startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayTimer.current = setInterval(() => {
      if (activeIndex >= images.length) {
        scrollToIndex(1, true);
        setActiveIndex(1);
      } else {
        scrollToIndex(activeIndex + 1, true);
        setActiveIndex(prev => prev + 1);
      }
    }, autoPlayInterval);
  };

  const stopAutoPlay = () => {
    if (autoPlayTimer.current) {
      clearInterval(autoPlayTimer.current);
    }
  };

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    {
      useNativeDriver: false,
      listener: (event) => {
        const offsetX = event.nativeEvent.contentOffset.x + EMPTY_ITEM_SPACE;
        const index = Math.round(offsetX / (ITEM_WIDTH + SPACING));

        if (index !== activeIndex) {
          setActiveIndex(index);
        }

        if (index === 0) {
          setTimeout(() => {
            scrollToIndex(images.length, false);
            setActiveIndex(images.length);
          }, 300);
        } else if (index === infiniteImages.length - 1) {
          setTimeout(() => {
            scrollToIndex(1, false);
            setActiveIndex(1);
          }, 300);
        }
      }
    }
  );

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled={false} // Desativamos paging para permitir espaçamento
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        onTouchStart={stopAutoPlay}
        onTouchEnd={startAutoPlay}
        onMomentumScrollEnd={() => {
          stopAutoPlay();
          startAutoPlay();
        }}
        contentContainerStyle={styles.scrollContent}
        snapToInterval={ITEM_WIDTH + SPACING} // Snap para cada item + espaçamento
        snapToAlignment="center"
        decelerationRate="fast"
      >
        {infiniteImages.map((image, index) => {
          const inputRange = [
            (index - 2) * (ITEM_WIDTH + SPACING),
            (index - 1) * (ITEM_WIDTH + SPACING),
            index * (ITEM_WIDTH + SPACING),
          ];

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.9, 1, 0.9],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={`${index}-${image.uri}`}
              style={[
                styles.imageContainer,
                {
                  transform: [{ scale }],
                  height: imageHeight,
                }
              ]}
            >
              <Image
                source={{ uri: image.uri }}
                style={[styles.image, { height: imageHeight }]}
              />
            </Animated.View>
          );
        })}
      </ScrollView>

      <View style={styles.indicatorContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              index + 1 === activeIndex && styles.activeIndicator,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(56, 29, 29, 0.2)', // Simula o "embaçado"
    borderRadius:12,
  },
  scrollContent: {
    paddingHorizontal: EMPTY_ITEM_SPACE,
  },
  imageContainer: {
    width: ITEM_WIDTH,
    marginHorizontal: SPACING / 2,
    overflow: 'hidden',
    backgroundColor: '#000000',
    borderRadius: 8, // Opcional: adiciona bordas arredondadas
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
    opacity: 0.6,
  },

  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop: 10,
    marginBlockEnd:20,
  },
  indicator: {
    width: 12,
    height: 4,
    borderRadius: 4,
    backgroundColor: '#888',
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: '#fff',
    width: 10,
    height: 10,
  },
});

export default Carousel;