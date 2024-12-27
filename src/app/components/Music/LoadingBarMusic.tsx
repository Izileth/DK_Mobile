import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Animated, StyleSheet, Easing } from 'react-native';
import { Audio } from 'expo-av';

const LoadingBarMusic = ({ audioUri }) => {
  const [sound, setSound] = useState(null);
  const [duration, setDuration] = useState(0); // Duração total da música
  const [position, setPosition] = useState(0); // Posição atual da música
  const loadingAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    loadAudio();

    return () => {
      if (sound) {
        sound.unloadAsync(); // Libera os recursos ao desmontar
      }
    };
  }, [audioUri]);

  const loadAudio = async () => {
    if (!audioUri) return;

    const { sound } = await Audio.Sound.createAsync({ uri: audioUri });
    setSound(sound);

    // Configura a duração e atualiza a posição
    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.isLoaded) {
        setDuration(status.durationMillis || 0);
        setPosition(status.positionMillis || 0);
        updateAnimation(status.positionMillis || 0, status.durationMillis || 1);
      }
    });

    await sound.playAsync(); // Inicia a reprodução
  };

  const updateAnimation = (positionMillis, durationMillis) => {
    const progress = positionMillis / durationMillis;

    // Atualiza a barra de progresso
    Animated.timing(loadingAnim, {
      toValue: progress,
      duration: 100,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };

  const formatTime = (millis) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = Math.floor((millis % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.loadingBar,
            {
              width: loadingAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '100%'],
              }),
            },
          ]}
        />
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{formatTime(position)}</Text>
        <Text style={styles.timeText}>{formatTime(duration)}</Text>
      </View>
    </View>
  );
};

export default LoadingBarMusic;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    width: '80%',
  },
  container: {
    width: '100%',
    height: 5,
    backgroundColor: '#CCCCCC',
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: 5,
  },
  loadingBar: {
    height: '100%',
    backgroundColor: '#FF0000',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 5,
  },
  timeText: {
    fontSize: 12,
    color: '#FFFFFF',
  },
});
