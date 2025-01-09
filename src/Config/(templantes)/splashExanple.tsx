import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import LoadingBar from "../../app/components/Loading/LoadingBar";

const SplashExanple = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://i.pinimg.com/736x/c2/d5/99/c2d5992561607d3e9635cec20098a454.jpg",
        }}
        style={styles.image}
      />
      <Text style={styles.text}>
        Welcome To <Text style={styles.textColors}>Drifit for All</Text>
      </Text>
      <LoadingBar />
      <Text style={styles.loadText}>Loading Expirence...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  //Ajustes no container principal do aplicativo
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    paddingTop: 0, // Remove possíveis espaçamentos
  },

  //Ajustes nas imagens
  image: {
    width: 256,
    height: 356,
  },

  //Ajustes nos textos
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  textColors: {
    color: "#ff2626",
  },

  //Ajustes na barra de carregamento
  loadBar: {
    height: 2,
    width: 226,
    backgroundColor: "#ff2626",
    borderRadius: 10,
    marginBlock: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  loadText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default SplashExanple;
