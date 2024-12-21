import { ScrollView, FlatList, Image,TouchableOpacity,StyleSheet, Text, View } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { Linking } from 'react-native';

const DATA = [
  { id: '1', title: 'Facebook', link: 'https://www.facebook.com', icon: 'logo-facebook' },
  { id: '2', title: 'Twitter', link: 'https://www.twitter.com', icon: 'logo-twitter' },
  { id: '3', title: 'Instagram', link: 'https://www.instagram.com', icon: 'logo-instagram' },
  { id: '4', title: 'Youtube', link: 'https://www.youtube.com', icon: 'logo-youtube' },
  { id: '5', title: 'LinkedIn', link: 'https://www.linkedin.com', icon: 'logo-linkedin' },
  { id: '6', title: 'Pinterest', link: 'https://www.pinterest.com', icon: 'logo-pinterest' },
]

const Profile = () => {

  const handlePress = async (link: string) => {
    const canOpen = await Linking.canOpenURL(link);
    if (canOpen) {
      Linking.openURL(link).catch((err) => console.error("Erro ao abrir o link:", err));
    } else {
      console.error("URL inválida ou não suportada:", link);
    }
  };
  return (
  <ScrollView>
     <View style={styles.container}>
          <View style={styles.main}>
              <Text style={styles.title}>Profile</Text>
              <Text style={styles.subtitle}>Profiles in the Instragram of the culture Automotive</Text>
              <Text style={styles.paragraph}>JDM (Japanese Domestic Market) automotive culture has a vibrant community of enthusiasts who share their passion for Japanese vehicles through various platforms, especially Instagram. Here are some notable profiles that celebrate this culture:</Text>
          </View>
          <View style={styles.profiles}>
            <Text style={styles.subtitleProfiles}>@jdm - Profile</Text>
              <View style={styles.ImageView}>
                  <Image source={{ uri: 'https://i.pinimg.com/736x/dd/65/ef/dd65ef8c7c15ce67277828eb3fbd7445.jpg' }} style={styles.image} />
              </View>
            <Text style={styles.paragraphProfiles}>Official profile dedicated to the purchase and sale of Japanese cars and trucks. With over 1.2 million followers, it features a variety of JDM outlets and community updates.</Text>
            <View>
                <TouchableOpacity style={styles.list} onPress={() => Linking.openURL('https://www.instagram.com/jdm/')}>
                    <Ionicons name="logo-instagram" size={24} color="#ff2626" />
                    <Text style={styles.link}>Visit Instagram</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.paragraphProfiles}>Check out this recent photo of a Japanese car that has been featured on JDM's Instagram page</Text>
          </View>         
          <View style={styles.profiles}>
            <Text style={styles.subtitleProfiles}>@jdm.domain  - Profile</Text>
              <View style={styles.ImageView}>
                  <Image source={{ uri: 'https://i.pinimg.com/736x/33/79/bd/3379bda98e51a1e9d9fa742b07c60ad9.jpg' }} style={styles.image} />
              </View>
            <Text style={styles.paragraphProfiles}>Focused on daily content about Japanese cars, this profile shares images and videos of JDM vehicles, attracting an audience of more than 363 thousand followers.</Text>
            <View>
                <TouchableOpacity style={styles.list} onPress={() => Linking.openURL('https://www.instagram.com/jdm/')}>
                    <Ionicons name="logo-instagram" size={24} color="#ff2626" />
                    <Text style={styles.link}>Visit Instagram</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.paragraphProfiles}>Check out this recent photo of a Japanese car that has been featured on JDM's Instagram page</Text>
          </View>    
          <View style={styles.profiles}>
            <Text style={styles.subtitleProfiles}>@robys114  - Profile</Text>
              <View style={styles.ImageView}>
                  <Image source={{ uri: 'https://i.pinimg.com/736x/6e/fc/fb/6efcfbdabb3d64f247ad47f28546ff0b.jpg' }} style={styles.image} />
              </View>
            <Text style={styles.paragraphProfiles}> Robson Okamura is a specialist in JZ, RB engines and drift cars. Known as the "King of JDM in Brazil", he shares his expertise and projects related to Japanese automotive culture</Text>
            <View>
                <TouchableOpacity style={styles.list} onPress={() => Linking.openURL('https://www.instagram.com/jdm/')}>
                    <Ionicons name="logo-instagram" size={24} color="#ff2626" />
                    <Text style={styles.link}>Visit Instagram</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.paragraphProfiles}>Check out this recent photo of a Japanese car that has been featured on JDM's Instagram page</Text>
          </View>    
          <View style={styles.profiles}>
            <Text style={styles.subtitleProfiles}>@ryoukaimeet  - Profile</Text>
              <View style={styles.ImageView}>
                  <Image source={{ uri: 'https://i.pinimg.com/736x/d8/37/3e/d8373ebe2e7bce380e04e70810e75bac.jpg' }} style={styles.image} />
              </View>
            <Text style={styles.paragraphProfiles}>Profile dedicated to organizing drift events, hotlap and exhibitions, celebrating JDM culture and providing space for enthusiasts to display their modified vehicles</Text>
            <View>
                <TouchableOpacity style={styles.list} onPress={() => Linking.openURL('https://www.instagram.com/jdm/')}>
                    <Ionicons name="logo-instagram" size={24} color="#ff2626" />
                    <Text style={styles.link}>Visit Instagram</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.paragraphProfiles}>Check out this recent photo of a Japanese car that has been featured on JDM's Instagram page</Text>
          </View>    
          <View style={styles.profiles}>
            <Text style={styles.subtitleProfiles}>@pedroo.gearheadslz  - Profile</Text>
              <View style={styles.ImageView}>
                  <Image source={{ uri: 'https://i.pinimg.com/736x/60/fd/07/60fd07f6c3b1f63988d97023a23a48cd.jpg' }} style={styles.image} />
              </View>
            <Text style={styles.paragraphProfiles}> Pedro is a drift and sports car enthusiast, sharing videos and photos of customized cars and automotive events, contributing to the dissemination of JDM culture in Brazil</Text>
            <View>
                <TouchableOpacity style={styles.list} onPress={() => Linking.openURL('https://www.instagram.com/jdm/')}>
                    <Ionicons name="logo-instagram" size={24} color="#ff2626" />
                    <Text style={styles.link}>Visit Instagram</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.paragraphProfiles}>Check out this recent photo of a Japanese car that has been featured on JDM's Instagram page</Text>
          </View>    
          <View style={styles.boxContent}>
              <Text style={styles.title}>Follow our Instagram influencers</Text>
              <Text style={styles.subtitle}>More content in next Links, Clik for Get redirected</Text>
              <Text style={styles.paragraph}>These profiles offer a comprehensive view of the JDM community, from technical experts to event organizers and content creators, reflecting the diversity and passion that permeates this automotive culture</Text>
            <FlatList
              data={DATA}
              horizontal
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.item}>
                <Ionicons name={item.icon} size={30} color="#000" style={styles.icon} />
                <TouchableOpacity onPress={() => handlePress(item.link)}>
                    <Text style={styles.text}>{item.title}</Text>
                </TouchableOpacity>   
                </View>   
                  )}             
            />      
          </View>                                 
    </View>
  </ScrollView>
  )
}

export default Profile;

const styles = StyleSheet.create({

  //Ajustes na Caixa principal do aplicativo

  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 20,
  },
  main: {
    marginTop: 30,
    marginBottom: 30,
    
  },

  //Ajustes nos Titulos, paragrafos e textos
  title: {
    color: '#ff2626',
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: '#ffffff',
    fontSize: 24,
    marginBottom: 20,
  },
  paragraph: {
    color: '#ffffff',
    marginBottom: 25,
    fontSize:18,
  },

  //Ajustes nas caixas de perfis
  profiles: {
    backgroundColor: '#070707',
    width: '100%',
    padding: 20,
    marginBottom: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
  },

  subtitleProfiles: {
    color: '#ff2626',
    fontSize: 24,
    marginBlock: 24,
    marginLeft: 12,
    fontWeight: "bold",
  },
  paragraphProfiles: {
    color: '#ffffff',
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
    flexDirection: 'row',
    justifyContent: "center",
  },
  
  link: {
    color: '#ff2626',
    fontSize: 16,
    marginLeft: 12,
    fontWeight: "bold",
    flexDirection: 'row',
  },

  //Ajustes na Caixa de Imagens
  ImageView: {
    backgroundColor: '#070707',
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#070707',
    flexDirection: 'row',
    justifyContent:"center",
    width: '100%',
    
  },
  image: {
    width: 416,
    height: 262,
  },
 
  //Ajustes na Caixa de Conteudo e Links para Influenciadores

  boxContent: {
    backgroundColor: '#000000',
    padding: 2,
    height: 625,
    width: '100%',
    marginBottom: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
  },

  text: {
    color: '#ffffff',
    fontSize: 18,
    marginLeft: 12,
    fontWeight: "bold",
  },


  item: {
    marginInline: 8,
    marginBlock: 32,
    width: 120,
    height: 100,
    backgroundColor: '#070707',
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      height: 2,
      width: 2
    },
    marginBottom: 10,
  },

  //Ajustes nos icones 

  icon: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: "bold",
    shadowColor: '#000',
  }, 


})