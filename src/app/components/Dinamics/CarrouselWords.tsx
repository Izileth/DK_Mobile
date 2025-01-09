import React, { useEffect, useRef, useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  Animated, 
  Dimensions, 
  TouchableWithoutFeedback 
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const CarrouselWords = ({ 
  words = [], 
  speed = 50, 
  textStyle = {}, 
  containerStyle = {},
  direction = 'left',
  gradientWidth = 50,
}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [isPaused, setIsPaused] = useState(false);
  const { width } = Dimensions.get('window');
  const animation = useRef(null);

  const duplicatedWords = [...words, ...words];
  
  const startAnimation = () => {
    const textWidth = width * duplicatedWords.length;
    const toValue = direction === 'left' ? -textWidth / 2 : textWidth / 2;
    
    animation.current = Animated.timing(scrollX, {
      toValue,
      duration: speed * textWidth / 2,
      useNativeDriver: true,
      isInteraction: false,
    });

    scrollX.addListener(({ value }) => {
      if (direction === 'left' && value <= -textWidth / 2) {
        scrollX.setValue(0);
      } else if (direction === 'right' && value >= textWidth / 2) {
        scrollX.setValue(0);
      }
    });

    Animated.loop(animation.current).start();
  };

  useEffect(() => {
    if (!isPaused) {
      startAnimation();
    }

    return () => {
      scrollX.removeAllListeners();
      if (animation.current) {
        animation.current.stop();
      }
    };
  }, [words, speed, isPaused, direction]);

  const handlePress = () => {
    setIsPaused(!isPaused);
    if (animation.current) {
      if (isPaused) {
        startAnimation();
      } else {
        animation.current.stop();
      }
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={[styles.container, containerStyle]}>
        {/* Gradiente da esquerda */}
        <LinearGradient
          colors={['#080808', 'transparent'] as const}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={[styles.gradient, { left: 0, width: gradientWidth }]}
          pointerEvents="none"
        />
        
        <Animated.View
          style={[
            styles.textContainer,
            {
              transform: [{ translateX: scrollX }],
            },
          ]}>
          {duplicatedWords.map((word, index) => (
            <Text
              key={`${word}-${index}`}
              style={[styles.text, textStyle]}>
              {word}
            </Text>
          ))}
        </Animated.View>

        {/* Gradiente da direita */}
        <LinearGradient
          colors={['transparent', '#080808'] as const}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={[styles.gradient, { right: 0, width: gradientWidth }]}
          pointerEvents="none"
        />

        {isPaused && (
          <View style={styles.pauseIndicator}>
            <Text style={styles.pauseText}>⏸️</Text>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    overflow: 'hidden',
    position: 'relative',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
  },
  text: {
    fontSize: 16,
    marginHorizontal: 10,
    color: '#333',
  },
  gradient: {
    position: 'absolute',
    height: '100%',
    zIndex: 1,
  },
  pauseIndicator: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -10 }],
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 12,
    padding: 4,
    zIndex: 2,
  },
  pauseText: {
    color: 'white',
    fontSize: 12,
  },
});

export default CarrouselWords;