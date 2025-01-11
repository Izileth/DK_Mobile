import {Text, ScrollView, SafeAreaView, Image, StyleSheet, View, TouchableOpacity, Animated, Pressable, FlatList} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Linking } from "react-native";

const ProfileInstagram = () => {
    return(
        <SafeAreaView>
            <ScrollView>
                <View style={styles.box}>                  
                    // Caixa de Conteúdos e Petfis para o Instagram 
                    // Primeio Perfil
                    <View style={styles.profiles}>
                    <Text style={styles.titleProfiles}>Instagram</Text>
                    <Text style={styles.subtitleProfiles}>@JDM</Text>

                    <View style={styles.ImageView}>
                        <Image
                        source={{
                            uri: "https://i.pinimg.com/736x/26/69/11/266911452ad5b101093b1e22cb24eb95.jpg",
                        }}
                        style={styles.image}
                        />
                    </View>
                    <Text style={styles.paragraphProfiles}>
                        Official profile dedicated to the purchase and sale of Japanese cars
                        and trucks. With over 1.2 million followers, it features a variety
                        of JDM outlets and community updates.
                    </Text>
                    <View>
                        <TouchableOpacity
                        style={styles.list}
                        onPress={() => Linking.openURL("https://www.instagram.com/jdm/")}
                        >
                        <Ionicons name="logo-instagram" size={24} color="#ff2626" />
                        <Text style={styles.link}>Visit Instagram</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.paragraphProfiles}>
                        Check out this recent photo of a Japanese car that has been featured
                        on JDM's Instagram page
                    </Text>
                    </View>
                    // Segundo Perfil
                    <View style={styles.profiles}>
                    <Text style={styles.titleProfiles}>Instagram</Text>
                    <Text style={styles.subtitleProfiles}>@JDM DOMAIN</Text>
                    <View style={styles.ImageView}>
                        <Image
                        source={{
                            uri: "https://i.pinimg.com/736x/97/95/e5/9795e504b9df4555313f060528f37660.jpg",
                        }}
                        style={styles.image}
                        />
                    </View>
                    <Text style={styles.paragraphProfiles}>
                        Focused on daily content about Japanese cars, this profile shares
                        images and videos of JDM vehicles, attracting an audience of more
                        than 363 thousand followers.
                    </Text>
                    <View>
                        <TouchableOpacity
                        style={styles.list}
                        onPress={() =>
                            Linking.openURL("https://www.instagram.com/jdm.domain/")
                        }
                        >
                        <Ionicons name="logo-instagram" size={24} color="#ff2626" />
                        <Text style={styles.link}>Visit Instagram</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.paragraphProfiles}>
                        Check out this recent photo of a Japanese car that has been featured
                        on JDM's Instagram page
                    </Text>
                    </View>
                    // Terceiro Perfil
                    <View style={styles.profiles}>
                    <Text style={styles.titleProfiles}>Instagram</Text>
                    <Text style={styles.subtitleProfiles}>@ROBYS144</Text>
                    <View style={styles.ImageView}>
                        <Image
                        source={{
                            uri: "https://i.pinimg.com/736x/f3/2d/cc/f32dccd791de682e9fb3cf2c08d0e4f7.jpg",
                        }}
                        style={styles.image}
                        />
                    </View>
                    <Text style={styles.paragraphProfiles}>
                        {" "}
                        Robson Okamura is a specialist in JZ, RB engines and drift cars.
                        Known as the "King of JDM in Brazil", he shares his expertise and
                        projects related to Japanese automotive culture
                    </Text>

                    <View>
                        <TouchableOpacity
                        style={styles.list}
                        onPress={() =>
                            Linking.openURL("https://www.instagram.com/robys114/")
                        }
                        >
                        <Ionicons name="logo-instagram" size={24} color="#ff2626" />
                        <Text style={styles.link}>Visit Instagram</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.paragraphProfiles}>
                        Check out this recent photo of a Japanese car that has been featured
                        on JDM's Instagram page
                    </Text>
                    </View>
                    // Quarto Perfil
                    <View style={styles.profiles}>
                    <Text style={styles.titleProfiles}>Instagram</Text>
                    <Text style={styles.subtitleProfiles}>@RYOUKAIMEET</Text>
                    <View style={styles.ImageView}>
                        <Image
                        source={{
                            uri: "https://i.pinimg.com/736x/c0/f5/e5/c0f5e5506044242ee9a876143fda7c4d.jpg",
                        }}
                        style={styles.image}
                        />
                    </View>

                    <Text style={styles.paragraphProfiles}>
                        Profile dedicated to organizing drift events, hotlap and
                        exhibitions, celebrating JDM culture and providing space for
                        enthusiasts to display their modified vehicles
                    </Text>

                    <View>
                        <TouchableOpacity
                        style={styles.list}
                        onPress={() =>
                            Linking.openURL("https://www.instagram.com/ryoukaimeet/")
                        }
                        >
                        <Ionicons name="logo-instagram" size={24} color="#ff2626" />
                        <Text style={styles.link}>Visit Instagram</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.paragraphProfiles}>
                        Check out this recent photo of a Japanese car that has been featured
                        on JDM's Instagram page
                    </Text>
                    </View>
                    // Quinto Perfil
                    <View style={styles.profiles}>
                    <Text style={styles.titleProfiles}>Instagram</Text>
                    <Text style={styles.subtitleProfiles}>@PEDRO GEARHEADSLZ</Text>
                    <View style={styles.ImageView}>
                        <Image
                        source={{
                            uri: "https://i.pinimg.com/736x/c5/6b/f5/c56bf56be82a71ef1d0dadc2a9ef0ee7.jpg",
                        }}
                        style={styles.image}
                        />
                    </View>
                    <Text style={styles.paragraphProfiles}>
                        {" "}
                        Pedro is a drift and sports car enthusiast, sharing videos and
                        photos of customized cars and automotive events, contributing to the
                        dissemination of JDM culture in Brazil
                    </Text>

                    <View>
                        <TouchableOpacity
                        style={styles.list}
                        onPress={() =>
                            Linking.openURL("https://www.instagram.com/pedroo.gearheadslz")
                        }
                        >
                        <Ionicons name="logo-instagram" size={24} color="#ff2626" />
                        <Text style={styles.link}>Visit Instagram</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.paragraphProfiles}>
                        Check out this recent photo of a Japanese car that has been featured
                        on JDM's Instagram page
                    </Text>
                    </View>
                    <View style={styles.profiles}>
                    <Text style={styles.titleProfiles}>Instagram</Text>
                    <Text style={styles.subtitleProfiles}>@SPEEDARTMEDIA</Text>
                    <View style={styles.ImageView}>
                        <Image
                        source={{
                            uri: "https://i.pinimg.com/736x/ab/04/fb/ab04fb9ebbb3c950a3411d0fe04f8b2c.jpg",
                        }}
                        style={styles.image}
                        />
                    </View>
                    <Text style={styles.paragraphProfiles}>
                        Nicolás Orellana is an automotive content creator, producing videos
                        and photos of cars, as well as drawings and paintings on demand,
                        highlighting JDM vehicles and automotive culture in general
                    </Text>

                    <View>
                        <TouchableOpacity
                        style={styles.list}
                        onPress={() =>
                            Linking.openURL("https://www.instagram.com/speedartmedia/")
                        }
                        >
                        <Ionicons name="logo-instagram" size={24} color="#ff2626" />
                        <Text style={styles.link}>Visit Instagram</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.paragraphProfiles}>
                        Check out this recent photo of a Japanese car that has been featured
                        on JDM's Instagram page
                    </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

   box: {
    backgroundColor: "transparent",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    height: 'auto',
   } ,

  //Ajustes nas caixas de perfis
  profiles: {
    backgroundColor: "#040404",
    width: "100%",
    padding: 20,
    marginBottom: 30,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
  },
  titleProfiles: {
    color: "#ff2626",
    fontSize: 34,
    marginLeft: 12,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitleProfiles: {
    color: "#ff2626",
    fontSize: 22,
    marginBottom: 24,
    marginTop: 6,
    marginLeft: 12,
    fontWeight: "300",
    textAlign: "center",
  },
  paragraphProfiles: {
    color: "#ffffff",
    marginBottom: 16,
    fontSize: 18,
    marginTop: 2,
    fontWeight: "100",
    marginLeft: 16,
  },

  // Ajustes na Lista de Links

  list: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 12,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
  },

  row: {
    justifyContent: "space-between", // Espaçamento uniforme entre colunas
  },

  link: {
    color: "#ff2626",
    fontSize: 16,
    marginLeft: 12,
    fontWeight: "bold",
    flexDirection: "row",
  },

  //Ajustes na Caixa de Imagens
  ImageView: {
    backgroundColor: "#070707",
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#070707",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  image: {
    width: 446,
    height: 262,
  },

});

export default ProfileInstagram;