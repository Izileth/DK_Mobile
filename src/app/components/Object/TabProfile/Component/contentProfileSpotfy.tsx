import {
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  Alert,
} from "react-native";
import AudioPlayer from "../../../Music/Songs ID/AudioPlayer";

const ProfileSpotfy = () => {
  //Ajustes na confirguação de áudio

  const handleError = (error: Error) => {
    Alert.alert(
      "Erro na reprodução",
      "Não foi possível reproduzir o áudio. Tente novamente mais tarde.",
      [{ text: "OK" }]
    );
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.box}>
          // Repositório de Musicas e Reprodutor dos Sons
          <View style={styles.boxMidia}>
            <Text style={styles.title}>Sounds For Streets</Text>
            <Text style={styles.subtitle}>
              Check the new songs for sound in the midnight racers
            </Text>
            // Primeiro SoundTrack
            <View style={styles.ImageMusic}>
              <Image
                source={{
                  uri: "https://i.pinimg.com/736x/c9/02/ab/c902abfec616f5b6c1d0e9147e7f2402.jpg",
                }}
                style={styles.bannerMusic}
              />
            </View>
            <ScrollView horizontal>
              <Text style={styles.titleMusic}>
                Veneno de Cobra - <Text style={styles.titleColors}>Drift</Text>{" "}
                Boys
              </Text>
            </ScrollView>
            <View style={styles.boxMusic}>
              <AudioPlayer
                audioUrl="https://drive.google.com/uc?export=download&id=1tl12Czw5phucUyAOqBStGkKlnUl0eskG"
                onError={handleError}
              />
            </View>
            // Segundo SoundTrack
            <View style={styles.ImageMusic}>
              <Image
                source={{
                  uri: "https://i.pinimg.com/736x/c8/c5/28/c8c528f736da7cc53bb502b188b1c76b.jpg",
                }}
                style={styles.bannerMusic}
              />
            </View>
            <ScrollView horizontal>
              <Text style={styles.titleMusic}>
                Gakkou - <Text style={styles.titleColors}>Drift</Text> Boys
              </Text>
            </ScrollView>
            <View style={styles.boxMusic}>
              <AudioPlayer
                audioUrl="https://drive.google.com/uc?export=download&id=1SbU9wkTwSKosHOovG7rIeVOZ64IZPT-g"
                onError={handleError}
              />
            </View>
            // Terceiro SoundTrack
            <View style={styles.ImageMusic}>
              <Image
                source={{
                  uri: "https://i.pinimg.com/736x/ae/c8/7c/aec87c345aee076be2f367689bd97c69.jpg",
                }}
                style={styles.bannerMusic}
              />
            </View>
            <ScrollView horizontal>
              <Text style={styles.titleMusic}>
                Noite em Osaka - <Text style={styles.titleColors}>Drift</Text>{" "}
                Boys
              </Text>
            </ScrollView>
            <View style={styles.boxMusic}>
              <AudioPlayer
                audioUrl="https://drive.google.com/uc?export=download&id=1mGqfMoSn8LXkH6k9sgRuJkvBOeA0RhB0"
                onError={handleError}
              />
            </View>
            // Quarto SoundTrack
            <View style={styles.ImageMusic}>
              <Image
                source={{
                  uri: "https://i.pinimg.com/736x/a7/6f/8f/a76f8f726687b216c91bf9e993b46193.jpg",
                }}
                style={styles.bannerMusic}
              />
            </View>
            <ScrollView horizontal>
              <Text style={styles.titleMusic}>
                Power Slide - <Text style={styles.titleColors}>Drift</Text>{" "}
                Boys
              </Text>
            </ScrollView>
            <View style={styles.boxMusic}>
              <AudioPlayer
                audioUrl="https://drive.google.com/uc?export=download&id=19uPum6kGvL-d_7qgBSI6mJecJatldeA6"
                onError={handleError}
              />
            </View>
            // Quinto SoundTrack
            <View style={styles.ImageMusic}>
              <Image
                source={{
                  uri: "https://i.pinimg.com/736x/fb/ba/bd/fbbabd7ef368d937b11bfd4d40c31fe2.jpg",
                }}
                style={styles.bannerMusic}
              />
            </View>
            <ScrollView horizontal>
              <Text style={styles.titleMusic}>
                Canadá - <Text style={styles.titleColors}>Drift</Text>{" "}
                Boys
              </Text>
            </ScrollView>
            <View style={styles.boxMusic}>
              <AudioPlayer
                audioUrl="https://drive.google.com/uc?export=download&id=1omfxbjnA_rEgtRDd4U6Re9zJxEhXN2j-"
                onError={handleError}
              />
            </View>
            // Sexto SoundTrack
            <View style={styles.ImageMusic}>
              <Image
                source={{
                  uri: "https://i.pinimg.com/736x/1d/bc/3e/1dbc3e29a0aab80e125e76f0906f34c8.jpg",
                }}
                style={styles.bannerMusic}
              />
            </View>
            <ScrollView horizontal>
              <Text style={styles.titleMusic}>
                Õkami - <Text style={styles.titleColors}>Drift</Text>{" "}
                Boys
              </Text>
            </ScrollView>
            <View style={styles.boxMusic}>
              <AudioPlayer
                audioUrl="https://drive.google.com/uc?export=download&id=1rZ2TuhzTWHukVkxynY5-1THXQUe4qIJK"
                onError={handleError}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "transparent",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "auto",
    width: "100%",
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

  //Ajustes na caixa de reprodução audiovisual
  boxMidia: {
    backgroundColor: "#000000",
    padding: 2,
    height: "auto",
    width: "100%",
    marginBottom: 30,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    justifyContent: "center",
    alignItems: "center",
  },
  boxMusic: {
    backgroundColor: "#000000",
    padding: 2,
    height: 60,
    width: "100%",
    marginBottom: 30,
    borderRadius: 100,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  boxBar: {
    backgroundColor: "#000000",
    padding: 2,
    height: 20,
    width: "100%",
    marginBottom: 10,
    borderRadius: 100,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  ImageMusic: {
    backgroundColor: "#020202",
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#010101",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  bannerMusic: {
    width: 220,
    height: 250,
    resizeMode: "contain",
  },

  titleMusic: {
    color: "#f2f2f2",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  textMusic: {
    color: "#f2f2f2",
    fontSize: 22,
    fontWeight: "200",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "transparent",
    padding: 2,
    borderRadius: 24,
    height: 42,
    width: 154,
    marginTop: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    borderColor: "#ff2626",
    borderWidth: 1,
    marginInline: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonPlay: {
    color: "#ff2626",
    fontSize: 24,
    fontWeight: "bold",
    borderWidth: 1,
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderColor: "#ff2626",
  },
});

export default ProfileSpotfy;
