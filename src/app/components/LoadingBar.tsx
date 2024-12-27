import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Easing } from 'react-native';

const LoadingBar = () => {
  const loadingAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    loadingAnim.setValue(0);
    Animated.timing(loadingAnim, {
      toValue: 1,
      duration: 6000,
      easing: Easing.linear,
      useNativeDriver: false, // Mudado para false pois scaleX pode não ser suportado
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.loadBar,
          {
            width: loadingAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '100%']
            })
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 2,
    backgroundColor: '#e0e0e0',
    width: '15%',
    marginBlock: 16,
  },
  loadBar: {
    height: '100%',
    backgroundColor: '#ff2626',
  },
});

export default LoadingBar;