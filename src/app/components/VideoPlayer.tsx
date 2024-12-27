import React from 'react';
import { StyleSheet, View } from 'react-native';
import Video from 'react-native-video';

const VideoPlayer = () => {
  return (
    <View style={styles.container}>
      <Video
        source={{ uri: 'https://pin.it/2JMIvNZIy' }} // URL do vídeo
        style={styles.video}
        controls // Habilita os controles de reprodução
        resizeMode="contain" // Ajusta como o vídeo será exibido
        paused={false} // Define se o vídeo começa pausado
        repeat // Define se o vídeo deve se repetir automaticamente
      />
    </View>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  video: {
    width: '100%',
    height: 380,
  },
});
