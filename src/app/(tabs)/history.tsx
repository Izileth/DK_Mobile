// React e React Native core
import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Componentes
import TopStyle from "../components/Animation/Header";
import CarouselShorts from "../components/Dinamics/CarrouselShorts";

// Content Components

import Brand from "../components/Object/TabHistory/Component/contentBrand";
import Cars from "../components/Object/TabHistory/Component/contentCars";
import HistoryLeague from "../components/Object/TabHistory/Component/contentHistory";
import HistoryBrand from "../components/Object/TabHistory/Component/contentHistoryBrand";
import HistoryCars from "../components/Object/TabHistory/Component/contentHistoryCars";
import HistoryRacers from "../components/Object/TabHistory/Component/contentHistoryRacers";
import SociaCredits from "../components/Object/TabHistory/Component/contentSocialCredits";

// Data
import { carouselDataImagesHistory } from "../components/Data";
import { DarkTheme } from "@react-navigation/native";

//Styes 
import { ThemeProvider } from '../../context/themeContext';
import { useTheme } from "../../context/themeContext";


const History = () => {
  const theme = useTheme();
  const styles = StyleSheet.create({

  // Ajustes no caixa pricipal do aplicativo

  container: {
    flex: 1,
    backgroundColor: theme.colors.dark.primary,
    paddingTop: 48,
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
    shadowColor: "#000",
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
    backgroundColor: theme.colors.dark.tertiary,
    position: "relative",
    height: 390,
    width: "95%",
  },
  });
  return (

    <SafeAreaView>
       <ScrollView>
          <View style={styles.container}>
             <TopStyle />
                <View style={styles.mainCarrousel}>
                  <CarouselShorts  images={carouselDataImagesHistory.setOne}  autoPlay={true}  autoPlayInterval={3000}  imageHeight={320}/>
                </View>
                
                <View style={styles.main}>
                   <HistoryRacers />
                </View>

                <View style={styles.main}>
                  <HistoryLeague />
                </View>

                <View style={styles.mainCarrousel}>
                  <CarouselShorts   images={carouselDataImagesHistory.setTwo}     autoPlay={true}     autoPlayInterval={3000}     imageHeight={320}/>
                </View>

                <View style={styles.main}>
                  <HistoryCars />
                </View>

                <View style={styles.main}>
                  <Cars />
                </View>

                <View style={styles.mainCarrousel}>
                  <CarouselShorts  images={carouselDataImagesHistory.setThree}  autoPlay={true}  autoPlayInterval={3000}  imageHeight={320} />
                </View>

                <View style={styles.main}>
                  <HistoryBrand />
                </View>

                <View style={styles.main}>
                  <Brand />
                </View>

                <View style={styles.main}>
                  <SociaCredits />
              </View>     
          </View>
        </ScrollView>
    </SafeAreaView>
  );
};

export default History;

