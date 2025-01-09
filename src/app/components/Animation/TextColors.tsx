import React, { useEffect, useRef } from 'react';
import { Animated, Text, StyleSheet, View } from 'react-native';

const ColorChangeText = () => {
  const colorValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(colorValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(colorValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, [colorValue]);

  const colorInterpolation = colorValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['#ff2626', 'transparent'],
  });

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.text, { color: colorInterpolation }]}> Welcome to All Sections</Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection:  'row', width: '100%', height:42, },
  text: { fontSize: 28, fontWeight: 'bold', textAlign: 'left',  marginHorizontal: -6, },
});

export default ColorChangeText;
