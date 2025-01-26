// React e React Native core
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Componentes
import Header from "../components/Object/AllApp/Header";
import CarouselShorts from "../components/Dinamics/CarrouselShorts";

// Content Components

import Brand from "../components/Object/TabHistory/Component/contentBrand";
import Cars from "../components/Object/TabHistory/Component/contentCars";
import HistoryLeague from "../components/Object/TabHistory/Component/contentHistory";
import StoryCars from "../components/Object/TabHistory/Component/contentStoryCars";
import StoryRacers from "../components/Object/TabHistory/Component/contentStoryRacers";
import StoryCredits from "../components/Object/TabHistory/Component/contentStoryCredits";
import StoryBrand from "../components/Object/TabHistory/Component/contentStoryBrand";

// Data
import { carouselDataImagesHistory } from "../components/Data";


//Styes
import { useTheme } from "../../context/themeContext";

const History = () => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    // Ajustes no caixa pricipal do aplicativo

    container: {
      flex: 1,
      backgroundColor: theme.colors.dark.primary,
      paddingBottom: 24,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 50,
    },

    main: {
      width: "100%",
      borderRadius: 12,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },

    box: {
      width: "100%",
      padding: 24,
      backgroundColor: theme.colors.dark.secondary,
      borderRadius: 12,
      textAlign: "center",
      alignItems: "center",
      shadowColor: theme.colors.dark.secondary,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      elevation: 2,
      marginBottom: 90,
    },

    //Ajustes na caixa do Carrousel

    mainCarrousel: {
      marginBlock: 24,
      padding: 4,
      borderRadius: 12,
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: theme.colors.dark.primary,
      position: "relative",
      height: "auto",
      width: "95%",
    },
  });
  return (
      <ScrollView style={{ backgroundColor: "#000", width: "100%" }}>
        <View style={styles.container}>
          <Header />
          <View style={styles.mainCarrousel}>
            <CarouselShorts
              images={carouselDataImagesHistory.setOne}
              autoPlay={true}
              autoPlayInterval={2500}
              imageHeight={350}
            />
          </View>

          <View style={styles.main}>
            <StoryRacers />
          </View>

          <View style={styles.main}>
            <HistoryLeague />
          </View>

          <View style={styles.mainCarrousel}>
            <CarouselShorts
              images={carouselDataImagesHistory.setOne}
              autoPlay={true}
              autoPlayInterval={2500}
              imageHeight={350}
            />
          </View>

          <View style={styles.main}>
            <StoryCars />
          </View>

          <View style={styles.main}>
            <Cars />
          </View>

          <View style={styles.mainCarrousel}>
            <CarouselShorts
              images={carouselDataImagesHistory.setOne}
              autoPlay={true}
              autoPlayInterval={2500}
              imageHeight={350}
            />
          </View>

          <View style={styles.main}>
            <StoryBrand />
          </View>

          <View style={styles.main}>
            <Brand />
          </View>

          <View style={styles.main}>
            <StoryCredits />
          </View>
        </View>
      </ScrollView>
  );
};

export default History;
