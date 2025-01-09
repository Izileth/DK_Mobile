import React, { useEffect, useRef } from 'react';
import { Animated, Text, StyleSheet, View, TextStyle, ViewStyle } from 'react-native';

interface PulsingTextProps {
  text: string;
  duration?: number;
  startColor?: string;
  endColor?: string;
  textStyle?: TextStyle;
  containerStyle?: ViewStyle;
}

const WordsPulsing: React.FC<PulsingTextProps> = ({
  text = '',
  duration = 1000,
  startColor = '#ff2626',
  endColor = 'transparent',
  textStyle = {},
  containerStyle = {},
}) => {
  const colorValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(colorValue, {
          toValue: 1,
          duration: duration,
          useNativeDriver: false,
        }),
        Animated.timing(colorValue, {
          toValue: 0,
          duration: duration,
          useNativeDriver: false,
        }),
      ])
    ).start();

    return () => {
      // Limpa a animação quando o componente é desmontado
      colorValue.stopAnimation();
    };
  }, [duration, colorValue]);

  const colorInterpolation = colorValue.interpolate({
    inputRange: [0, 1],
    outputRange: [startColor, endColor],
  });

  return (
    <View style={[styles.container, containerStyle]}>
      <Animated.Text 
        style={[
          styles.text, 
          textStyle, 
          { color: colorInterpolation }
        ]}
      >
        {text}
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: 22,
  },
  text: {
    fontSize: 14,
    fontWeight: '100',
    textAlign: 'center',
    marginInlineStart: 12,
  },
});

export default WordsPulsing;