import React, { useRef, useState, useEffect } from 'react';
import { Animated, ScrollView, View, Pressable, StyleSheet, Text, Image, TouchableOpacity, Alert, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ModalTags from '../Dinamics/ModalsTags';
import WordsPulsing from '../Animation/WordsInPulsing';
import { theme } from '../../../Styles/theme';

const CarouselTags = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [modalVisible, setModalVisible] = useState(false);
  const [currentModalContent, setCurrentModalContent] = useState<{
    title: string;
    content: React.ReactNode;
  }>({ title: '', content: null });

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  const openModal = (title: string, content: React.ReactNode) => {
    setCurrentModalContent({ title, content });
    setModalVisible(true);
  };

  const OperUrl = {
    pilotOne: () => {
      const url = 'https://br.pinterest.com/pin/137782069845198877/';
      Linking.openURL(url).catch((err) => console.error("Erro ao Abrir o Link", err));
    },
  };
  
  const items = [
    {
      text: "Pilot One",
      duration: 2000,
      modalTitle: "Block Yates",
      modalContent: (
        <View style={modalStyles.container}>
          <View style={modalStyles.imageContainer}>
            <Image 
              source={{ uri: "https://i.pinimg.com/736x/c2/3f/18/c23f185a8a551854fc379985ca7e0e32.jpg" }}
              style={modalStyles.image}
              resizeMode="cover"
            />
          </View>
          <View style={modalStyles.contentContainer}>
            <TouchableOpacity onPress={OperUrl.pilotOne} style={styles.buttonUrl}>
              <WordsPulsing text="Press me" />
              <Ionicons name="arrow-up" size={20} style={styles.icon} />
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
              source={{ uri: "https://i.pinimg.com/736x/25/19/d4/2519d41458b767cfeee76f7abd4d0e6a.jpg" }}
              style={modalStyles.image}
              resizeMode="cover"
            />
          </View>
          <View style={modalStyles.contentContainer}>
            <TouchableOpacity onPress={OperUrl.pilotOne} style={styles.buttonUrl}>
              <WordsPulsing text="Press me" />
              <Ionicons name="arrow-up" size={20} style={styles.icon} />
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
              source={{ uri: "https://i.pinimg.com/736x/84/76/fd/8476fd0fa60ac0ad59f2e371980fdca9.jpg" }}
              style={modalStyles.image}
              resizeMode="cover"
            />
          </View>
          <View style={modalStyles.contentContainer}>
           <TouchableOpacity onPress={OperUrl.pilotOne} style={styles.buttonUrl}>
              <WordsPulsing text="Press me" />
              <Ionicons name="arrow-up" size={20} style={styles.icon} />
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
              source={{ uri: "https://i.pinimg.com/736x/1b/b0/8b/1bb08b6564ee09f4b54012cc1d56dfd4.jpg" }}
              style={modalStyles.image}
              resizeMode="cover"
            />
          </View>
          <View style={modalStyles.contentContainer}>
           <TouchableOpacity onPress={OperUrl.pilotOne} style={styles.buttonUrl}>
              <WordsPulsing text="Press me" />
              <Ionicons name="arrow-up" size={20} style={styles.icon} />
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
              source={{ uri: "https://i.pinimg.com/736x/4f/83/a4/4f83a49ce5d38e18d102e7cdd63818f1.jpg" }}
              style={modalStyles.image}
              resizeMode="cover"
            />
          </View>
          <View style={modalStyles.contentContainer}>
            <TouchableOpacity onPress={OperUrl.pilotOne} style={styles.buttonUrl}>
              <WordsPulsing text="Press me" />
              <Ionicons name="arrow-up" size={20} style={styles.icon} />
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
              source={{ uri: "https://i.pinimg.com/736x/08/a9/7f/08a97f1f5f0e01d158567d56112f2d7c.jpg" }}
              style={modalStyles.image}
              resizeMode="cover"
            />
          </View>
          <View style={modalStyles.contentContainer}>
            <TouchableOpacity onPress={OperUrl.pilotOne} style={styles.buttonUrl}>
              <WordsPulsing text="Press me" />
              <Ionicons name="arrow-up" size={20} style={styles.icon} />
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
                <WordsPulsing
                  text={item.text}
                  duration={item.duration}
                  startColor="#fff"
                  endColor="transparent"
                />
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
    backgroundColor: '#080808',
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
    backgroundColor: theme.colors.dark.secondary,
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
    color: '#ff2626',
    marginInline: 4,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 20,
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
    backgroundColor: 'transparent', // Fundo escuro para melhor contraste
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
    alignSelf: 'center', // Centraliza o container
    justifyContent: 'center',
    alignItems: 'center', // Centraliza os elementos internos
    backgroundColor: 'transparent', // Fundo ligeiramente mais claro que o container
    borderRadius: 10,
  },
});

export default CarouselTags;