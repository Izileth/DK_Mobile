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
import TopStyle from "../components/Animation/Header";
import Streets from "../components/Object/TabContent/contentStreets";

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
      marginTop: 100,
    },
  });

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <TopStyle />
          <Streets />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Content;