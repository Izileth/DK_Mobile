import { Ionicons } from "@expo/vector-icons";
import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../context/themeContext";

// Componentes
import Header from "../components/Object/AllApp/Header";
import StoryStreets from "../components/Object/TabContent/Component/contentStoryStreets";
import StoryPlayers from "../components/Object/TabContent/Component/contentStoryPlayers";
import Streets from "../components/Object/TabContent/Component/contentStreets";
import StoryCredits from "../components/Object/TabHistory/Component/contentStoryCredits";

const Content = () => {
  // Hook deve ser chamado dentro do componente
  const theme = useTheme();

  // Styles deve usar o theme de dentro do componente
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.dark.primary,
      alignItems: "center",
      justifyContent: "center",
    },
    main: {
      width: "100%",
      borderRadius: 12,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 50,
      backgroundColor: theme.colors.dark.primary,
    },
  });

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#101010", width: "100%" }}
    >
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.main}>
            <Header />
          </View>
          <View style={styles.main}>
            <StoryStreets />
          </View>
          <View style={styles.main}>
            <Streets />
          </View>
          <View style={styles.main}>
            <StoryPlayers />
          </View>
          <View style={styles.main}>
            <StoryCredits />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Content;
