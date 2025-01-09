// CarouselTags.tsx
import React, { useRef, useState, useEffect } from 'react';
import {Text, Animated, ScrollView, View, Pressable, StyleSheet ,Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ModalTags from './ModalsTags';
import WordsPulsing from '../Animation/WordsInPulsing';
import { CarouselItem } from '../Types';

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

  const items: CarouselItem[] = [
    {
      text: "Pilot One",
      duration: 2000,
      modalTitle: "Pilots of the Underworld",
      modalContent: (
        <View>
          <View style={styles.box}>
               <Image src="https://i.pinimg.com/736x/71/25/cd/7125cd4d1d486621547b35c502ff027f.jpg"></Image>
          </View>
          <Text style={styles.paragraph}>Illegal street racing has been the stage for drivers who have left indelible marks on this underworld. Here are some of them:Brock YatesBrock Yates, senior editor of Car and Driver magazine, was the creator of the "Cannonball Run", an illegal race that crossed the United States from coast to coast. Started in 1971, the competition defied traffic laws and tested the limits of the participating drivers. Yates not only organized but also participated in the races, becoming an iconic figure in this scenario. His boldness and passion for motorsport left a controversial but undeniably influential legacy. FLATOUT</Text>
        </View>
      )
    },

    {
      text: "Pilot Two",
      duration: 2000,
      modalTitle: "Pilots of the Underworld",
      modalContent: (
        <View>
          <View style={styles.box}>
               <Image src="https://i.pinimg.com/736x/71/25/cd/7125cd4d1d486621547b35c502ff027f.jpg"></Image>
          </View>
          <Text style={styles.paragraph}>Illegal street racing has been the stage for drivers who have left indelible marks on this underworld. Here are some of them: Rafael Estevez Rafael Estevez, a Dominican driver based in New York, gained notoriety in the city's street races in the 90s. His skill behind the wheel and his constant presence in illegal competitions caught the attention of the media, becoming the inspiration for Vibe magazine's article "Racer X", which later influenced the creation of the movie "Fast and Furious". Estevez embodied the adrenaline and risks associated with urban clandestine racing</Text>
        </View>
      )
    },
    {
      text: "Pilot Twere",
      duration: 2000,
      modalTitle: "Pilots of the Underworld",
      modalContent: (
        <View>
          <View style={styles.box}>
               <Image src="https://i.pinimg.com/736x/71/25/cd/7125cd4d1d486621547b35c502ff027f.jpg"></Image>
          </View>
          <Text style={styles.paragraph}>Illegal street racing has been the stage for drivers who have left indelible marks on this underworld. Here are some of them: Arne Toman and Doug TabbuttArne Toman and Doug Tabbutt are known for setting a record in the "Cannonball Run", an unofficial race that crosses the United States from coast to coast. In 2019, the pair completed the journey in a record time of 27 hours and 25 minutes, driving a modified Mercedes-Benz E63 AMG. His feat drew attention to the persistence of these illegal races, even decades after their origin. </Text>
        </View>
      )
    },
    {
      text: "Pilot Four",
      duration: 2000,
      modalTitle: "Pilots of the Underworld",
      modalContent: (
        <View>
          <View style={styles.box}>
               <Image src="https://i.pinimg.com/736x/71/25/cd/7125cd4d1d486621547b35c502ff027f.jpg"></Image>
          </View>
          <Text style={styles.paragraph}>Illegal street racing has been the stage for drivers who have left indelible marks on this underworld. Here are some of them:Oklahoma City PilotsOklahoma City is known for its active illegal street racing scene, highlighted in the "Races Prohibited" series. Local drivers, such as Justin "Big Chief" Shearer and Shawn "Murder Nova" Ellington, gained notoriety for their skills and powerful cars, becoming central figures in this underworld. MA</Text>
        </View>
      )
    },
    {
      text: "Pilot Five",
      duration: 2000,
      modalTitle: "Pilots of the Underworld",
      modalContent: (
        <View>
           <View style={styles.box}>
               <Image src="https://i.pinimg.com/736x/71/25/cd/7125cd4d1d486621547b35c502ff027f.jpg"></Image>
          </View>
          <Text style={styles.paragraph}>Illegal street racing has been the stage for drivers who have left indelible marks on this underworld. Here are some of them:  Detroit PilotsDetroit, with its rich automotive history, is also home to a vibrant illegal street racing scene. Riders such as Brian "Chucky" Davis have distinguished themselves for their participations in clandestine competitions, contributing to the city's reputation as a center for street racing. YOUTUBE These drivers exemplify the adrenaline and risks associated with illegal street racing, leaving their marks on this parallel universe of motorsport.</Text>
        </View>
      )
    },

    {
      text: "Pilot Six",
      duration: 2000,
      modalTitle: "Pilots of the Underworld",
      modalContent: (
        <View>
          <View style={styles.box}>
               <Image src="https://i.pinimg.com/736x/71/25/cd/7125cd4d1d486621547b35c502ff027f.jpg"></Image>
          </View>
          <Text style={styles.paragraph}>Illegal street racing has been the stage for drivers who have left indelible marks on this underworld. Here are some of them: Rafael Estevez Rafael Estevez, a Dominican driver based in New York, gained notoriety in the city's street races in the 90s. His skill behind the wheel and his constant presence in illegal competitions caught the attention of the media, becoming the inspiration for Vibe magazine's article "Racer X", which later influenced the creation of the movie "Fast and Furious". Estevez embodied the adrenaline and risks associated with urban clandestine racing</Text>
        </View>
      )
    },
    // Adicione mais itens conforme necessário
  ];

  return (
    <>
      <Animated.View style={{ opacity: fadeAnim }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.list}>
            {items.map((item, index) => (
              <Pressable    key={index}    onPress={() => openModal(item.modalTitle, item.modalContent)}    style={styles.button}  >
                <WordsPulsing  text={item.text}  duration={item.duration}  startColor="#fff"  endColor="transparent"   />
                <Ionicons style={styles.icon} name="chevron-collapse" size={18} color={'#ddd'}    />
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </Animated.View>

      <ModalTags  visible={modalVisible}  onClose={() => setModalVisible(false)}  title={currentModalContent.title}>  {currentModalContent.content} </ModalTags>
    </>
  );
};

const styles = StyleSheet.create({

  box: {
    height: 240,
    width: '100%',
    padding: 16,
    borderRadius: 12,
    marginBlock:12,
    backgroundColor: '#1a1a1a',
  },
  list: {
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
  paragraph: {
    color: '#fff',
    textAlign: 'justify',
    fontSize: 14,
  },
  icon: {
    marginInline: 14,
    zIndex: -1,
  },
});

export default CarouselTags;