import {
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Linking } from "react-native";
import TopStyle from "../components/Animation/Header";
import CarouselTabs from "../components/Dinamics/CarrouselTabs";
import ContentHistory from "../components/Object/TabHistory/contentHistory";
import ContentHistoryCars from "../components/Object/TabHistory/contentHistoryCars";
import ContentCars from "../components/Object/TabHistory/contentCars";
import ContentBrand from "../components/Object/TabHistory/contentBrand";
import ContentHistoryBrand from "../components/Object/TabHistory/contentHistoryBrand";
import ContentHistoryRacers from "../components/Object/TabHistory/contentHistoryRacers";
import ContentSociaCredits from "../components/Object/TabHistory/contentSocialCredits";

const History = () => {
  // Redirecionamento caso haja falha no Link
  const handlePress = async (link: string) => {
    const canOpen = await Linking.canOpenURL(link);
    if (canOpen) {
      Linking.openURL(link).catch((err) =>
        console.error("Erro ao abrir o link:", err)
      );
    } else {
      console.error("URL inválida ou não suportada:", link);
    }
  };

  // Dados de Link

  //Primero Carrousel

  const images_one = [
    {
      uri: 'https://i.pinimg.com/736x/30/35/1c/30351c9c808185b37448927727ff0bd5.jpg',
    },
    {
      uri: 'https://i.pinimg.com/736x/27/50/63/2750631ee5dde16e5f3c5952963776ec.jpg',
    },
    {
      uri: "https://i.pinimg.com/736x/07/04/cc/0704cc00b3837bc29ad4e1ddf5c6fdf2.jpg",
    },
  ];

  //Segundo Carrousel
  const images_two = [
    {
      uri: "https://i.pinimg.com/736x/7a/9c/ed/7a9ced8afa55ff7760cbfb99d1529e2a.jpg",
    },
    {
      uri: "https://i.pinimg.com/736x/2d/20/f9/2d20f99ef449aaab542cfccfabbba553.jpg",
    },
    {
      uri: "https://i.pinimg.com/736x/6e/39/a4/6e39a4208a7b46116b0792a57fead952.jpg",
    },
    {
      uri: "https://i.pinimg.com/736x/db/7e/78/db7e7831352ce7b80d02b5cc6d28040f.jpg",
    },
    {
      uri: "https://i.pinimg.com/736x/2d/20/f9/2d20f99ef449aaab542cfccfabbba553.jpg",
    },
    {
      uri: "https://i.pinimg.com/736x/49/15/dd/4915dd781b93c830067972493bdfce72.jpg",
    },
  ];

  //Terceiro Carrousel
  const images_twere = [
    {
      uri: "https://i.pinimg.com/736x/69/62/00/69620076941e42a75573545e433fb03d.jpg",
    },
    {
      uri: "https://i.pinimg.com/736x/5c/d2/cf/5cd2cf5964c778208854ccce48d81d75.jpg",
    },
    {
      uri: "https://i.pinimg.com/736x/22/19/65/221965636195bfc70e4ba181076a978b.jpg",
    },
    {
      uri: "https://i.pinimg.com/736x/69/62/00/69620076941e42a75573545e433fb03d.jpg",
    },
    {
      uri: "https://i.pinimg.com/736x/5c/d2/cf/5cd2cf5964c778208854ccce48d81d75.jpg",
    },
    {
      uri: "https://i.pinimg.com/736x/22/19/65/221965636195bfc70e4ba181076a978b.jpg",
    },
  ];

  return (
    
    <ScrollView>
      <View style={styles.container}>
        <TopStyle />
        <View style={styles.boxCarrousel}>
          <CarouselTabs
            images={images_one}
            autoPlay={true}
            autoPlayInterval={3000}
            imageHeight={320}
          />
        </View>
        
        <View style={styles.main}>
          <ContentHistoryRacers />
        </View>

        <View style={styles.main}>
          <ContentHistory />
        </View>

        <View style={styles.boxCarrousel}>
          <CarouselTabs
            images={images_two}
            autoPlay={true}
            autoPlayInterval={3000}
            imageHeight={320}
          />
        </View>

        <View style={styles.main}>
          <ContentHistoryCars />
        </View>

        <View style={styles.main}>
          <ContentCars />
        </View>

        <View style={styles.boxCarrousel}>
          <CarouselTabs
            images={images_twere}
            autoPlay={true}
            autoPlayInterval={3000}
            imageHeight={320}
          />
        </View>

        <View style={styles.main}>
          <ContentHistoryBrand />
        </View>

        <View style={styles.main}>
          <ContentBrand />
        </View>

        <View style={styles.main}>
          <ContentSociaCredits />
        </View>
        
      </View>
    </ScrollView>
  );
};

export default History;

const styles = StyleSheet.create({
  // Ajustes no caixa pricipal do aplicativo

  container: {
    flex: 1,
    backgroundColor: "#000000",
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
    backgroundColor: "#080808",
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

  boxCarrousel: {
    marginBlock: 24,
    padding: 4,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#060606",
    position: "relative",
    height: 390,
    width: "95%",
  },

});
