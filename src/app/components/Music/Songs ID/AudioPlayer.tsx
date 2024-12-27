import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';

// Componente reutilizável para reproduzir diferentes URLs
const AudioPlayer = ({ audioUrl }) => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackStatus, setPlaybackStatus] = useState(null);

  const soundRef = useRef(null); // Referência para o áudio

  // Carrega o áudio
  async function loadAudio() {
    if (!soundRef.current) {
      const { sound } = await Audio.Sound.createAsync({ uri: audioUrl }); // URL recebida como prop
      soundRef.current = sound;
      setSound(sound);
      sound.setOnPlaybackStatusUpdate((status) => setPlaybackStatus(status));
    }
  }

  // Reproduz o áudio ou pausa
  async function playPauseAudio() {
    if (soundRef.current) {
      if (isPlaying) {
        await soundRef.current.pauseAsync();
        setIsPlaying(false);
      } else {
        await soundRef.current.playAsync();
        setIsPlaying(true);
      }
    } else {
      await loadAudio();
      await soundRef.current.playAsync();
      setIsPlaying(true);
    }
  }

  // Retrocede o áudio em 10 segundos
  async function rewindAudio() {
    if (soundRef.current && playbackStatus) {
      const newPosition = Math.max(playbackStatus.positionMillis - 10000, 0);
      await soundRef.current.setPositionAsync(newPosition);
    }
  }

  // Avança o áudio em 10 segundos
  async function forwardAudio() {
    if (soundRef.current && playbackStatus) {
      const newPosition = Math.min(
        playbackStatus.positionMillis + 10000,
        playbackStatus.durationMillis
      );
      await soundRef.current.setPositionAsync(newPosition);
    }
  }

  // Para o áudio e limpa a memória
  async function stopAudio() {
    if (soundRef.current) {
      await soundRef.current.stopAsync();
      soundRef.current = null;
      setIsPlaying(false);
      setSound(null);
    }
  }

  return (
    <View style={styles.container}>
      {/* Retroceder */}
      <TouchableOpacity style={styles.button} onPress={rewindAudio}>
        <Ionicons style={styles.icon} size={25} name="play-back" />
      </TouchableOpacity>

      {/* Play/Pause */}
      <TouchableOpacity style={styles.buttonPlay} onPress={playPauseAudio}>
        <Ionicons
          style={styles.icon}
          size={25}
          name={isPlaying ? 'pause' : 'play'}
        />
      </TouchableOpacity>

      {/* Avançar */}
      <TouchableOpacity style={styles.button} onPress={forwardAudio}>
        <Ionicons style={styles.icon} size={25} name="play-forward" />
      </TouchableOpacity>
    </View>
  );
};

export default AudioPlayer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    backgroundColor: 'transparent',
    borderColor: '#ff2626',
    borderWidth: 2,
    height: 42,
    width: 52,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPlay: {
    backgroundColor: 'transparent',
    borderColor: '#ff2626',
    borderWidth: 2,
    height: 42,
    width: 52,
    marginInline: 24,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: '#FFFFFF',
  },
});
