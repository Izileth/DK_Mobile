import { StatusBar } from "expo-status-bar";
import {
  Alert,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Animated,
  Button,
  Pressable,
} from "react-native";
import React, { useRef, useEffect, useState} from "react";
import { Linking } from "react-native";
import { Ionicons } from "react-native-vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { supabase } from "../lib/supabase";
import { AuthProvider, useAuth } from "../../context/authContext";

// Dados para a FlatList
const DATA = [
  {
    id: "1",
    title: "Facebook",
    link: "https://www.facebook.com",
    icon: "logo-facebook",
  },
  {
    id: "2",
    title: "Twitter",
    link: "https://www.twitter.com",
    icon: "logo-twitter",
  },
  {
    id: "3",
    title: "Instagram",
    link: "https://www.instagram.com",
    icon: "logo-instagram",
  },
];

export default function App() {

  const [loading, setLoading] = useState(false);

  const handlePress = async (link: string) => {
    const canOpen = await Linking.canOpenURL(link);
    if (canOpen) {
      Linking.openURL(link).catch((err) =>
        console.error("Erro ao abrir o link:", err)
      );
    } else {
      console.error("URL inválida ou não suportada:", link);
    }
  };

  //Efeitos e Animações

  const fadeAnim = useRef(new Animated.Value(0)).current; // Inicializa com opacidade 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, // Opacidade final
      duration: 2000, // Duração da animação
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const { setAuth } = useAuth();

  async function handleSignout() {
    const { error } = await supabase.auth.signOut();
    setAuth(null);
    if (error) {
      Alert.alert("Falha ao deslogar", error.message);
      return;
    }
  }

  return (
    <ScrollView style={styles.header}>
      <LinearGradient
        colors={["#000000", "#ff2626"]}
        start={{ x: 0.4, y: 0.6 }}
        end={{ x: 2.5, y: 2.6 }}
      >
        <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
          <View style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.imageView}>
              <Image
                source={{
                  uri: "https://i.pinimg.com/736x/5e/1a/08/5e1a08d7d7fb6ac44cb401558b89cbc7.jpg",
                }}
                style={styles.image}
              />
            </View>
            <View style={styles.main}>
              <Text style={styles.title}>Drift King <Text style={styles.titleColors}>Mobile</Text></Text>
              <Text style={styles.subtitle}>
                React Native App Developer for Android and IOS
              </Text>
              <Text style={styles.boldTitle}>Informations of App</Text>
              <Text style={styles.paragraph}>
                The App is exemple of japanese automotive culture, and its informations range from informing to giving a brief summary about this world.
              </Text>
              <View style={styles.boxContent}>
                <Text style={styles.paragraph}>
                  Follow the links for explore the vast contents make for you
                  and others adimires of this world.{" "}
                </Text>
              </View>
              <View style={styles.boxLinks}>
                <FlatList
                  data={DATA}
                  horizontal
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <View style={styles.item}>
                      <Ionicons
                        name={item.icon}
                        size={30}
                        color="#000"
                        style={styles.icon}
                      />
                      <TouchableOpacity onPress={() => handlePress(item.link)}>
                        <Text style={styles.text}>{item.title}</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                />
              </View>
              <View style={styles.lineButton}>
                  <Pressable style={styles.button} onPress={handleSignout}>
                    <Text style={styles.buttonText}>
                      {loading? "Loading..." : "Exit Loguin"}
                    </Text>
                  </Pressable>
              </View>
            </View>
            <StatusBar style="auto" />
          </View>
        </Animated.View>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  //AJustes na caixa principal do aplicativo

  header: {
    flex: 1,
    backgroundColor: "#000000",
    paddingTop: 0,
  },

  container: {
    backgroundColor: "transparent",
    width: 520,
    height: '100%',
    marginTop: 40,
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    padding: 24,
  },

  main: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 2,
    maxWidth: 960,
    marginHorizontal: "auto",
  },

  boxContent: {
    width: 450,
    maxWidth: 500,
  },
  
  //Ajustes bo Titulo, paragrafos e textos

  title: {
    color: "#ffffff",
    marginBottom: 8,
    textAlign: "left",
    fontSize: 48,
    fontWeight: "bold",
  },

  titleColors: {
    color: "#ff2626",
  },

  subtitle: {
    textAlign: "left",
    color: "#ffffff",
    marginBottom: 6,
    fontSize: 28,
    fontWeight: "500",
  },

  boldTitle: {
    color: "#ff2626",
    marginBlock: 6,
    fontSize: 30,
    fontWeight: "200",
    marginBottom: 10,
  },
  paragraph: {
    textAlign: "left",
    color: "#ffffff",
    marginBottom: 16,
    fontSize: 18,
    lineHeight: 32,
    marginTop: 2,
    fontWeight: "100",
  },

  //Ajustes especiais dos links para redes sociais

  item: {
    flexDirection: "row",
    alignItems: "center",
    width: 100,
    height: 100,
    justifyContent: "center",
    marginInline: 24,
    marginBlock: 8,
    borderRadius: 4,
  },

  text: {
    fontSize: 20,
    color: "#f1f1f1", // Cor personalizada para o texto
  },

  //Ajustes na caixa de botão e lista de botões

  lineButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    marginBottom: 45,
  },

  button: {
    backgroundColor: "transparent", // Fundo transparente
    borderWidth: 1, // Espessura da borda
    borderColor: "#ff2626", // Cor da borda vermelha
    padding: 10, // Espaçamento interno
    borderRadius: 24, // Bordas arredondadas
    width: 156, // Largura fixa
    marginBottom: 2,
    justifyContent: "center", // Centraliza o texto verticalmente
    alignItems: "center", // Centraliza o texto horizontalmente
    color: "#ff2626", // Texto com cor da borda
    fontSize: 21,
    marginInline: 16,
    marginTop: 16,
    textDecorationLine: "underline", // Texto sublinhado
  },

  buttonText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "100",
  },

  //Ajustes na caixa de Links e Links em geral

  boxLinks: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    marginBottom: 2,
    marginTop: 8,
  },
  Link: {
    borderColor: "#fbff00",
    display: "flex",
    flexDirection: "row",
    padding: 8,
    fontSize: 22,
    borderRadius: 4,
    width: 140,
    textAlign: "center",
    marginBlock: 2,
    justifyContent: "space-around",
    textDecorationLine: "underline",
    color: "#ff2626",
  },

  textLink: {
    textAlign: "center",
    marginBottom: 32,
    color: "#fbff00",
    fontWeight: "100",
  },

  //Ajustes na caixa de imagens
  imageView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 456,
    marginBottom: 32,
  },
  image: {
    width: 456,
    height: 346,
    marginBottom: 32,
    borderRadius: 26,
  },

  //Ajustes nos icones
  icon: {
    color: "#ff2626",
    marginInline: 6, // Espaço entre o ícone e o texto
  },
});
