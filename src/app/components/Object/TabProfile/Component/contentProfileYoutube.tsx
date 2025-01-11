import {
  View,
  SafeAreaView,
  ScrollResponderEvent,
  ScrollView,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import VideoPlayer from "../../../Video/VideoPlayer";

const ProfileYoutube = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.box}>
          // Caixa de Conteúdos e Links para as Redes Sociais // Repositório de
          Videos e Reprodutor de Takes
          <View style={styles.boxLive}>
            <Text style={styles.titleLive}>Live Events Epic</Text>
            <Text style={styles.subtitleLive}>
              Check out our upcoming events and contests
            </Text>
            // Primeiro Video
            <View style={styles.video}>
              <Text style={styles.titleVideo}>
                Skyline R-34 GTR{" "}
                <Text style={styles.titleVideoColors}>4K FULL-HD</Text>
              </Text>
              <Text style={styles.subtitleVideo}>
                Hosted by{" "}
                <Text style={styles.subtitleVideoColors}>Hartnet Midia</Text>
              </Text>
              <VideoPlayer
                url="https://www.youtube.com/watch?v=5-0BwZ1r6H4"
                height={250}
              />
            </View>
            // ID do vídeo do YouTube '5-0BwZ1r6H4' // Segundo Video
            <View style={styles.video}>
              <Text style={styles.titleVideo}>
                Mardza RX-7{" "}
                <Text style={styles.titleVideoColors}>4K FULL-HD</Text>
              </Text>
              <Text style={styles.subtitleVideo}>
                Hosted by{" "}
                <Text style={styles.subtitleVideoColors}>Go Hader</Text>
              </Text>
              <VideoPlayer
                url="https://www.youtube.com/watch?v=itEOkjc4gKc"
                height={250}
              />
            </View>
            // ID do vídeo do YouTube 'itEOkjc4gKc // Terceiro Video
            <View style={styles.video}>
              <Text style={styles.titleVideo}>
                Mitisubichi Evo VII{" "}
                <Text style={styles.titleVideoColors}>4K FULL-HD</Text>
              </Text>
              <Text style={styles.subtitleVideo}>
                Hosted by <Text style={styles.subtitleVideoColors}>Skeler</Text>
              </Text>
              <VideoPlayer
                url="https://www.youtube.com/watch?v=jXs3bURC-oY"
                height={250}
              />
            </View>
            // ID do vídeo do YouTube 'jXs3bURC-oY' // Quarto Video
            <View style={styles.video}>
              <Text style={styles.titleVideo}>
                Nissan Silvia S-15{" "}
                <Text style={styles.titleVideoColors}>4K FULL-HD</Text>
              </Text>
              <Text style={styles.subtitleVideo}>
                Hosted by{" "}
                <Text style={styles.subtitleVideoColors}>Go Harder</Text>
              </Text>
              <VideoPlayer
                url="https://www.youtube.com/watch?v=Iy5OMrgD8JQ"
                height={250}
              />
            </View>
            // ID do vídeo do YouTube 'Iy5OMrgD8JQ' // Quinto Video
            <View style={styles.video}>
              <Text style={styles.titleVideo}>
                Lexus IS2000{" "}
                <Text style={styles.titleVideoColors}>4K FULL-HD</Text>
              </Text>
              <Text style={styles.subtitleVideo}>
                Hosted by{" "}
                <Text style={styles.subtitleVideoColors}>Dark Midia</Text>
              </Text>
              <VideoPlayer
                url="https://www.youtube.com/watch?v=VGvc87lbEsE'"
                height={250}
              />
            </View>
            // ID do vídeo do YouTube 'VGvc87lbEsE'' //Sexto Video
            <View style={styles.video}>
              <Text style={styles.titleVideo}>
                Toyota Supra MK-4{" "}
                <Text style={styles.titleVideoColors}>4K FULL-HD</Text>
              </Text>
              <Text style={styles.subtitleVideo}>
                Hosted by{" "}
                <Text style={styles.subtitleVideoColors}>Hartnet</Text>
              </Text>
              <VideoPlayer
                url="https://www.youtube.com/watch?v=tKqq6SAb_1M"
                height={250}
              />
            </View>
            // ID do vídeo do YouTube 'tKqq6SAb_1M'' // Sétimo Video
            <View style={styles.video}>
              <Text style={styles.titleVideo}>
                Honda NSX{" "}
                <Text style={styles.titleVideoColors}>4K FULL-HD</Text>{" "}
              </Text>
              <Text style={styles.subtitleVideo}>
                Hosted by{" "}
                <Text style={styles.subtitleVideoColors}>Tomoki´s</Text>
              </Text>
              <VideoPlayer
                url="https://www.youtube.com/watch?v=jXs3bURC-oY"
                height={250}
              />
            </View>
            // ID do vídeo do YouTube 'W6v9lHA6Bcw' // Oitavo Video
            <View style={styles.video}>
              <Text style={styles.titleVideo}>
                Nissan 240SX{" "}
                <Text style={styles.titleVideoColors}>4K FULL-HD</Text>
              </Text>
              <Text style={styles.subtitleVideo}>
                Hosted by{" "}
                <Text style={styles.subtitleVideoColors}>NeoQual</Text>
              </Text>
              <VideoPlayer
                url="https://www.youtube.com/watch?v=W6v9lHA6Bcw"
                height={250}
              />
            </View>
            // ID do vídeo do YouTube ''W6v9lHA6Bcw' // Nono Video
            <View style={styles.video}>
              <Text style={styles.titleVideo}>
                Subaru BRZ{" "}
                <Text style={styles.titleVideoColors}>4K FULL-HD</Text>
              </Text>
              <Text style={styles.subtitleVideo}>
                Hosted by{" "}
                <Text style={styles.subtitleVideoColors}>Hartnet Midia</Text>
              </Text>
              <VideoPlayer
                url="https://www.youtube.com/watch?v=NDI6VaBqEqc"
                height={250}
              />
            </View>
            // ID do vídeo do YouTube 'NDI6VaBqEqc' // Décimo Video
            <View style={styles.video}>
              <Text style={styles.titleVideo}>
                Nissan R-32{" "}
                <Text style={styles.titleVideoColors}>4K FULL-HD</Text>
              </Text>
              <Text style={styles.subtitleVideo}>
                Hosted by{" "}
                <Text style={styles.subtitleVideoColors}>Go Harder</Text>
              </Text>
              <VideoPlayer
                url="https://www.youtube.com/watch?v=9Cn_QbxcB_I"
                height={250}
              />
            </View>
            // ID do vídeo do YouTube '9Cn_QbxcB_I''
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "transparent",
    width: "100%",
    height: "auto",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  //Ajustes na Caixa de Live Events

  boxLive: {
    backgroundColor: "#000000",
    padding: 2,
    height: "auto",
    width: "100%",
    marginBottom: 30,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
  },

  titleLive: {
    color: "#ff2626",
    fontSize: 42,
    fontWeight: "bold",
    marginBlockStart: 24,
    textAlign: "center",
  },
  subtitleLive: {
    color: "#ffffff",
    fontSize: 24,
    marginBlock: 14,
    textAlign: "center",
  },

  //Ajustes na Caixa dos Videos
  titleVideo: {
    color: "#ff2626",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  titleVideoColors: {
    color: "#f2f2f2",
    fontSize: 28,
    textAlign: "center",
  },
  subtitleVideo: {
    color: "#ffffff",
    fontSize: 22,
    marginBottom: 10,
    textAlign: "center",
  },
  subtitleVideoColors: {
    color: "#ff2626",
    fontSize: 22,
    marginLeft: 10,
    textAlign: "center",
  },
  video: {
    width: "100%",
    height: "auto",
    backgroundColor: "#000",
    borderRadius: 10,
    marginBlock: 18,
    resizeMode: "cover",
    overflow: "hidden",
  },
});

export default ProfileYoutube;
