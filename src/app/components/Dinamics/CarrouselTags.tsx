import React, { useRef, useState, useEffect } from 'react';
import { Animated, ScrollView, View, Pressable, StyleSheet, Text, Image, TouchableOpacity, Alert, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ModalTags from '../Dinamics/ModalsTags';
import WordsPulsing from '../Animation/WordsInPulsing';
import {useRouter} from 'expo-router'
import { useTheme } from "../../../context/themeContext";


const CarouselTags = () => {
    
  const theme = useTheme();
  const styles = StyleSheet.create({
    list: {
      width: '100%',
      height: '100%',
      display: "flex",
      flexDirection: "row",
      flexWrap: 'nowrap',
      justifyContent: "center",
      paddingHorizontal: 12,
    },
    button: {
      width: 150,
      height: 44,
      padding: 12,
      backgroundColor: theme.colors.red.tertiary,
      borderRadius: 6,
      marginInline: 10,
      flexDirection: 'row',
      justifyContent: "center",
      alignItems: "center",
      textAlign: 'center',
      overflow: "hidden",
      position: "relative",
    },

    buttonUrl:{
      width: 130,
      height: 44,
      fontSize: 18,
      padding: 12,
      backgroundColor: theme.colors.red.tertiary,
      borderRadius: 6,
      marginInline: 10,
      flexDirection: 'row',
      justifyContent: "center",
      alignItems: "center",
      textAlign: 'center',
      overflow: "hidden",
      position: "relative",
    },

    icon: {
      color: '#fff',
      marginInline: 4,
    },
    paragraph: {
      fontSize: 14,
      lineHeight: 20,
      color: '#fff',
      textAlign: 'justify',
    },
    text: {
      fontSize: 16,
      lineHeight: 16,
      marginInline:4,
      color: '#fff',
      textAlign: 'justify',
    },
    highlight: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff',
    }
  });


  const modalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.dark.primary, // Fundo escuro para melhor contraste
      padding: 150, // Padding mais razoável
      width: '100%', // Garante que o container ocupe toda a largura disponível
      maxWidth: 600, // Limita a largura máxima para melhor legibilidade
      alignSelf: 'center', // Centraliza o container
      justifyContent: 'center',
      alignItems: 'center', // Centraliza os elementos internos
    },
    imageContainer: {
      width: 380, // Ocupa toda a largura do container
      aspectRatio: 16/9, // Mantém proporção da imagem
      borderRadius: 10,
      overflow: 'hidden',
      marginBottom: 15,
    },
    image: {
      width: '100%',
      height: '100%',
    },
    contentContainer: {
      width: '100%',
      paddingHorizontal: 190,
      padding: 30,
      flexDirection: 'row',
      alignSelf: 'center', // Centraliza o container
      justifyContent: 'center',
      alignItems: 'center', // Centraliza os elementos internos
      backgroundColor: 'transparent', // Fundo ligeiramente mais claro que o container
      borderRadius: 10,
    },
  });

  // Cahma as constantes para a definiçã do Modal e das Animações
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [modalVisible, setModalVisible] = useState(false);
  const [currentModalContent, setCurrentModalContent] = useState<{
    title: string;
    content: React.ReactNode;
  }>({ title: '', content: null });

  // Chama o Hook para Iniciar a Animação do Carousel
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  // Chama o Modal para ser Aberto
  const openModal = (title: string, content: React.ReactNode) => {
    setCurrentModalContent({ title, content });
    setModalVisible(true);
  };

  // Chama a Constante para ir ao Link Http
  const openUrl = {
    pilot: () => {
      const url = 'https://orientweb.netlify.app/';
      Linking.openURL(url).catch((err) => console.error("Erro ao Abrir o Link", err));
    },
  };
  
  // Chama o Hook para Redirecionar a rota (Tabs)
  const openSection = () => {
    router.push('/(tabs)');
  }
  
  const items = [
    {
      text: "Pilot One",
      duration: 2000,
      modalTitle: "Block Yates",
      modalContent: (
        <View style={modalStyles.container}>
          <View style={modalStyles.imageContainer}>
            <Image 
              source={{ uri: "https://i.pinimg.com/736x/50/f9/58/50f9580d5f01675ff9ff177cb5166bb3.jpg" }}
              style={modalStyles.image}
              resizeMode="cover"
            />
          </View>
          <View style={modalStyles.contentContainer}>
            <TouchableOpacity onPress={openUrl.pilot} style={styles.buttonUrl}>
              <WordsPulsing text="Press me"
              startColor='#fff'
              endColor='#fff'
              />
              <Ionicons name="arrow-up" size={20} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={openSection} style={styles.buttonUrl}>
              <WordsPulsing text="Return me"
              startColor='#fff'
              endColor='#fff'
              />
              <Ionicons name="arrow-down" size={20} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      )
    },
    {
      text: "Pilot Two",
      duration: 2000,
      modalTitle: "Rafael Steves",
      modalContent: (
        <View style={modalStyles.container}>
          <View style={modalStyles.imageContainer}>
            <Image 
              source={{ uri: "https://i.pinimg.com/736x/f8/6f/29/f86f29fa88a0ea9f551dad38953b3a80.jpg" }}
              style={modalStyles.image}
              resizeMode="cover"
            />
          </View>
          <View style={modalStyles.contentContainer}>
            <TouchableOpacity onPress={openUrl.pilot} style={styles.buttonUrl}>
              <WordsPulsing text="Press me"
              startColor='#fff'
              endColor='#fff'
              />
              <Ionicons name="arrow-up" size={20} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={openSection} style={styles.buttonUrl}>
              <WordsPulsing text="Return me"
              startColor='#fff'
              endColor='#fff'
              />
              <Ionicons name="arrow-down" size={20} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      )
    },
    {
      text: "Pilot Twere",
      duration: 2000,
      modalTitle: "Pilot of Detroit",
      modalContent: (
        <View style={modalStyles.container}>
          <View style={modalStyles.imageContainer}>
            <Image 
              source={{ uri: "https://i.pinimg.com/736x/3a/af/83/3aaf8364994bb880bf0426f5c8f1de3b.jpg" }}
              style={modalStyles.image}
              resizeMode="cover"
            />
          </View>
          <View style={modalStyles.contentContainer}>
           <TouchableOpacity onPress={openUrl.pilot} style={styles.buttonUrl}>
              <WordsPulsing text="Press me"
              startColor='#fff'
              endColor='#fff'
              />
              <Ionicons name="arrow-up" size={20} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={openSection} style={styles.buttonUrl}>
              <WordsPulsing text="Return me"
              startColor='#fff'
              endColor='#fff'
              />
              <Ionicons name="arrow-down" size={20} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      )
    },
   
    {
      text: "Pilot Four",
      duration: 2000,
      modalTitle: "DOug Tabbutt",
      modalContent: (
        <View style={modalStyles.container}>
          <View style={modalStyles.imageContainer}>
            <Image 
              source={{ uri: "https://i.pinimg.com/736x/b7/f7/92/b7f792b9f5eb0b18de6b91cc8f6e4c20.jpg" }}
              style={modalStyles.image}
              resizeMode="cover"
            />
          </View>
          <View style={modalStyles.contentContainer}>
           <TouchableOpacity onPress={openUrl.pilot} style={styles.buttonUrl}>
              <WordsPulsing text="Press me"
              startColor='#fff'
              endColor='#fff'
              />
              <Ionicons name="arrow-up" size={20} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={openSection} style={styles.buttonUrl}>
              <WordsPulsing text="Return me"
              startColor='#fff'
              endColor='#fff'
              />
              <Ionicons name="arrow-down" size={20} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      )
    },
   
    {
      text: "Pilot Five",
      duration: 2000,
      modalTitle: "Arne Toman",
      modalContent: (
        <View style={modalStyles.container}>
          <View style={modalStyles.imageContainer}>
            <Image 
              source={{ uri: "https://i.pinimg.com/736x/eb/2b/b9/eb2bb901da0e8d56ecd52801522121ad.jpg" }}
              style={modalStyles.image}
              resizeMode="cover"
            />
          </View>
          <View style={modalStyles.contentContainer}>
            <TouchableOpacity onPress={openUrl.pilot} style={styles.buttonUrl}>
              <WordsPulsing text="Press me"
              startColor='#fff'
              endColor='#fff'
              />
              <Ionicons name="arrow-up" size={20} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={openSection} style={styles.buttonUrl}>
              <WordsPulsing text="Return me"
              startColor='#fff'
              endColor='#fff'
              />
              <Ionicons name="arrow-down" size={20} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      )
    },
    {
      text: "Pilot Six",
      duration: 2000,
      modalTitle: "Pilot of Oclahoma",
      modalContent: (
        <View style={modalStyles.container}>
          <View style={modalStyles.imageContainer}>
            <Image 
              source={{ uri: "https://i.pinimg.com/736x/85/47/24/854724e7f4a486f9fe1b0f07ff9a8e4a.jpg" }}
              style={modalStyles.image}
              resizeMode="cover"
            />
          </View>
          <View style={modalStyles.contentContainer}>
            <TouchableOpacity onPress={openUrl.pilot} style={styles.buttonUrl}>
              <WordsPulsing text="Press me"
              startColor='#fff'
              endColor='#fff'
              />
              <Ionicons name="arrow-up" size={20} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={openSection} style={styles.buttonUrl}>
              <WordsPulsing text="Return me"
              startColor='#fff'
              endColor='#fff'
              />
              <Ionicons name="arrow-down" size={20} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      )
    },
   
   
  ];

  return (
    <>
      <Animated.View style={{ opacity: fadeAnim }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.list}>
            {items.map((item, index) => (
              <Pressable
                key={index}
                onPress={() => openModal(item.modalTitle, item.modalContent)}
                style={styles.button}
              >
                <Text style={styles.text}>Press-me</Text>
                <Ionicons
                  style={styles.icon}
                  name="close"
                  size={18}
                  color={'#ddd'}
                />
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </Animated.View>

      <ModalTags
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        title={currentModalContent.title}
      >
        {currentModalContent.content}
      </ModalTags>
    </>
  );
};

export default CarouselTags;