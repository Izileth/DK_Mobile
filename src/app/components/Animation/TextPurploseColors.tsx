import React, { useEffect, useRef } from 'react';
import { Animated, Text, StyleSheet, View } from 'react-native';

const PurploseEffectText = () => {
  const colorValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(colorValue, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(colorValue, {
          toValue: 0,
          duration: 500,
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
      <Animated.Text style={[styles.text, { color: colorInterpolation }]}> JDM World </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection:  'row', height:90 },
  text: { fontSize: 20, fontWeight: '100',  },
});

export default PurploseEffectText;
