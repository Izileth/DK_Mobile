import React, { useState, useRef, useEffect } from 'react';
import { ScrollView, View, Image, StyleSheet, Dimensions, Animated } from 'react-native';

const { width } = Dimensions.get('window');
const Spacing = 5;
const widthItem = width * 0.8;
const emptyItemSpace = (width - widthItem) / 2;

interface CarouselProps {
    images: Array<{ uri: string }>;
    autoPlay?: boolean;
    autoPlayInterval?: number;
    imageHeight?: number;
}

const CarouselShorts: React.FC<CarouselProps> = ({
    images,
    autoPlay = true,
    autoPlayInterval = 3000,
    imageHeight = 300,
}) => {
    const [activeIndex, setActiveIndex] = useState(1);
    const scrollRef = useRef<ScrollView | null>(null);
    const scrollX = useRef(new Animated.Value(0)).current;
    const autoPlayTimer = useRef<NodeJS.Timeout>();

    const infiniteImages = [images[images.length - 1], ...images, images[0]];

    const getItemLayout = (index: number) => ({
        offset: index * (widthItem + Spacing),
        length: widthItem,
    });

    const scrollToIndex = (index: number, animated: boolean = true) => {
        const offset = getItemLayout(index).offset - emptyItemSpace;
        scrollRef.current?.scrollTo({
            x: offset,
            animated,
        });
    };

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
            listener: (event: any) => {
                const offsetX = event.nativeEvent.contentOffset.x + emptyItemSpace;
                const index = Math.round(offsetX / (widthItem + Spacing));

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
            },
        }
    );

    useEffect(() => {
        scrollToIndex(1, false);
        if (autoPlay) startAutoPlay();
        return () => stopAutoPlay();
    }, []);
   
   
   return (
        <View style={styles.container}>
            <ScrollView
                ref={scrollRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                snapToInterval={widthItem + Spacing}
                contentContainerStyle={styles.scrollContent}
                onScroll={handleScroll}
                decelerationRate="fast"
            >
                {infiniteImages.map((image, index) => (
                    <View key={index} style={[styles.imageContainer, { height: imageHeight }]}>
                        <Image source={image} style={styles.image} resizeMode="cover" />
                    </View>
                ))}
            </ScrollView>
            
            <View style={styles.pagination}>
                {images.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.paginationDot,
                            {
                                backgroundColor:
                                    activeIndex === index + 1 ? '#ff2626' : '#ccc',
                            },
                        ]}
                    />
                ))}
            </View>
        </View>  
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    scrollContent: {
        paddingHorizontal: emptyItemSpace - Spacing / 2,
    },
    imageContainer: {
        width: widthItem,
        marginHorizontal: Spacing / 2,
        overflow: 'hidden',
        borderRadius: 8,
    },
    image: {
        width: '95%',
        height: '100%',
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBlock: 12,
    },
    paginationDot: {
        width: 12,
        height: 4,
        borderRadius: 4,
        marginHorizontal: 4,
    },
})

export default CarouselShorts;