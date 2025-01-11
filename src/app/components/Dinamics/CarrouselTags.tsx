// CarouselTags.tsx
import React, { useRef, useState, useEffect } from 'react';
import { Animated, ScrollView, View, Pressable, StyleSheet, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ModalTags from '../Dinamics/ModalsTags';
import WordsPulsing from '../Animation/WordsInPulsing';

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

  const items = [
    {
      text: "Pilot One",
      duration: 2000,
      modalTitle: "Block Yates",
      modalContent: (
        <View style={modalStyles.container}>
          <View style={modalStyles.imageContainer}>
            <Image 
              source={{ uri: "https://i.pinimg.com/736x/71/25/cd/7125cd4d1d486621547b35c502ff027f.jpg" }}
              style={modalStyles.image}
              resizeMode="cover"
            />
          </View>
          <View style={modalStyles.contentContainer}>
             <Text style={styles.paragraph}>
              Illegal street racing has been the stage for drivers who have left indelible marks on this underworld. Here are some of them:{'\n\n'}
              <Text style={styles.highlight}>Brock Yates{'\n'}</Text>
              Brock Yates, senior editor of Car and Driver magazine, was the creator of the "Cannonball Run", an illegal race that crossed the United States from coast to coast. Started in 1971, the competition defied traffic laws and tested the limits of the participating drivers. Yates not only organized but also participated in the races, becoming an iconic figure in this scenario. His boldness and passion for motorsport left a controversial but undeniably influential legacy.{'\n\n'}
              <Text style={styles.highlight}>FLATOUT</Text>
            </Text>
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
              source={{ uri: "https://i.pinimg.com/736x/71/25/cd/7125cd4d1d486621547b35c502ff027f.jpg" }}
              style={modalStyles.image}
              resizeMode="cover"
            />
          </View>
          <View style={modalStyles.contentContainer}>
             <Text style={styles.paragraph}>
              Illegal street racing has been the stage for drivers who have left indelible marks on this underworld. Here are some of them:{'\n\n'}
              <Text style={styles.highlight}>Brock Yates{'\n'}</Text>
              Brock Yates, senior editor of Car and Driver magazine, was the creator of the "Cannonball Run", an illegal race that crossed the United States from coast to coast. Started in 1971, the competition defied traffic laws and tested the limits of the participating drivers. Yates not only organized but also participated in the races, becoming an iconic figure in this scenario. His boldness and passion for motorsport left a controversial but undeniably influential legacy.{'\n\n'}
              <Text style={styles.highlight}>FLATOUT</Text>
            </Text>
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
              source={{ uri: "https://i.pinimg.com/736x/71/25/cd/7125cd4d1d486621547b35c502ff027f.jpg" }}
              style={modalStyles.image}
              resizeMode="cover"
            />
          </View>
          <View style={modalStyles.contentContainer}>
             <Text style={styles.paragraph}>
              Illegal street racing has been the stage for drivers who have left indelible marks on this underworld. Here are some of them:{'\n\n'}
              <Text style={styles.highlight}>Brock Yates{'\n'}</Text>
              Brock Yates, senior editor of Car and Driver magazine, was the creator of the "Cannonball Run", an illegal race that crossed the United States from coast to coast. Started in 1971, the competition defied traffic laws and tested the limits of the participating drivers. Yates not only organized but also participated in the races, becoming an iconic figure in this scenario. His boldness and passion for motorsport left a controversial but undeniably influential legacy.{'\n\n'}
              <Text style={styles.highlight}>FLATOUT</Text>
            </Text>
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
              source={{ uri: "https://i.pinimg.com/736x/71/25/cd/7125cd4d1d486621547b35c502ff027f.jpg" }}
              style={modalStyles.image}
              resizeMode="cover"
            />
          </View>
          <View style={modalStyles.contentContainer}>
             <Text style={styles.paragraph}>
              Illegal street racing has been the stage for drivers who have left indelible marks on this underworld. Here are some of them:{'\n\n'}
              <Text style={styles.highlight}>Brock Yates{'\n'}</Text>
              Brock Yates, senior editor of Car and Driver magazine, was the creator of the "Cannonball Run", an illegal race that crossed the United States from coast to coast. Started in 1971, the competition defied traffic laws and tested the limits of the participating drivers. Yates not only organized but also participated in the races, becoming an iconic figure in this scenario. His boldness and passion for motorsport left a controversial but undeniably influential legacy.{'\n\n'}
              <Text style={styles.highlight}>FLATOUT</Text>
            </Text>
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
              source={{ uri: "https://i.pinimg.com/736x/71/25/cd/7125cd4d1d486621547b35c502ff027f.jpg" }}
              style={modalStyles.image}
              resizeMode="cover"
            />
          </View>
          <View style={modalStyles.contentContainer}>
             <Text style={styles.paragraph}>
              Illegal street racing has been the stage for drivers who have left indelible marks on this underworld. Here are some of them:{'\n\n'}
              <Text style={styles.highlight}>Brock Yates{'\n'}</Text>
              Brock Yates, senior editor of Car and Driver magazine, was the creator of the "Cannonball Run", an illegal race that crossed the United States from coast to coast. Started in 1971, the competition defied traffic laws and tested the limits of the participating drivers. Yates not only organized but also participated in the races, becoming an iconic figure in this scenario. His boldness and passion for motorsport left a controversial but undeniably influential legacy.{'\n\n'}
              <Text style={styles.highlight}>FLATOUT</Text>
            </Text>
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
              source={{ uri: "https://i.pinimg.com/736x/71/25/cd/7125cd4d1d486621547b35c502ff027f.jpg" }}
              style={modalStyles.image}
              resizeMode="cover"
            />
          </View>
          <View style={modalStyles.contentContainer}>
             <Text style={styles.paragraph}>
              Illegal street racing has been the stage for drivers who have left indelible marks on this underworld. Here are some of them:{'\n\n'}
              <Text style={styles.highlight}>Brock Yates{'\n'}</Text>
              Brock Yates, senior editor of Car and Driver magazine, was the creator of the "Cannonball Run", an illegal race that crossed the United States from coast to coast. Started in 1971, the competition defied traffic laws and tested the limits of the participating drivers. Yates not only organized but also participated in the races, becoming an iconic figure in this scenario. His boldness and passion for motorsport left a controversial but undeniably influential legacy.{'\n\n'}
              <Text style={styles.highlight}>FLATOUT</Text>
            </Text>
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
    zIndex: -1,
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
    zIndex: -1,
  },
  icon: {
    marginInline: 4,
    zIndex: -1,
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
    backgroundColor: 'transparent',
    padding: 180,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  imageContainer: {
    width: 370,
    height:200,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    marginBottom: 15,
    width: '100%',
    paddingVertical: 70,
    paddingHorizontal: 180,
    backgroundColor: '#transparent',
    borderRadius: 10,
  },
});

export default CarouselTags;