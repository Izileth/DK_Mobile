import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Animated,
  Dimensions,
} from "react-native";
import React, { useState, useRef } from "react";
import {
  SafeAreaView,
} from "react-native-safe-area-context";

//Content

import CarouselModels from "../../../Dinamics/CarrouselModels";

//Styles

import { useTheme } from "../../../../../context/themeContext";
import {
  carouselDataImagesContent,
} from "../../../Data";

const Streets = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef(null);
  const windowWidth = Dimensions.get("window").width;
  const animatedValue = useRef(new Animated.Value(0)).current;

  const handleScroll = (event) => {
    const slideIndex = Math.round(
      event.nativeEvent.contentOffset.x / windowWidth
    );
    setActiveIndex(slideIndex);

    // Executa a animação de transição dos ícones
    Animated.timing(animatedValue, {
      toValue: slideIndex,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const goToSlide = (index) => {
    scrollViewRef.current.scrollTo({ x: index * windowWidth, animated: true });
    setActiveIndex(index);
  };

  const theme = useTheme();

  const styles = StyleSheet.create({
    box: {
      height: "auto",
      marginBlockStart: 32,
      width: "100%",
      backgroundColor: theme.colors.dark.primary,
    },

    main: {
      width: "95%",
      padding: 12,
      marginInline: 12,
      marginBlock: 24,
      borderRadius: 12,
      shadowColor: theme.colors.dark.primary,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      backgroundColor: theme.colors.dark.primary,
    },

    title: {
      color: "#ff2626",
      fontSize: 32,
      marginBlockStart: 12,
      marginInlineStart: 6,
      fontWeight: "bold",
      marginBottom: 10,
    },

    titleColors: {
      color: "#ffffff",
      marginBlockStart: 12,
      fontSize: 32,
      textAlign: "left",
      fontWeight: "bold",
      marginBottom: 10,
      textShadowColor: "#000000",
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 5,
    },
    subtitle: {
      color: "#f1f1f1",
      marginBlockStart: 12,
      marginInlineStart: 6,
      fontSize: 24,
      marginBottom: 20,
    },

    paragraph: {
      color: "#f1f1f1",
      textAlign: 'justify',
      marginInlineStart: 6,
      width: 440,
      fontSize: 18,
      marginBottom: 30,
    },
  });

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.box}>
          <View style={styles.main}>
            <CarouselModels
              images={carouselDataImagesContent.setOne}
              autoPlay={true}
              indicatorColor="#ff0000"
              imageStyle={{ height: 340 }}
            />
            <Text style={styles.subtitle}>
              Touge: The Japanese Mountain Races
            </Text>
            <Text style={styles.paragraph}>
              The term "touge" refers to the winding roads in the Japanese
              mountains, where enthusiasts gather to test their driving skills
              in informal races. These competitions, often held at night to
              avoid enforcement, have become a fascinating and dangerous
              underworld. Drivers such as Keiichi Tsuchiya, known as the "Drift
              King", gained notoriety in these races, which inspired works such
              as the anime "Initial D"
            </Text>
          </View>

          <View style={styles.main}>
            <CarouselModels
              images={carouselDataImagesContent.setTwo}
              autoPlay={true}
              indicatorColor="#ff0000"
              imageStyle={{ height: 340 }}
            />
            <Text style={styles.subtitle}>Mid Night Club in Streets </Text>
            <Text style={styles.paragraph}>
              The "Mid Night Club" was an underground group of street runners in
              Tokyo, active in the 1980s and 1990s. Known for their high-speed
              races, often exceeding 300 km/h, they defied authorities and
              safety on urban roads. The history of this club inspired Rockstar
              Games' "Midnight Club" video game series.{" "}
            </Text>
          </View>

          <View style={styles.main}>
            <CarouselModels
              images={carouselDataImagesContent.setThree}
              autoPlay={true}
              indicatorColor="#ff0000"
              imageStyle={{ height: 340 }}
            />
            <Text style={styles.subtitle}>
              Saudi Arabian Races: Thrill-Seeking Youth
            </Text>
            <Text style={styles.paragraph}>
              In Saudi Arabia, especially among young people, car races have
              become a popular form of entertainment. Fueled by boredom and a
              lack of recreational options, many turn to these illegal races,
              which represent a collective cry of frustration in the country.
            </Text>
          </View>

          <View style={styles.main}>
            <CarouselModels
              images={carouselDataImagesContent.setFour}
              autoPlay={true}
              indicatorColor="#ff0000"
              imageStyle={{ height: 340 }}
            />
            <Text style={styles.subtitle}>
              Cannonball Run: The Illegal Run Across the United States
            </Text>
            <Text style={styles.paragraph}>
              The "Cannonball Run" is an unofficial race that crosses the United
              States from coast to coast. Started in 1971, the competition
              challenges participants to cover the distance between New York and
              Los Angeles in the shortest possible time, without respecting
              speed limits. Over the years, the race has attracted enthusiasts
              looking to test their limits and those of their vehicles,
              resulting in several record attempts and stories of extreme speed
            </Text>
          </View>

          <View style={styles.main}>
            <CarouselModels
              images={carouselDataImagesContent.setFive}
              autoPlay={true}
              indicatorColor="#ff0000"
              imageStyle={{ height: 340 }}
            />
            <Text style={styles.subtitle}>Clandestine Races in São Paulo</Text>
            <Text style={styles.paragraph}>
              In São Paulo, especially in peripheral areas, clandestine street
              races have been a growing concern. These illegal races attract
              young people and enthusiasts seeking excitement and recognition,
              often using modified cars to increase performance. The practice
              puts the safety of participants and innocents at risk, in addition
              to defying local authorities.{" "}
            </Text>
          </View>

          <View style={styles.main}>
            <CarouselModels
              images={carouselDataImagesContent.setSix}
              autoPlay={true}
              indicatorColor="#ff0000"
              imageStyle={{ height: 340 }}
            />
            <Text style={styles.subtitle}>Illegal Racing in 90s Japan</Text>
            <Text style={styles.paragraph}>
              In the 1990s, Japan was the scene of illegal races known as
              "touge", held on winding mountain roads. These competitions
              attracted drivers who sought to test their skills in challenging
              conditions, often at night to avoid enforcement. The phenomenon
              has influenced global automotive culture, inspiring movies, anime,
              and video games.{" "}
            </Text>
          </View>

          <View style={styles.main}>
            <CarouselModels
              images={carouselDataImagesContent.setSix}
              autoPlay={true}
              indicatorColor="#ff0000"
              imageStyle={{ height: 340 }}
            />
            <Text style={styles.titleColors}>Singapure Ilegal Racers</Text>
            <Text style={styles.paragraph}>
              In Singapore, illegal street racing is strictly prohibited due to
              strict traffic laws and heavy police presence. Despite this, there
              are sporadic reports of young people engaging in clandestine
              running activities, especially during the early hours of the
              morning when the streets are more deserted. Local authorities
              maintain constant vigilance to curb such practices, employing
              measures such as surveillance cameras and intensive patrols.
            </Text>
          </View>

          <View style={styles.main}> </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Streets;
