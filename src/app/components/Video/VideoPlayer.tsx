import { useState, useRef } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { Ionicons } from '@expo/vector-icons';

interface VideoPlayerProps {
  url: string;
  height?: number;
}

export default function VideoPlayer({ url, height = 300 }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const [showPreview, setShowPreview] = useState(true);
  const playerRef = useRef(null);

  const extractVideoId = (url: string): string => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : '';
  };

  const videoId = extractVideoId(url);

  const onStateChange = (state) => {
    if (state === 'ended') {
      setPlaying(false);
      setShowPreview(true);
      playerRef.current?.seekTo(0, true);
    }
  };

  const handlePlayPress = () => {
    setShowPreview(false);
    setPlaying(true);
  };

  if (!videoId) {
    return null;
  }

  return (
    <View style={[styles.container, { height }]}>
      {showPreview ? (
        <TouchableOpacity 
          onPress={handlePlayPress} 
          style={[styles.previewContainer, { height }]}
        >
          <View style={styles.thumbnailOverlay}>
            <Ionicons name="play-circle" size={60} color="white" />
          </View>
        </TouchableOpacity>
      ) : (
        <YoutubePlayer
          ref={playerRef}
          height={height}
          play={playing}
          videoId={videoId}
          onChangeState={onStateChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  previewContainer: {
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbnailOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
