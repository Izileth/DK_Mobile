import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View, Easing } from 'react-native'; // Importa o Easing

const Spinner = () => {
  // Criação do valor animado para rotação
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Configura a animação para rodar infinitamente
    const spinAnimation = Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000, // Tempo de uma rotação completa (1 segundo)
        easing: Easing.linear, // Mantém a rotação uniforme
        useNativeDriver: true,
      })
    );
    spinAnimation.start(); // Inicia a animação
    return () => spinAnimation.stop(); // Para a animação ao desmontar o componente
  }, [spinValue]);

  // Interpolação do valor animado para criar o efeito de rotação
  const spinInterpolation = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'], // Rotação de 0 a 360 graus
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.spinner,
          { transform: [{ rotate: spinInterpolation }] }, // Aplica a rotação
        ]}
      />
    </View>
  );
};

// Estilos para o container e o spinner
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent', // Fundo escuro para contraste
  },
  spinner: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: '#ff2626', // Cor das bordas
    borderTopColor: '#f1f1f1', // Destaque na parte superior
    borderRadius: 25, // Faz o círculo
  },
});

export default Spinner;
