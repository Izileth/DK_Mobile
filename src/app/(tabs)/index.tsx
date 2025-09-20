import TestComponent from "../components/TestComponent";
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
import React, { useRef, useEffect, useState } from "react";
import { Linking } from "react-native";
import { Ionicons } from "react-native-vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter, Link } from "expo-router"; // Importa o useRouter
import { replace } from "expo-router/build/global-state/routing";
import { supabase } from "../lib/supabase";
import PurploseEffectText from "../components/Animation/TextPurploseColors";
import { AuthProvider, useAuth } from "../../context/authContext";
import Carousel from "../components/Dinamics/Carrousel";
import { carouselDataImagesIndexPrincipal } from "../components/Data";

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



const App = () => {
  // Constante de redirecionamento para links externos
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

  // Função de logout

  const { setAuth } = useAuth();

  // Função de redirecionamento para a tela de login
  async function handleReturnOut() {
    const router = useRouter(); // Garante que o roteador está disponível
    const { error } = await supabase.auth.signOut();

    if (error) {
      Alert.alert("Falha ao deslogar", error.message);
      return;
    }

    // Limpa o estado do usuário logado
    setAuth(null);

    // Redireciona imediatamente para a tela de login
    router.replace("(auth)/(loguin)");
  }
  //"#230606"  

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#1a1a1a", width: "100%" }}>
      <TestComponent />
      <LinearGradient
        style={styles.container}
        colors={["#1a1a1a", "#000000"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <Animated.View style={[{ opacity: fadeAnim }]}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>
              Drift King <Text style={styles.titleColors}>Mobile App</Text>
            </Text>
            <Text>
              <PurploseEffectText />
            </Text>
            <Pressable style={styles.logoutBox} onPress={handleReturnOut}>
              <Link href={"/(auth)/(loguin)"} style={styles.logout}>
                <Text style={styles.logoutText}>
                  {loading ? "Loading..." : "Logout"}
                </Text>
              </Link>
            </Pressable>
          </View>
        </Animated.View>
        <Animated.View style={[{ opacity: fadeAnim }]}>
          <View style={styles.contentBox}>
            <Text style={styles.title}>
              React Native App Developer for Android and IOS
            </Text>
            <Text style={styles.subtitle}>
              React Native App Developer for Android and IOS
            </Text>
            <Text style={styles.boldTitle}>Developer by Kawã Correia</Text>
          </View>
        </Animated.View>
        <Animated.View style={[{ opacity: fadeAnim }]}>
          <View style={styles.imageBox}>
            <Carousel
              images={carouselDataImagesIndexPrincipal.setOne}
              autoPlay={true}
              autoPlayInterval={5000}
              imageHeight={430}
            />
          </View>
        </Animated.View>
        <Animated.View style={[{ opacity: fadeAnim }]}>
          <View style={styles.socialBox}>
            <FlatList
              data={DATA}
              keyExtractor={(item) => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <Pressable onPress={() => handlePress(item.link)}>
                  <Ionicons
                    style={styles.icon}
                    name={item.icon}
                    size={30}
                    color="#ffffff"
                  />
                </Pressable>
              )}
            />
            <Text style={styles.credtsText}>
              Credits for fotos - Erik Mclean
            </Text>
            <Pressable
              style={styles.socialButton}
              onPress={() =>
                Linking.openURL(
                  "https://www.pexels.com/pt-br/@introspectivedsgn/"
                )
              }
            >
              <Text style={styles.socialButtonText}>Follow-me</Text>
            </Pressable>
          </View>
        </Animated.View>
      </LinearGradient>
    </ScrollView>
  );
};
export default App;

const styles = StyleSheet.create({
  //AJustes na caixa principal do aplicativo

  header: {
    height: 90,
    width: "105%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "transparent",
    paddingTop: 0,
  },

  container: {
    flex: 1,
    backgroundColor: "transparent",
    width: "100%",
    height: "100%",
    marginTop: 40,
    justifyContent: "space-around",
    alignItems: "center",
    padding: 24,
  },

  main: {
    height: 290,
    textAlign: "left",
    alignSelf: "auto",
    paddingHorizontal: 2,
    maxWidth: 960,
    marginHorizontal: "auto",
  },

  contentBox: {
    width: 450,
    maxWidth: 500,
    marginBlock: 26,
    backgroundColor: "transparent",
  },

  //Ajustes bo Titulo, paragrafos e textos

  title: {
    color: "#ffffff",
    marginBottom: 8,
    textAlign: "left",
    fontSize: 48,
    fontWeight: "100",
  },

  titleColors: {
    color: "#ff2626",
  },

  subtitle: {
    textAlign: "left",
    color: "#ffffff",
    marginBottom: 6,
    fontSize: 20,
    fontWeight: "500",
  },

  subtitleColors: {
    color: "#ff2626",
    fontWeight: "500",
  },

  boldTitle: {
    color: "#ff2626",
    marginBlock: 6,
    fontSize: 16,
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

  headerTitle: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "100",
  },
  headerTitleEfect: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 20,
    fontWeight: "500",
    color: "#ffffff",
  },

  //Ajustes na caixa de logout

  logoutBox: {
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 28,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 2,
    backgroundColor: "transparent",
  },

  logout: {
    color: "#ffffff",
    fontWeight: "100",
    fontSize: 16,
    textAlign: "center",
  },

  logoutText: {
    fontSize: 14,
  },

  //AJustes na caixa de Imagens

  imageBox: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: 490,
    height: 490,
    paddingVertical: 16,
    paddingHorizontal: 6,
  },

  //Ajustes na caixa de Redes Sociais

  socialBox: {
    width: "100%",
    height: 100,
    backgroundColor: "transparent",
    marginVertical: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 6,
  },

  icon: {
    color: "#ffffff",
    fontSize: 20,
    marginInline: 6,
    height: 24,
  },
  socialButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#ffffff",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 18,
    height: 42,
    marginLeft: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  socialButtonText: {
    color: "#fff",
    marginInline: 14,
  },

  //Ajustes nos textos de creditos
  credtsText: {
    color: "#ffffff",
    fontSize: 12,
    textAlign: "center",
  },
});
