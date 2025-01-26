import { ScrollView, FlatList, Image, TouchableOpacity, StyleSheet, Text, View,} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { useTheme } from "../../../../../context/themeContext";

import { Linking } from "react-native";

const Brand = () => {

    const theme = useTheme();
    const styles = StyleSheet.create({
      box: {
          width: "100%",
          padding: 24,
          backgroundColor: theme.colors.dark.primary,
          borderRadius: 12,
          textAlign: "center",
          alignItems: "center",
          shadowColor: theme.colors.dark.primary,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 4,
          elevation: 2,
          marginBottom: 90,
      },

      //Ajustes nos titulos, subtitulos e paragrafos
      title: {
          color: theme.colors.red.primary,
          fontSize: 32,
          marginBottom: 20,
          fontWeight: "600",
      },

      boldTitle: {
          color: theme.colors.red.primary,
          fontSize: 28,
          marginBottom: 12,
          marginInlineStart: 18,
          fontWeight: "600",
      },

      titleBrand: {
          color: theme.colors.red.primary,
          fontSize: 28,
          marginBottom: 12,
          fontWeight: "600",
      },

      brandTitle: {
          color: theme.colors.red.primary,
          fontSize: 28,
          marginBottom: 16,
          fontWeight: "600",
      },

      boldParagraph: {
          color: theme.colors.white.primary,
          fontSize: 20,
          marginBottom: 8,
          marginBlock: 12,
          fontWeight: "600",
      },

      subtitle: {
          color: theme.colors.red.primary,
          fontSize: 24,
          marginBottom: 32,
          fontWeight: "500",
      },
      paragraph: {
          color: theme.colors.white.primary,
          fontSize: 14,
          marginBottom: 10,
          fontWeight: "400",
      },
      text: {
          color: theme.colors.white.primary,
          fontSize: 14,
          textAlign: "justify",
      },

      //Ajustes nas caixas de conteúdo

      boxContent: {
          marginBottom: 58,
          backgroundColor: theme.colors.dark.tertiary,
          justifyContent: "center",
          width: "100%",
          padding: 8,
          height: 630,
          borderRadius: 12,
          shadowColor: theme.colors.dark.tertiary,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 4,
          elevation: 2,
      },

      boxList: {
          width: "100%",
          height: 490,
          padding: 12,
          marginBlock: 28,
          marginBottom: 16,
          borderRadius: 12,
          backgroundColor: theme.colors.dark.primary,
          justifyContent: "center",
      },

      boxBrand: {
          width: "100%",
          padding: 12,
          marginBlock: 28,
          marginBottom: 12,
          borderRadius: 12,
          backgroundColor: theme.colors.dark.primary,
         justifyContent: "center",
      },


      //Ajustes na caixa de imagens

      boxImage: {
          marginBlock: 24,
          padding: 4,
          borderRadius: 12,
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: theme.colors.dark.primary,
          position: "relative",
          height: 380,
          width: "95%",
      },

      image: {
          width: 442,
          height: 262,
          marginBottom: 16,
          borderRadius: 12,
      },

      imageBrand: {
          justifyContent: "center",
          alignItems: "center",
          width: 426,
          height: 262,
          marginBottom: 16,
          borderRadius: 12,
      },
      logo: {
          width: 148,
          height: 428,
          marginBottom: 16,
      },
    });

     // Chama a Constante para ir ao Link Http
     
    const openBrand = {

      brandNissan: () => {
      const url = 'https://www.nissan.co.jp/';
      Linking.openURL(url).catch((err) => console.error("Erro ao Abrir o Link", err));
      },
      brandMitsubichi: () => {
      const url = 'https://www.mitsubishi-motors.co.jp/'
      Linking.openURL(url).catch((err) => console.error("Erro ao Abrir o Link", err));
      },
      brandToyota: () => {
      const url = 'https://toyota.jp/';
      Linking.openURL(url).catch((err) => console.error("Erro ao Abrir o Link", err));
      },
      brandHonda: () => {
      const url = 'https://www.honda.co.jp/?msockid=3e8ecfece648628b193edb82e71f63df';
      Linking.openURL(url).catch((err) => console.error("Erro ao Abrir o Link", err));
      },
      brandMardza: () => {
      const url = 'https://www.mazda.co.jp/';
      Linking.openURL(url).catch((err) => console.error("Erro ao Abrir o Link", err));
      },
      brandLexus: () => {
      const url = 'https://lexus.jp/';
      Linking.openURL(url).catch((err) => console.error("Erro ao Abrir o Link", err));
      },  
    };   

    return (
        <ScrollView>
            <SafeAreaView>
                <View style={styles.box}>
                    <Text style={styles.title}>Nissan</Text>
                    <View style={styles.boxImage}>
                    <Image
                        source={{
                        uri: "https://i.pinimg.com/736x/a1/84/b0/a184b0fd49ec766f7dba8fe760760a81.jpg",
                        }}
                        style={styles.imageBrand}
                    />
                    </View>
                    <View style={styles.boxBrand}>
                    <Text style={styles.brandTitle}>History</Text>
                    <Text style={styles.paragraph}>
                    Nissan stands as a symbol of raw power and precision. Known for the iconic GT-R and 370Z, Nissan vehicles combine cutting-edge technology with high-performance engines, making them favorites for straight-line speed and sharp cornering.
                    </Text>
                    </View>
                    <TouchableOpacity onPress={openBrand.brandNissan}>
                    <Text style={styles.boldParagraph}>Learn more about Nissan</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.box}>
                    <Text style={styles.titleBrand}>Toyota</Text>
                    <View style={styles.boxImage}>
                    <Image
                        source={{
                        uri: "https://i.pinimg.com/736x/7e/52/65/7e5265aba65f20d6ede4d5536b2509b5.jpg",
                        }}
                        style={styles.imageBrand}
                    />
                    </View>
                    <View style={styles.boxBrand}>
                    <Text style={styles.brandTitle}>History</Text>
                    <Text style={styles.paragraph}>
                    Toyota represents a perfect balance of reliability and versatility. Cars like the Supra and AE86 have cemented Toyota's reputation in the racing world, excelling in both drift and high-speed circuits with their exceptional tuning potential and durability.
                    </Text>
                    </View>
                    <TouchableOpacity onPress={openBrand.brandToyota}>
                    <Text style={styles.boldParagraph}>Learn more about Toyota</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.box}>
                    <Text style={styles.titleBrand}>Mitsubishi</Text>
                    <View style={styles.boxImage}>
                    <Image
                        source={{
                        uri: "https://i.pinimg.com/736x/d0/7c/f8/d07cf819bbd62d7b9d339ebfeecbe7fe.jpg",
                        }}
                        style={styles.imageBrand}
                    />
                    </View>
                    <View style={styles.boxBrand}>
                    <Text style={styles.brandTitle}>History</Text>
                    <Text style={styles.paragraph}>
                    Mitsubishi is synonymous with all-wheel-drive dominance and rally-inspired performance. The Lancer Evolution series, in particular, shines on uneven terrains and urban sprints, delivering stability and aggression in every race.
                    </Text>
                    </View>
                    <TouchableOpacity onPress={openBrand.brandMitsubichi}>
                    <Text style={styles.boldParagraph}>Learn more about Mitsubishi</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.box}>
                    <Text style={styles.titleBrand}>Honda</Text>
                    <View style={styles.boxImage}>
                    <Image
                        source={{
                        uri: "https://i.pinimg.com/736x/ca/2e/0f/ca2e0f554f671d709f2830d69f325036.jpg",
                        }}
                        style={styles.imageBrand}
                    />
                    </View>
                    <View style={styles.boxBrand}>
                    <Text style={styles.brandTitle}>History</Text>
                    <Text style={styles.paragraph}>
                    Honda brings unmatched reliability and customization potential. The Civic and NSX are staples in the street scene, known for their high-revving engines, efficient power delivery, and endless modification options that allow racers to tailor their cars to any challenge.
                    </Text>
                    </View>
                    <TouchableOpacity onPress={openBrand.brandHonda}>
                    <Text style={styles.boldParagraph}>Learn more about Honda</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.box}>
                    <Text style={styles.titleBrand}>Mardza</Text>
                    <View style={styles.boxImage}>
                    <Image
                        source={{
                        uri: "https://i.pinimg.com/736x/29/28/2e/29282e31de93bfff420f2b7dfaf433b3.jpg",
                        }}
                        style={styles.imageBrand}
                    />
                    </View>
                    <View style={styles.boxBrand}>
                    <Text style={styles.brandTitle}>History</Text>
                    <Text style={styles.paragraph}>
                    Mazda offers lightweight agility and unmatched handling. The RX-7 and MX-5 Miata dominate tight turns and technical courses, thanks to their sleek designs and responsive engineering, powered by innovations like the rotary engine.
                    </Text>
                    </View>
                    <TouchableOpacity onPress={openBrand.brandMardza}>
                    <Text style={styles.boldParagraph}>Learn more about Mazda</Text>
                    </TouchableOpacity>
                </View>                
            </SafeAreaView>
        </ScrollView>
    );
}
export default Brand;