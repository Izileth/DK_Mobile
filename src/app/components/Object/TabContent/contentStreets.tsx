import { ScrollView, StyleSheet,View, Text, Animated, Dimensions, Image, TouchableOpacity} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import React, { useState, useRef } from "react";
import { SafeAreaFrameContext, SafeAreaView } from 'react-native-safe-area-context';

//Styes Content

import { ThemeProvider } from '../../../../context/themeContext';
import { useTheme } from "../../../../context/themeContext";
import { carouselDataContent, carouselDataImages } from '../../Data';
const theme = useTheme();

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

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.box}>
                  <View style={styles.main}>
                    
                    <Text style={styles.title}>The Content of Streets</Text>
                    <Text style={styles.subtitle}>
                        Touge: The Japanese Mountain Races
                    </Text>
                    <Text style={styles.paragraph}>
                        The term "touge" refers to the winding roads in the Japanese
                        mountains, where enthusiasts gather to test their driving skills in
                        informal races. These competitions, often held at night to avoid
                        enforcement, have become a fascinating and dangerous underworld.
                        Drivers such as Keiichi Tsuchiya, known as the "Drift King", gained
                        notoriety in these races, which inspired works such as the anime
                        "Initial D"
                    </Text>

                    {/* Carrossel de imagens */}
                    <View style={styles.imageView}>
                        <ScrollView
                        style={styles.boxSlide}
                        ref={scrollViewRef}
                        horizontal
                        pagingEnabled
                        onScroll={handleScroll}
                        showsHorizontalScrollIndicator={false}
                        >
                        {carouselDataContent.setOne.map((img, index) => (
                            <Image
                            key={index}
                            source={{ uri: img.uri }}
                            style={styles.imageSlide}
                            />
                        ))}
                        </ScrollView>
                    </View>

                    {/* Indicadores de ícones */}
                    <View style={styles.iconsIndicators}>
                        {carouselDataContent.setOne.map((_, index) => (
                        <TouchableOpacity key={index} onPress={() => goToSlide(index)}>
                            <Ionicons
                            name={index === activeIndex ? "ellipse" : "ellipse-outline"}
                            size={20}
                            color={index === activeIndex ? "#ff2323" : "#ccc"}
                            style={styles.indicator}
                            />
                        </TouchableOpacity>
                        ))}
                    </View>
                    </View>

                    <View style={styles.main}>
                    <Text style={styles.subtitle}>Mid Night Club in Streets </Text>
                    <Text style={styles.paragraph}>
                        The "Mid Night Club" was an underground group of street runners in
                        Tokyo, active in the 1980s and 1990s. Known for their high-speed
                        races, often exceeding 300 km/h, they defied authorities and safety
                        on urban roads. The history of this club inspired Rockstar Games'
                        "Midnight Club" video game series.{" "}
                    </Text>

                    {/* Carrossel de imagens */}
                    <View style={styles.imageView}>
                        <ScrollView
                        style={styles.boxSlide}
                        ref={scrollViewRef}
                        horizontal
                        pagingEnabled
                        onScroll={handleScroll}
                        showsHorizontalScrollIndicator={false}
                        >
                        {carouselDataContent.setTwo.map((img, index) => (
                            <Image
                            key={index}
                            source={{ uri: img.uri }}
                            style={styles.imageSlide}
                            />
                        ))}
                        </ScrollView>
                    </View>

                    {/* Indicadores de ícones */}
                    <View style={styles.iconsIndicators}>
                        {carouselDataContent.setTwo.map((_, index) => (
                        <TouchableOpacity key={index} onPress={() => goToSlide(index)}>
                            <Ionicons
                            name={index === activeIndex ? "ellipse" : "ellipse-outline"}
                            size={20}
                            color={index === activeIndex ? "#ff2323" : "#ccc"}
                            style={styles.indicator}
                            />
                        </TouchableOpacity>
                        ))}
                    </View>
                    </View>

                    <View style={styles.main}>
                    <Text style={styles.subtitle}>
                        Saudi Arabian Races: Thrill-Seeking Youth
                    </Text>
                    <Text style={styles.paragraph}>
                        In Saudi Arabia, especially among young people, car races have
                        become a popular form of entertainment. Fueled by boredom and a lack
                        of recreational options, many turn to these illegal races, which
                        represent a collective cry of frustration in the country.
                    </Text>

                    {/* Carrossel de imagens */}
                    <View style={styles.imageView}>
                        <ScrollView
                        style={styles.boxSlide}
                        ref={scrollViewRef}
                        horizontal
                        pagingEnabled
                        onScroll={handleScroll}
                        showsHorizontalScrollIndicator={false}
                        >
                        {carouselDataContent.setThree.map((img, index) => (
                            <Image
                            key={index}
                            source={{ uri: img.uri }}
                            style={styles.imageSlide}
                            />
                        ))}
                        </ScrollView>
                    </View>

                    {/* Indicadores de ícones */}
                    <View style={styles.iconsIndicators}>
                        {carouselDataContent.setThree.map((_, index) => (
                        <TouchableOpacity key={index} onPress={() => goToSlide(index)}>
                            <Ionicons
                            name={index === activeIndex ? "ellipse" : "ellipse-outline"}
                            size={20}
                            color={index === activeIndex ? "#ff2323" : "#ccc"}
                            style={styles.indicator}
                            />
                        </TouchableOpacity>
                        ))}
                    </View>
                    </View>

                    <View style={styles.main}>
                    <Text style={styles.subtitle}>
                        Cannonball Run: The Illegal Run Across the United States
                    </Text>
                    <Text style={styles.paragraph}>
                        The "Cannonball Run" is an unofficial race that crosses the United
                        States from coast to coast. Started in 1971, the competition
                        challenges participants to cover the distance between New York and
                        Los Angeles in the shortest possible time, without respecting speed
                        limits. Over the years, the race has attracted enthusiasts looking
                        to test their limits and those of their vehicles, resulting in
                        several record attempts and stories of extreme speed
                    </Text>

                    {/* Carrossel de imagens */}
                    <View style={styles.imageView}>
                        <ScrollView
                        style={styles.boxSlide}
                        ref={scrollViewRef}
                        horizontal
                        pagingEnabled
                        onScroll={handleScroll}
                        showsHorizontalScrollIndicator={false}
                        >
                        {carouselDataContent.setFour.map((img, index) => (
                            <Image
                            key={index}
                            source={{ uri: img.uri }}
                            style={styles.imageSlide}
                            />
                        ))}
                        </ScrollView>
                    </View>

                    {/* Indicadores de ícones */}
                    <View style={styles.iconsIndicators}>
                        {carouselDataContent.setFour.map((_, index) => (
                        <TouchableOpacity key={index} onPress={() => goToSlide(index)}>
                            <Ionicons
                            name={index === activeIndex ? "ellipse" : "ellipse-outline"}
                            size={20}
                            color={index === activeIndex ? "#ff2323" : "#ccc"}
                            style={styles.indicator}
                            />
                        </TouchableOpacity>
                        ))}
                    </View>
                    </View>

                    <View style={styles.main}>
                    <Text style={styles.subtitle}>Clandestine Races in São Paulo</Text>
                    <Text style={styles.paragraph}>
                        In São Paulo, especially in peripheral areas, clandestine street
                        races have been a growing concern. These illegal races attract young
                        people and enthusiasts seeking excitement and recognition, often
                        using modified cars to increase performance. The practice puts the
                        safety of participants and innocents at risk, in addition to defying
                        local authorities.{" "}
                    </Text>

                    {/* Carrossel de imagens */}
                    <View style={styles.imageView}>
                        <ScrollView
                        style={styles.boxSlide}
                        ref={scrollViewRef}
                        horizontal
                        pagingEnabled
                        onScroll={handleScroll}
                        showsHorizontalScrollIndicator={false}
                        >
                        {carouselDataContent.setFive.map((img, index) => (
                            <Image
                            key={index}
                            source={{ uri: img.uri }}
                            style={styles.imageSlide}
                            />
                        ))}
                        </ScrollView>
                    </View>

                    {/* Indicadores de ícones */}
                    <View style={styles.iconsIndicators}>
                        {carouselDataContent.setFive.map((_, index) => (
                        <TouchableOpacity key={index} onPress={() => goToSlide(index)}>
                            <Ionicons
                            name={index === activeIndex ? "ellipse" : "ellipse-outline"}
                            size={20}
                            color={index === activeIndex ? "#ff2323" : "#ccc"}
                            style={styles.indicator}
                            />
                        </TouchableOpacity>
                        ))}
                    </View>
                    </View>

                    <View style={styles.main}>
                    <Text style={styles.subtitle}>Illegal Racing in 90s Japan</Text>
                    <Text style={styles.paragraph}>
                        In the 1990s, Japan was the scene of illegal races known as "touge",
                        held on winding mountain roads. These competitions attracted drivers
                        who sought to test their skills in challenging conditions, often at
                        night to avoid enforcement. The phenomenon has influenced global
                        automotive culture, inspiring movies, anime, and video games.{" "}
                    </Text>

                    {/* Carrossel de imagens */}
                    <View style={styles.imageView}>
                        <ScrollView
                        style={styles.boxSlide}
                        ref={scrollViewRef}
                        horizontal
                        pagingEnabled
                        onScroll={handleScroll}
                        showsHorizontalScrollIndicator={false}
                        >
                        {carouselDataContent.setSix.map((img, index) => (
                            <Image
                            key={index}
                            source={{ uri: img.uri }}
                            style={styles.imageSlide}
                            />
                        ))}
                        </ScrollView>
                    </View>

                    {/* Indicadores de ícones */}
                    <View style={styles.iconsIndicators}>
                        {carouselDataContent.setSix.map((_, index) => (
                        <TouchableOpacity key={index} onPress={() => goToSlide(index)}>
                            <Ionicons
                            name={index === activeIndex ? "ellipse" : "ellipse-outline"}
                            size={20}
                            color={index === activeIndex ? "#ff2323" : "#ccc"}
                            style={styles.indicator}
                            />
                        </TouchableOpacity>
                        ))}
                    </View>
                    </View>

                    <View style={styles.main}>
                    <Text style={styles.titleColors}>Singapure Ilegal Racers</Text>
                    <Text style={styles.paragraph}>
                        {" "}
                        In Singapore, illegal street racing is strictly prohibited due to
                        strict traffic laws and heavy police presence. Despite this, there
                        are sporadic reports of young people engaging in clandestine running
                        activities, especially during the early hours of the morning when
                        the streets are more deserted. Local authorities maintain constant
                        vigilance to curb such practices, employing measures such as
                        surveillance cameras and intensive patrols.
                    </Text>

                    {/* Carrossel de imagens */}
                    <View style={styles.imageView}>
                        <ScrollView
                        style={styles.boxSlide}
                        ref={scrollViewRef}
                        horizontal
                        pagingEnabled
                        onScroll={handleScroll}
                        showsHorizontalScrollIndicator={false}
                        >
                        {carouselDataContent.setSeven.map((img, index) => (
                            <Image
                            key={index}
                            source={{ uri: img.uri }}
                            style={styles.imageSlide}
                            />
                        ))}
                        </ScrollView>
                    </View>

                    {/* Indicadores de ícones */}
                    <View style={styles.iconsIndicators}>
                        {carouselDataContent.setSeven.map((_, index) => (
                        <TouchableOpacity key={index} onPress={() => goToSlide(index)}>
                            <Ionicons
                            name={
                                index === activeIndex
                                ? "speedometer"
                                : "speedometer-outline"
                            }
                            size={20}
                            color={index === activeIndex ? "#ff2323" : "#ccc"}
                            style={styles.indicator}
                            />
                        </TouchableOpacity>
                        ))}
                    </View>
                    </View>

                    <View style={styles.main}>
                    <Text style={styles.titleColors}>
                        Hong Kong <Text style={styles.title}>Illegal Racers</Text>
                    </Text>
                    <Text style={styles.paragraph}>
                        In Hong Kong, illegal street racing is a serious concern, with the
                        majority of drivers participating in these activities on weekends.
                        These activities often involve using modified cars, modifications
                        that can increase speed and agility, and are often performed at
                        night to avoid detection. As with Singapore, local authorities
                        maintain constant vigilance to curb such practices, employing
                        measures such as surveillance cameras and intensive patrols.
                    </Text>
                    </View>
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    box: {
        height: 'auto',
        width: '100%',
        backgroundColor: theme.colors.dark.primary,
    },
    
  main: {
    width: "100%",
    padding: 15,
  },
  imageView: {
    backgroundColor: "#000000",
    width: "100%",
    height: 450,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },

  boxSlide: {
    width: "100%",
    height: 450,
  },

  imageSlide: {
    width: 450,
    height: 450,
    marginInline: 12,
    resizeMode: "cover",
  },

  iconsIndicators: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
  },

  indicator: {
    marginHorizontal: 5,
  },

  boxContent: {
    backgroundColor: "#000000",
    width: "100%",
    height: 920,
    padding: 15,
    marginBottom: 20,
    justifyContent: "center",
  },

  title: {
    color: "#ff2626",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },

  titleColors: {
    color: "#ffffff",
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
    fontSize: 24,
    marginBottom: 20,
  },

  paragraph: {
    color: "#f1f1f1",
    fontSize: 18,
    marginBottom: 30,
  },
  //AJustes na caixa de imagens

  boxImage: {
    width: "100%",
    height: 450,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  image: {
    width: 150,
    height: 450,
    resizeMode: "cover",
    marginVertical: 10,
  },

});

export default Streets;