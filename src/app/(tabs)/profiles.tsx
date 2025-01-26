import {
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//Import Content

import ProfileInstagram from "../components/Object/TabProfile/Component/contentProfileInstagram";
import ProfileSpotfy from "../components/Object/TabProfile/Component/contentProfileSpotfy";
import ProfileYoutube from "../components/Object/TabProfile/Component/contentProfileYoutube";

//Import Components
import TopStyle from "../components/Object/AllApp/Header";
import CarouselShorts from "../components/Dinamics/CarrouselShorts";

import StoryIstagram from "../components/Object/TabProfile/Component/contentStoryIntsagram";
import StorySpotify from "../components/Object/TabProfile/Component/contentStorySpotfy";
import StoryYouTube from "../components/Object/TabProfile/Component/contentStoryYoutube";

import StoryCredits from "../components/Object/TabHistory/Component/contentStoryCredits";
// Data
import {
  carouselDataImagesProfile,
} from "../components/Data";

//Import Styles
import { useTheme } from "../../context/themeContext";

const Profile = () => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.dark.primary,
      paddingBottom: 24,
      alignItems: "center",
      justifyContent: "center",
    },

    main: {
      width: "100%",
      borderRadius: 12,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
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
    <SafeAreaView>
      <ScrollView style={{ backgroundColor: "#000", width: "100%" }}>
        <View style={styles.container}>
          <TopStyle />
          <View style={styles.mainCarrousel}>
            <CarouselShorts
              images={carouselDataImagesProfile.setOne}
              autoPlay={true}
              autoPlayInterval={3000}
              imageHeight={350}
            />
          </View>

          <View style={styles.main}>
            <StoryIstagram />
          </View>

          <View style={styles.main}>
            <ProfileInstagram />
          </View>

          <View style={styles.mainCarrousel}>
            <CarouselShorts
              images={carouselDataImagesProfile.setOne}
              autoPlay={true}
              autoPlayInterval={3000}
              imageHeight={350}
            />
          </View>

          <View style={styles.main}>
            <StoryYouTube />
          </View>

          <View style={styles.main}>
            <ProfileYoutube />
          </View>

          <View style={styles.mainCarrousel}>
            <CarouselShorts
              images={carouselDataImagesProfile.setOne}
              autoPlay={true}
              autoPlayInterval={3000}
              imageHeight={350}
            />
          </View>

          <View style={styles.main}>
            <StorySpotify />
          </View>

          <View style={styles.main}>
            <ProfileSpotfy />
          </View>
          <View style={styles.main}>
            <StoryCredits />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
