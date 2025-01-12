import React, { useEffect, useRef } from "react";
import {
  StyleSheet,
  Animated,
  View,
  Text,
  Image,
  ActivityIndicator,
  Pressable,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ColorChangeText from "../../Animation/TextColors";
import Spinner from "../../Loading/Spinner";
import SearchBar from "./SearchBar";
import { useRouter } from "expo-router";
import CarrouselTags from "../../Dinamics/CarrouselTags";

import Banner from "./Banner";

const Header = () => {
  // Efeitos e Animações

  const fadeAnim = useRef(new Animated.Value(0)).current; // Inicializa com opacidade 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, // Opacidade final
      duration: 2000, // Duração da animação
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  // Função para direcionar o usuário para dada aba

  // O Router precisa ser importado e usado no componente principal
  const router = useRouter();

  // Função que redireciona o usuário para o inicio
  async function handleGetDefault() {
    router.replace("/(tabs)/profile");
  }

  // Efeito para o botão de redirecionamento
  const [redirect, setRedirect] = React.useState(false);

  // Função para redirecionar o usuário para o inicio com um delay de 2 segundos
  const handleRedirect = () => {
    setRedirect(true);
    setTimeout(() => {
      setRedirect(false);
    }, 2000);
  };

  return (
    <LinearGradient
      style={styles.container}
      colors={["#000000", "#020202", "#000000"]}
      start={{ x: 0.6, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Animated.View style={[{ opacity: fadeAnim }]}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>
            Drift King <Text style={styles.titleColors}>Mobile App</Text>
          </Text>
          <SearchBar />
          <TouchableOpacity
            onPress={handleGetDefault}
            style={styles.buttonHeader}
          >
            <Text onLongPress={handleRedirect} style={styles.buttonHaderText}>
              {redirect ? "Home" : "Home"}
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
      <Animated.View style={[{ opacity: fadeAnim }]}>
        <Banner />
        <CarrouselTags />
      </Animated.View>
    </LinearGradient>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 410,
    padding: 20,
    backgroundColor: "#000000",
    position: "relative",
    marginBottom: 10,
    zIndex: 2,
  },

  title: {
    fontSize: 18,
    color: "#ff2626",
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "left",
  },
  titleColors: {
    color: "#fff",
  },

  //Ajustes na caixa de Títulos

  titlesBox: {
    width: "100%",
    position: "relative",
    justifyContent: "center",
    alignItems: "flex-start",
  },

  //Ajustes na caixa de Busca

  searchBar: {
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "#333333",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  //Ajustes na caixa de Cabeçalho

  header: {
    flexDirection: "row",
    width: "100%",
    height: 100,
    justifyContent: "space-around",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 14,
    color: "#ff2626",
    fontWeight: "100",
  },

  //Ajustes na caixa de Botão

  buttonHeader: {
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 28,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 2,
    backgroundColor: "transparent",
  },
  buttonHaderText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "100",
  },
});
