import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Image, StyleSheet, Text, View, Dimensions, Animated, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState, useRef } from 'react';

const Content = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollViewRef = useRef(null);
    const windowWidth = Dimensions.get('window').width;
    const animatedValue = useRef(new Animated.Value(0)).current;

    const imagesOne = [
        { uri: 'https://i.pinimg.com/736x/dd/b3/2b/ddb32b67ac44089fcb34633d07620e14.jpg' },
        { uri: 'https://i.pinimg.com/736x/bf/69/27/bf69275ebf30f727c391886858674640.jpg' },
        { uri: 'https://i.pinimg.com/736x/42/c3/79/42c379dd58f332c07d151d96698d0d99.jpg' },
    ];
    
    const imagesTwo = [
        { uri: 'https://i.pinimg.com/736x/60/48/80/6048808db14bb3524f94851806e45f49.jpg' },
        { uri: 'https://i.pinimg.com/736x/d3/9a/27/d39a270428d92d3cc5b66cf9d5018314.jpg' },
        { uri: 'https://i.pinimg.com/736x/2a/e3/5b/2ae35be9739adc732842051bc0eae29c.jpg' },
    ];
    
    const imagesTwere = [
        { uri: 'https://i.pinimg.com/736x/9d/2e/c5/9d2ec57790854acca832c9f1426dcd0a.jpg' },
        { uri: 'https://i.pinimg.com/736x/85/a6/5b/85a65bbe9b82f90d55d7be37fd8a1c4b.jpg' },
        { uri: 'https://i.pinimg.com/736x/e3/40/e9/e340e954747454355f26b20dd6d26ac9.jpg' },
    ];
    
    const imagesFour = [
        { uri: 'https://i.pinimg.com/736x/53/45/84/5345842e40325146b7f4a2a0f16df352.jpg' },
        { uri: 'https://i.pinimg.com/736x/24/60/51/2460511b8a7cfef0d78fd5525b606074.jpg' },
        { uri: 'https://i.pinimg.com/736x/64/dc/96/64dc96891c884624b085e338913dbef9.jpg' },
    ];
    
    const imagesFive = [
        { uri: 'https://i.pinimg.com/736x/13/83/51/1383514c631029a497d30d75937a65df.jpg' },
        { uri: 'https://i.pinimg.com/736x/22/ec/5d/22ec5db5a8df1fa817e40f2a04544eea.jpg' },
        { uri: 'https://i.pinimg.com/736x/03/da/98/03da98070ce3d4cdab1c88b746be1de6.jpg' },
    ];
    
    const imagesSix = [
        { uri: 'https://i.pinimg.com/736x/01/61/f1/0161f131837dcd6093742e9a57c5d9e6.jpg' },
        { uri: 'https://i.pinimg.com/736x/f3/41/34/f34134439be1c5e6ffa2401e39e774d5.jpg' },
        { uri: 'https://i.pinimg.com/736x/b6/e9/30/b6e930c9696c2c5c50b47cb9ec96f368.jpg' },
        { uri: 'https://i.pinimg.com/736x/dd/87/ae/dd87ae631e9fcf00f4db2dcc77d76cd4.jpg' },
        { uri: 'https://i.pinimg.com/736x/04/c8/28/04c8282b847783a4847a52b430829f06.jpg' },
        { uri: 'https://i.pinimg.com/736x/7a/d5/43/7ad543a6f06d19228a72a90d9674feaf.jpg' },
    ];

    const imagesSeven = [
        { uri: 'https://i.pinimg.com/736x/45/62/f0/4562f0b75279fe966d77652a90e8334f.jpg' },
        { uri: 'https://i.pinimg.com/736x/1a/00/6d/1a006d82fb405110543af9e64bbc3a05.jpg' },
        { uri: 'https://i.pinimg.com/736x/3e/65/2f/3e652ff16f3bf7f45300284e01ec9dd8.jpg' },
    ]

    const handleScroll = (event) => {
        const slideIndex = Math.round(event.nativeEvent.contentOffset.x / windowWidth);
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

        <ScrollView>

            <View style={styles.container}>
                <StatusBar style="light" />

                <View style={styles.main}>
                    <Text style={styles.title}>The Content of Streets</Text>
                    <Text style={styles.subtitle}>Touge: The Japanese Mountain Races</Text>
                    <Text style={styles.paragraph}>The term "touge" refers to the winding roads in the Japanese mountains, where enthusiasts gather to test their driving skills in informal races. These competitions, often held at night to avoid enforcement, have become a fascinating and dangerous underworld. Drivers such as Keiichi Tsuchiya, known as the "Drift King", gained notoriety in these races, which inspired works such as the anime "Initial D"</Text>

                    {/* Carrossel de imagens */}
                    <View style={styles.imageView}>
                        <ScrollView style={styles.boxSlide} ref={scrollViewRef} horizontal pagingEnabled onScroll={handleScroll} showsHorizontalScrollIndicator={false}>
                            {imagesOne.map((img, index) => (
                                <Image key={index} source={{ uri: img.uri }} style={styles.imageSlide} />
                            ))}
                        </ScrollView>
                    </View>

                    {/* Indicadores de ícones */}
                    <View style={styles.iconsIndicators}>
                        {imagesOne.map((_, index) => (
                            <TouchableOpacity key={index} onPress={() => goToSlide(index)}>
                                <Ionicons
                                    name={index === activeIndex ? 'ellipse' : 'ellipse-outline'}
                                    size={20}
                                    color={index === activeIndex ? '#ff2323' : '#ccc'}
                                    style={styles.indicator}
                                />
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <View style={styles.main}>
                    <Text style={styles.subtitle}>Mid Night Club in Streets </Text>
                    <Text style={styles.paragraph}>The "Mid Night Club" was an underground group of street runners in Tokyo, active in the 1980s and 1990s. Known for their high-speed races, often exceeding 300 km/h, they defied authorities and safety on urban roads. The history of this club inspired Rockstar Games' "Midnight Club" video game series. </Text>

                    {/* Carrossel de imagens */}
                    <View style={styles.imageView}>
                        <ScrollView style={styles.boxSlide} ref={scrollViewRef} horizontal pagingEnabled onScroll={handleScroll} showsHorizontalScrollIndicator={false}>
                            {imagesTwo.map((img, index) => (
                                <Image key={index} source={{ uri: img.uri }} style={styles.imageSlide} />
                            ))}
                        </ScrollView>
                    </View>

                    {/* Indicadores de ícones */}
                    <View style={styles.iconsIndicators}>
                        {imagesTwo.map((_, index) => (
                            <TouchableOpacity key={index} onPress={() => goToSlide(index)}>
                                <Ionicons
                                    name={index === activeIndex ? 'ellipse' : 'ellipse-outline'}
                                    size={20}
                                    color={index === activeIndex ? '#ff2323' : '#ccc'}
                                    style={styles.indicator}
                                />
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <View style={styles.main}>
                    <Text style={styles.subtitle}>Saudi Arabian Races: Thrill-Seeking Youth</Text>
                    <Text style={styles.paragraph}>In Saudi Arabia, especially among young people, car races have become a popular form of entertainment. Fueled by boredom and a lack of recreational options, many turn to these illegal races, which represent a collective cry of frustration in the country.</Text>

                    {/* Carrossel de imagens */}
                    <View style={styles.imageView}>
                        <ScrollView style={styles.boxSlide} ref={scrollViewRef} horizontal pagingEnabled onScroll={handleScroll} showsHorizontalScrollIndicator={false}>
                            {imagesTwere.map((img, index) => (
                                <Image key={index} source={{ uri: img.uri }} style={styles.imageSlide} />
                            ))}
                        </ScrollView>
                    </View>

                    {/* Indicadores de ícones */}
                    <View style={styles.iconsIndicators}>
                        {imagesTwere.map((_, index) => (
                            <TouchableOpacity key={index} onPress={() => goToSlide(index)}>
                                <Ionicons
                                    name={index === activeIndex ? 'ellipse' : 'ellipse-outline'}
                                    size={20}
                                    color={index === activeIndex ? '#ff2323' : '#ccc'}
                                    style={styles.indicator}
                                />
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <View style={styles.main}>
                    <Text style={styles.subtitle}>Cannonball Run: The Illegal Run Across the United States</Text>
                    <Text style={styles.paragraph}>The "Cannonball Run" is an unofficial race that crosses the United States from coast to coast. Started in 1971, the competition challenges participants to cover the distance between New York and Los Angeles in the shortest possible time, without respecting speed limits. Over the years, the race has attracted enthusiasts looking to test their limits and those of their vehicles, resulting in several record attempts and stories of extreme speed</Text>

                    {/* Carrossel de imagens */}
                    <View style={styles.imageView}>
                        <ScrollView style={styles.boxSlide} ref={scrollViewRef} horizontal pagingEnabled onScroll={handleScroll} showsHorizontalScrollIndicator={false}>
                            {imagesFour.map((img, index) => (
                                <Image key={index} source={{ uri: img.uri }} style={styles.imageSlide} />
                            ))}
                        </ScrollView>
                    </View>

                    {/* Indicadores de ícones */}
                    <View style={styles.iconsIndicators}>
                        {imagesFour.map((_, index) => (
                            <TouchableOpacity key={index} onPress={() => goToSlide(index)}>
                                <Ionicons
                                    name={index === activeIndex ? 'ellipse' : 'ellipse-outline'}
                                    size={20}
                                    color={index === activeIndex ? '#ff2323' : '#ccc'}
                                    style={styles.indicator}
                                />
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <View style={styles.main}>
                    <Text style={styles.subtitle}>Clandestine Races in São Paulo</Text>
                    <Text style={styles.paragraph}>In São Paulo, especially in peripheral areas, clandestine street races have been a growing concern. These illegal races attract young people and enthusiasts seeking excitement and recognition, often using modified cars to increase performance. The practice puts the safety of participants and innocents at risk, in addition to defying local authorities. </Text>

                    {/* Carrossel de imagens */}
                    <View style={styles.imageView}>
                        <ScrollView style={styles.boxSlide} ref={scrollViewRef} horizontal pagingEnabled onScroll={handleScroll} showsHorizontalScrollIndicator={false}>
                            {imagesFive.map((img, index) => (
                                <Image key={index} source={{ uri: img.uri }} style={styles.imageSlide} />
                            ))}
                        </ScrollView>
                    </View>

                    {/* Indicadores de ícones */}
                    <View style={styles.iconsIndicators}>
                        {imagesFive.map((_, index) => (
                            <TouchableOpacity key={index} onPress={() => goToSlide(index)}>
                                <Ionicons
                                    name={index === activeIndex ? 'ellipse' : 'ellipse-outline'}
                                    size={20}
                                    color={index === activeIndex ? '#ff2323' : '#ccc'}
                                    style={styles.indicator}
                                />
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <View style={styles.main}>
                    <Text style={styles.subtitle}>Illegal Racing in 90s Japan</Text>
                    <Text style={styles.paragraph}>In the 1990s, Japan was the scene of illegal races known as "touge", held on winding mountain roads. These competitions attracted drivers who sought to test their skills in challenging conditions, often at night to avoid enforcement. The phenomenon has influenced global automotive culture, inspiring movies, anime, and video games.  </Text>

                    {/* Carrossel de imagens */}
                    <View style={styles.imageView}>
                        <ScrollView style={styles.boxSlide} ref={scrollViewRef} horizontal pagingEnabled onScroll={handleScroll} showsHorizontalScrollIndicator={false}>
                            {imagesSix.map((img, index) => (
                                <Image key={index} source={{ uri: img.uri }} style={styles.imageSlide} />
                            ))}
                        </ScrollView>
                    </View>

                    {/* Indicadores de ícones */}
                    <View style={styles.iconsIndicators}>
                        {imagesSix.map((_, index) => (
                            <TouchableOpacity key={index} onPress={() => goToSlide(index)}>
                                <Ionicons
                                    name={index === activeIndex ? 'ellipse' : 'ellipse-outline'}
                                    size={20}
                                    color={index === activeIndex ? '#ff2323' : '#ccc'}
                                    style={styles.indicator}
                                />
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <View style={styles.main}>
                    <Text style={styles.titleColors}>Singapure Ilegal Racers</Text>
                    <Text style={styles.paragraph}> In Singapore, illegal street racing is strictly prohibited due to strict traffic laws and heavy police presence. Despite this, there are sporadic reports of young people engaging in clandestine running activities, especially during the early hours of the morning when the streets are more deserted. Local authorities maintain constant vigilance to curb such practices, employing measures such as surveillance cameras and intensive patrols.</Text>

                    {/* Carrossel de imagens */}
                    <View style={styles.imageView}>
                        <ScrollView style={styles.boxSlide} ref={scrollViewRef} horizontal pagingEnabled onScroll={handleScroll} showsHorizontalScrollIndicator={false}>
                            {imagesSeven.map((img, index) => (
                                <Image key={index} source={{ uri: img.uri }} style={styles.imageSlide} />
                            ))}
                        </ScrollView>
                    </View>

                    {/* Indicadores de ícones */}
                    <View style={styles.iconsIndicators}>
                        {imagesSeven.map((_, index) => (
                            <TouchableOpacity key={index} onPress={() => goToSlide(index)}>
                                <Ionicons
                                    name={index === activeIndex ?  'speedometer' : 'speedometer-outline'}
                                    size={20}
                                    color={index === activeIndex ? '#ff2323' : '#ccc'}
                                    style={styles.indicator}
                                />
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <View style={styles.main}>
                    <Text style={styles.titleColors}>Hong Kong <Text style={styles.title}>Illegal Racers</Text></Text>
                    <Text style={styles.paragraph}>In Hong Kong, illegal street racing is a serious concern, with the majority of drivers participating in these activities on weekends. These activities often involve using modified cars, modifications that can increase speed and agility, and are often performed at night to avoid detection. As with Singapore, local authorities maintain constant vigilance to curb such practices, employing measures such as surveillance cameras and intensive patrols.</Text>
                </View>

                <View style={styles.main}>
                    <Text style={styles.title}>More <Text style={styles.title}>Content</Text>for Navigation</Text>
                    <View>
                        <View style={styles.boxImage}>
                             <Image source={{ uri:  'https://i.pinimg.com/736x/fa/9e/4b/fa9e4bbb1bd078a217d6b87a85290e9a.jpg' }}style={styles.image} />
                             <Image source={{ uri:  'https://i.pinimg.com/736x/ab/70/c9/ab70c9bb6505e177be408f25f314265d.jpg' }}style={styles.image} />
                             <Image source={{ uri:  'https://i.pinimg.com/736x/fc/cb/67/fccb676e60ab22cde7f2662bd3ed6ef4.jpg' }}style={styles.image} />
                        </View>
                    </View>
                </View>

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 100,
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
        marginBottom: 30
    },

    boxSlide: {
        width: '100%',
        height: 450,
    },

    imageSlide: {
        width: 450,
        height: 450,
        marginInline: 12,
        resizeMode: 'cover',
    },

    iconsIndicators: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row',
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
        marginBottom: 10
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
        marginBottom: 20
    },

    paragraph: {
        color: "#f1f1f1",
        fontSize: 18,
        marginBottom: 30
    },
    //AJustes na caixa de imagens 

    boxImage: {
        width: "100%",
        height: 450,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20
    },

    image: {
        width: 150,
        height: 450,
        resizeMode: "cover",
        marginVertical: 10,
    },
});

export default Content;
