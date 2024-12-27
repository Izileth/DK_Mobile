import React, { useState, useRef, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, ActivityIndicator, Animated, Easing } from 'react-native';
import { Audio, AVPlaybackStatus } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';

interface AudioPlayerProps {
  audioUrl: string;
  onError?: (error: Error) => void;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl, onError }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackStatus, setPlaybackStatus] = useState<AVPlaybackStatus | null>(null);
  const [duration, setDuration] = useState(0);
  
  const soundRef = useRef<Audio.Sound | null>(null);
  const progressAnim = useRef(new Animated.Value(0)).current;
  const progressAnimation = useRef<Animated.CompositeAnimation | null>(null);

  useEffect(() => {
    setupAudioMode();
    return () => {
      stopProgressAnimation();
      unloadAudio();
    };
  }, []);

  useEffect(() => {
    if (audioUrl) {
      resetAndLoad();
    }
  }, [audioUrl]);

  const resetAndLoad = async () => {
    stopProgressAnimation();
    progressAnim.setValue(0);
    await unloadAudio();
    await loadAudio();
  };

  const setupAudioMode = async () => {
    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        staysActiveInBackground: true,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        playThroughEarpieceAndroid: false,
      });
    } catch (error) {
      handleError(error);
    }
  };

  const loadAudio = async () => {
    try {
      setIsLoading(true);
      const { sound } = await Audio.Sound.createAsync(
        { uri: audioUrl },
        { shouldPlay: false },
        onPlaybackStatusUpdate
      );
      soundRef.current = sound;
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const startProgressAnimation = (currentPosition: number, totalDuration: number) => {
    stopProgressAnimation();
    const remaining = totalDuration - currentPosition;
    
    progressAnimation.current = Animated.timing(progressAnim, {
      toValue: 1,
      duration: remaining,
      easing: Easing.linear,
      useNativeDriver: false,
    });
    
    progressAnimation.current.start(({ finished }) => {
      if (finished) {
        stopAudio();
      }
    });
  };

  const stopProgressAnimation = () => {
    progressAnimation.current?.stop();
    progressAnimation.current = null;
  };

  const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    setPlaybackStatus(status);
    if ('isLoaded' in status && status.isLoaded) {
      setIsPlaying(status.isPlaying);
      setDuration(status.durationMillis || 0);
      
      if (status.isPlaying) {
        startProgressAnimation(status.positionMillis, status.durationMillis || 0);
      } else {
        stopProgressAnimation();
      }

      if (status.didJustFinish) {
        stopAudio();
        progressAnim.setValue(0);
      }
    }
  };

  const handleError = (error: any) => {
    console.error('Audio Player Error:', error);
    onError?.(error);
  };

  const playPauseAudio = async () => {
    try {
      if (!soundRef.current) {
        await loadAudio();
        if (soundRef.current) {
          await soundRef.current.playAsync();
        }
      } else if (isPlaying) {
        await soundRef.current.pauseAsync();
        stopProgressAnimation();
      } else {
        const status = await soundRef.current.getStatusAsync();
        if ('isLoaded' in status && status.isLoaded) {
          await soundRef.current.playAsync();
          startProgressAnimation(status.positionMillis, status.durationMillis || 0);
        }
      }
    } catch (error) {
      handleError(error);
    }
  };

  const skipAudio = async (skipMillis: number) => {
    try {
      if (soundRef.current && playbackStatus && 'isLoaded' in playbackStatus && playbackStatus.isLoaded) {
        const newPosition = Math.max(
          0,
          Math.min(
            (playbackStatus.positionMillis || 0) + skipMillis,
            playbackStatus.durationMillis || 0
          )
        );
        await soundRef.current.setPositionAsync(newPosition);
        
        if (isPlaying) {
          startProgressAnimation(newPosition, playbackStatus.durationMillis || 0);
        }
      }
    } catch (error) {
      handleError(error);
    }
  };

  const unloadAudio = async () => {
    try {
      if (soundRef.current) {
        await soundRef.current.unloadAsync();
        soundRef.current = null;
        setIsPlaying(false);
        setPlaybackStatus(null);
        progressAnim.setValue(0);
      }
    } catch (error) {
      handleError(error);
    }
  };

  const stopAudio = async () => {
    try {
      if (soundRef.current) {
        await soundRef.current.stopAsync();
        setIsPlaying(false);
        stopProgressAnimation();
        progressAnim.setValue(0);
      }
    } catch (error) {
      handleError(error);
    }
  };

  if (!audioUrl) {
    return null;
  }

  const isStatusLoaded = playbackStatus && 'isLoaded' in playbackStatus && playbackStatus.isLoaded;

  return (
    <View style={styles.container}>
      <View style={styles.playerContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => skipAudio(-10000)}
          disabled={isLoading || !isStatusLoaded}
        >
          <Ionicons 
            style={[styles.icon, isLoading && styles.iconDisabled]} 
            size={25} 
            name="play-back" 
          />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.buttonPlay} 
          onPress={playPauseAudio}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Ionicons
              style={styles.icon}
              size={25}
              name={isPlaying ? 'pause' : 'play'}
            />
          )}
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => skipAudio(10000)}
          disabled={isLoading || !isStatusLoaded}
        >
          <Ionicons 
            style={[styles.icon, isLoading && styles.iconDisabled]} 
            size={25} 
            name="play-forward" 
          />
        </TouchableOpacity>
      </View>

      <View style={styles.progressContainer}>
        <Animated.View
          style={[
            styles.progressBar,
            {
              width: progressAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '100%']
              })
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  playerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
  progressContainer: {
    height: 2,
    backgroundColor: '#e0e0e0',
    width: '100%',
    marginTop: 16,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#ff2626',
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
    marginHorizontal: 24,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: '#FFFFFF',
  },
  iconDisabled: {
    opacity: 0.5,
  },
});

export default AudioPlayer;