import {
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Animated,
  Pressable,
  FlatList,
} from "react-native";
import { useEffect, useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import CarrouselWords from "../../../Dinamics/CarrouselWords";
import WordsPulsing from "../../../Animation/WordsInPulsing";
import { Linking } from "react-native";

const ProfileContent = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.box}>
          // Caixa de Instruções sobre a seção
          <Text style={styles.title}>Automotive Midias</Text>
          <Text style={styles.subtitle}>
            Social Midias in the Instragram of the culture Automotive and more
            others midias.
          </Text>
          <Text style={styles.paragraph}>
            JDM (Japanese Domestic Market) automotive culture has a vibrant
            community of enthusiasts who share their passion for Japanese
            vehicles through various platforms, especially Instagram. Here are
            some notable profiles that celebrate this culture:
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: {
    width: "100%",
    height: "auto",
    backgroundColor: "#040404",
  },

  //Ajustes nos Titulos, paragrafos e textos
  title: {
    color: "#ff2626",
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 10,
  },
  titleColors: {
    color: "#ff2626",
    fontWeight: "bold",
    fontSize: 24,
  },
  subtitle: {
    color: "#ffffff",
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  paragraph: {
    color: "#ffffff",
    marginBottom: 25,
    fontSize: 18,
    textAlign: "center",
  },
});

export default ProfileContent;
