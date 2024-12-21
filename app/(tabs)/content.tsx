import { Ionicons } from "@expo/vector-icons";
import { ScrollView,Image, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from 'react';


const Content = () => {
    return (
    <ScrollView>
         <View style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.main}>
                <Text style={styles.title}>The Content of Streets</Text>
                <Text style={styles.subtitle}>Touge: The Japanese Mountain Races</Text>
                <Text style={styles.paragraph}>The term "touge" refers to the winding roads in the Japanese mountains, where enthusiasts gather to test their driving skills in informal races. These competitions, often held at night to avoid enforcement, have become a fascinating and dangerous underworld. Drivers such as Keiichi Tsuchiya, known as the "Drift King", gained notoriety in these races, which inspired works such as the anime "Initial D</Text>
                <View style={styles.imageView}>
                    <Image source={{ uri:  'https://i.pinimg.com/736x/b0/ef/9e/b0ef9ee5fec6e2ac4ef13c6f1b33ae4f.jpg' }} style={styles.image} />
                    <Image source={{ uri:  'https://i.pinimg.com/736x/e7/8f/95/e78f957ebb6bc6ac71177d3e9480c6fd.jpg' }} style={styles.image} />
                    <Image source={{ uri:  'https://i.pinimg.com/736x/ba/7d/7c/ba7d7c9d9aa008e6e93eab64755f7119.jpg' }} style={styles.image} />
                </View>
            </View>
            <View style={styles.main}>
                <Text style={styles.subtitle}>Mid Night Club: Speed in Tokyo's Nights</Text>
                <Text style={styles.paragraph}>The "Mid Night Club" was an underground group of street runners in Tokyo, active in the 1980s and 1990s. Known for their high-speed races, often exceeding 300 km/h, they defied authorities and safety on urban roads. The history of this club inspired Rockstar Games' "Midnight Club" video game series</Text>
                <View style={styles.imageView}>
                    <Image source={{ uri:  'https://i.pinimg.com/736x/53/d5/e8/53d5e869a79107118e4a100757350d02.jpg' }} style={styles.image} />
                    <Image source={{ uri:  'https://i.pinimg.com/736x/7d/81/ec/7d81ecc6eb4657bd1ab556cfa237dc7f.jpg' }} style={styles.image} />
                    <Image source={{ uri:  'https://i.pinimg.com/736x/a1/d3/c0/a1d3c0a5b9bcdf1f4da7335572931195.jpg' }} style={styles.image} />
                </View>     
            </View>
            <View style={styles.main}>
                <Text style={styles.subtitle}>Saudi Arabian Races: Thrill-Seeking Youth
                </Text>
                <Text style={styles.paragraph}>In Saudi Arabia, especially among young people, car races have become a popular form of entertainment. Fueled by boredom and a lack of recreational options, many turn to these illegal races, which represent a collective cry of frustration in the country</Text>
                <View style={styles.imageView}>
                    <Image source={{ uri:  'https://i.pinimg.com/736x/3a/c1/7c/3ac17cc87751f538bc13e2b3b26fc32a.jpg' }} style={styles.image} />
                    <Image source={{ uri:  'https://i.pinimg.com/736x/2d/ad/b8/2dadb8a996317a416c2ea626cad0c143.jpg' }} style={styles.image} />
                    <Image source={{ uri:  'https://i.pinimg.com/736x/fe/ec/3a/feec3afef1c2d9465d89f9be4c6aa08c.jpg' }} style={styles.image} />
                </View>       
            </View>
            <View style={styles.main}>
                <Text style={styles.subtitle}>Final Thoughts</Text>
                <Text style={styles.paragraph}>While these night races and races are exciting and part of automotive culture, it is important to highlight that they are illegal and extremely dangerous activities. They put the lives of participants and third parties at risk. Promoting races on public roads is illegal and can result in serious legal consequences.For enthusiasts who seek a thrill in a safe way, there are events and competitions organized on closed circuits, where it is possible to test driving skills without compromising public safety.</Text>
                <View style={styles.imageView}>
                    <Image source={{ uri:  'https://i.pinimg.com/736x/64/96/90/649690011c188ad5d4241d325a756a97.jpg' }} style={styles.image} />
                    <Image source={{ uri:  'https://i.pinimg.com/736x/9d/55/25/9d552512c52307c88b6e3acc7090ccbc.jpg' }} style={styles.image} />
                    <Image source={{ uri:  'https://i.pinimg.com/736x/4d/a9/b5/4da9b5adcfe5f921e4a8d7ab5edbc782.jpg' }} style={styles.image} />
                </View>
            </View> 
        </View>
    </ScrollView>   
    )
}

export default Content;

const styles = StyleSheet.create({

    // Ajustes na caixa pricipal do aplicativo

    container: {
        flex: 1,
        backgroundColor: "#000000",
        alignItems: "center",
        justifyContent: "center"
    },

    main: {
        width: "100%",
        padding: 15,
    },

    //Ajustes na caixa de Imagens
    imageView: {
        backgroundColor: "#000000",
        width: "100%",
        height: 570,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 30
    }
    ,
    
    image: {
        width:156,
        height: 560,
        marginInline: 2,
        marginBottom: 30
    },

    //Ajustes no Titulo, paragrafos e textos
    text: {
        color: "#ff2626",
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20
    },
    title: {
        color: "#ff2626",
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 10
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
})