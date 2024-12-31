import { Alert,ScrollView, FlatList, Image,TouchableOpacity,StyleSheet, Text, View, Button} from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import {  useRef, useState} from "react";
import { Linking } from 'react-native';
import VideoPlayer from '../components/Video/VideoPlayer';
import YoutubePlayer from 'react-native-youtube-iframe';
import AudioPlayer from '../components/Music/Songs ID/AudioPlayer'


// Definição de constante a adição de identificadores para cada Link de redes sociais
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
  
  //Ajustes na confirguação de áudio
  
  const handleError = (error: Error) => {
    Alert.alert(
      'Erro na reprodução',
      'Não foi possível reproduzir o áudio. Tente novamente mais tarde.',
      [{ text: 'OK' }]
    );
  };
  
  return (

    <ScrollView>

      <View style={styles.container}>

            // Caixa de Instruções sobre a seção
            <View style={styles.main}>
                <Text style={styles.title}>Profile</Text>
                <Text style={styles.subtitle}>Profiles in the Instragram of the culture Automotive</Text>
                <Text style={styles.paragraph}>JDM (Japanese Domestic Market) automotive culture has a vibrant community of enthusiasts who share their passion for Japanese vehicles through various platforms, especially Instagram. Here are some notable profiles that celebrate this culture:</Text>
            </View>



            // Caixa de Conteúdos e Petfis para o Instagram
 
            // Primeio Perfil 
            <View style={styles.profiles}>

              <Text style={styles.titleProfiles}>Instagram</Text>
              <Text style={styles.subtitleProfiles}>JDM</Text>

                <View style={styles.ImageView}>
                    <Image source={{ uri: 'https://i.pinimg.com/736x/26/69/11/266911452ad5b101093b1e22cb24eb95.jpg' }} style={styles.image} />
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

            // Segundo Perfil
            <View style={styles.profiles}>

            <Text style={styles.titleProfiles}>Instagram</Text>
              <Text style={styles.subtitleProfiles}>JDM DOMAIN</Text>
                <View style={styles.ImageView}>
                    <Image source={{ uri: 'https://i.pinimg.com/736x/97/95/e5/9795e504b9df4555313f060528f37660.jpg' }} style={styles.image} />
                </View>
              <Text style={styles.paragraphProfiles}>Focused on daily content about Japanese cars, this profile shares images and videos of JDM vehicles, attracting an audience of more than 363 thousand followers.</Text>
              <View>
                  <TouchableOpacity style={styles.list} onPress={() => Linking.openURL('https://www.instagram.com/jdm.domain/')}>
                      <Ionicons name="logo-instagram" size={24} color="#ff2626" />
                      <Text style={styles.link}>Visit Instagram</Text>
                  </TouchableOpacity>
              </View>

              <Text style={styles.paragraphProfiles}>Check out this recent photo of a Japanese car that has been featured on JDM's Instagram page</Text>
            </View>    

            // Terceiro Perfil
            <View style={styles.profiles}>

            <Text style={styles.titleProfiles}>Instagram</Text>
              <Text style={styles.subtitleProfiles}>ROBYS144</Text>
                <View style={styles.ImageView}>
                    <Image source={{ uri: 'https://i.pinimg.com/736x/f3/2d/cc/f32dccd791de682e9fb3cf2c08d0e4f7.jpg' }} style={styles.image} />
                </View>
              <Text style={styles.paragraphProfiles}> Robson Okamura is a specialist in JZ, RB engines and drift cars. Known as the "King of JDM in Brazil", he shares his expertise and projects related to Japanese automotive culture</Text>
             
              <View>
                  <TouchableOpacity style={styles.list} onPress={() => Linking.openURL('https://www.instagram.com/robys114/')}>
                      <Ionicons name="logo-instagram" size={24} color="#ff2626" />
                      <Text style={styles.link}>Visit Instagram</Text>
                  </TouchableOpacity>
              </View>

              <Text style={styles.paragraphProfiles}>Check out this recent photo of a Japanese car that has been featured on JDM's Instagram page</Text>
            </View>    

            // Quarto Perfil
            <View style={styles.profiles}>

            <Text style={styles.titleProfiles}>Instagram</Text>
              <Text style={styles.subtitleProfiles}>RYOUKAIMEET</Text>
                <View style={styles.ImageView}>
                    <Image source={{ uri: 'https://i.pinimg.com/736x/c0/f5/e5/c0f5e5506044242ee9a876143fda7c4d.jpg' }} style={styles.image} />
                </View>

              <Text style={styles.paragraphProfiles}>Profile dedicated to organizing drift events, hotlap and exhibitions, celebrating JDM culture and providing space for enthusiasts to display their modified vehicles</Text>
            
              <View>
                  <TouchableOpacity style={styles.list} onPress={() => Linking.openURL('https://www.instagram.com/ryoukaimeet/')}>
                      <Ionicons name="logo-instagram" size={24} color="#ff2626" />
                      <Text style={styles.link}>Visit Instagram</Text>
                  </TouchableOpacity>
              </View>

              <Text style={styles.paragraphProfiles}>Check out this recent photo of a Japanese car that has been featured on JDM's Instagram page</Text>
            </View>    

            // Quinto Perfil
            <View style={styles.profiles}>

            <Text style={styles.titleProfiles}>Instagram</Text>
              <Text style={styles.subtitleProfiles}>PEDRO GEARHEADSLZ</Text>
                <View style={styles.ImageView}>
                    <Image source={{ uri: 'https://i.pinimg.com/736x/c5/6b/f5/c56bf56be82a71ef1d0dadc2a9ef0ee7.jpg' }} style={styles.image} />
                </View>
              <Text style={styles.paragraphProfiles}> Pedro is a drift and sports car enthusiast, sharing videos and photos of customized cars and automotive events, contributing to the dissemination of JDM culture in Brazil</Text>
             
              <View>
                  <TouchableOpacity style={styles.list} onPress={() => Linking.openURL('https://www.instagram.com/pedroo.gearheadslz')}>
                      <Ionicons name="logo-instagram" size={24} color="#ff2626" />
                      <Text style={styles.link}>Visit Instagram</Text>
                  </TouchableOpacity>
              </View>

              <Text style={styles.paragraphProfiles}>Check out this recent photo of a Japanese car that has been featured on JDM's Instagram page</Text>
            </View>    

            <View style={styles.profiles}>

              <Text style={styles.titleProfiles}>Instagram</Text>
                  <Text style={styles.subtitleProfiles}>SPEEDARTMEDIA</Text>
                  <View style={styles.ImageView}>
                      <Image source={{ uri: 'https://i.pinimg.com/736x/ab/04/fb/ab04fb9ebbb3c950a3411d0fe04f8b2c.jpg' }} style={styles.image} />
                  </View>
                <Text style={styles.paragraphProfiles}>Nicolás Orellana is an automotive content creator, producing videos and photos of cars, as well as drawings and paintings on demand, highlighting JDM vehicles and automotive culture in general</Text>
               
                <View>
                    <TouchableOpacity style={styles.list} onPress={() => Linking.openURL('https://www.instagram.com/speedartmedia/')}>
                        <Ionicons name="logo-instagram" size={24} color="#ff2626" />
                        <Text style={styles.link}>Visit Instagram</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.paragraphProfiles}>Check out this recent photo of a Japanese car that has been featured on JDM's Instagram page</Text>
            </View>  

            

            // Caixa de Conteúdos e Links para as Redes Sociais

            <View style={styles.boxContent}>

                <Text style={styles.title}>Follow our Instagram influencers</Text>
                <Text style={styles.subtitle}>More content in next Links, Clik for Get redirected</Text>
                <Text style={styles.paragraph}>These profiles offer a comprehensive view of the JDM community, from technical experts to event organizers and content creators, reflecting the diversity and passion that permeates this automotive culture</Text>
               
                <FlatList
                    data={DATA}
                    keyExtractor={(item) => item.id}
                    numColumns={3} // Número de colunas
                    contentContainerStyle={styles.container} // Estilo para o container geral
                    columnWrapperStyle={styles.row} // Estilo para cada linha
                    nestedScrollEnabled
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

            // Repositório de Videos e Reprodutor de Takes

            <View style={styles.boxLive}>

                <Text style={styles.titleLive}>Live Events Epic</Text>
                <Text style={styles.subtitleLive}>Check out our upcoming events and contests</Text>

                  // Primeiro Video
                  <View style={styles.video}>
                    <Text style={styles.titleVideo}>Skyline R-34 GTR <Text style={styles.titleVideoColors}>4K FULL-HD</Text></Text>
                    <Text style={styles.subtitleVideo}>Hosted by <Text style={styles.subtitleVideoColors}>Hartnet Midia</Text></Text>
                     <VideoPlayer url="https://www.youtube.com/watch?v=5-0BwZ1r6H4" height={250} />
                  </View>

                  // ID do vídeo do YouTube '5-0BwZ1r6H4'
                  // Segundo Video
                  <View style={styles.video}>
                  <Text style={styles.titleVideo}>Mardza RX-7 <Text style={styles.titleVideoColors}>4K FULL-HD</Text></Text>
                  <Text style={styles.subtitleVideo}>Hosted by <Text style={styles.subtitleVideoColors}>Go Hader</Text></Text>
                    <VideoPlayer url="https://www.youtube.com/watch?v=itEOkjc4gKc" height={250} />
                  </View>
                  
                  // ID do vídeo do YouTube 'itEOkjc4gKc
                  // Terceiro Video
                  <View style={styles.video}>
                  <Text style={styles.titleVideo}>Mitisubichi Evo VII <Text style={styles.titleVideoColors}>4K FULL-HD</Text></Text>
                  <Text style={styles.subtitleVideo}>Hosted by <Text style={styles.subtitleVideoColors}>Skeler</Text></Text>
                    <VideoPlayer url="https://www.youtube.com/watch?v=jXs3bURC-oY" height={250} />
                  </View>
                  
                  // ID do vídeo do YouTube 'jXs3bURC-oY'
                  // Quarto Video
                  <View style={styles.video}>
                  <Text style={styles.titleVideo}>Nissan Silvia S-15 <Text style={styles.titleVideoColors}>4K FULL-HD</Text></Text>
                  <Text style={styles.subtitleVideo}>Hosted by <Text style={styles.subtitleVideoColors}>Go Harder</Text></Text>
                    <VideoPlayer url="https://www.youtube.com/watch?v=Iy5OMrgD8JQ" height={250} />
                  </View>
                  
                  // ID do vídeo do YouTube 'Iy5OMrgD8JQ'
                  // Quinto Video
                  <View style={styles.video}>
                  <Text style={styles.titleVideo}>Lexus IS2000 <Text style={styles.titleVideoColors}>4K FULL-HD</Text></Text>
                  <Text style={styles.subtitleVideo}>Hosted by <Text style={styles.subtitleVideoColors}>Dark Midia</Text></Text>
                    <VideoPlayer url="https://www.youtube.com/watch?v=VGvc87lbEsE'" height={250} />
                  </View>
                  
                  // ID do vídeo do YouTube 'VGvc87lbEsE''
                  //Sexto Video
                  <View style={styles.video}>
                  <Text style={styles.titleVideo}>Toyota Supra MK-4 <Text style={styles.titleVideoColors}>4K FULL-HD</Text></Text>
                  <Text style={styles.subtitleVideo}>Hosted by <Text style={styles.subtitleVideoColors}>Hartnet</Text></Text>
                    <VideoPlayer url="https://www.youtube.com/watch?v=tKqq6SAb_1M" height={250} />
                  </View>
                  
                  // ID do vídeo do YouTube 'tKqq6SAb_1M''
                  // Sétimo Video
                  <View style={styles.video}>
                  <Text style={styles.titleVideo}>Honda NSX <Text style={styles.titleVideoColors}>4K FULL-HD</Text>  </Text>
                  <Text style={styles.subtitleVideo}>Hosted by <Text style={styles.subtitleVideoColors}>Tomoki´s</Text></Text>
                    <VideoPlayer url="https://www.youtube.com/watch?v=jXs3bURC-oY" height={250} />
                  </View>
                  
                  // ID do vídeo do YouTube 'W6v9lHA6Bcw'
                  // Oitavo Video
                  <View style={styles.video}>
                  <Text style={styles.titleVideo}>Nissan 240SX <Text style={styles.titleVideoColors}>4K FULL-HD</Text></Text>
                  <Text style={styles.subtitleVideo}>Hosted by <Text style={styles.subtitleVideoColors}>NeoQual</Text></Text>
                    <VideoPlayer url="https://www.youtube.com/watch?v=W6v9lHA6Bcw" height={250} />
                  </View>
                  
                  // ID do vídeo do YouTube ''W6v9lHA6Bcw'
                  // Nono Video 
                  <View style={styles.video}>
                  <Text style={styles.titleVideo}>Subaru BRZ <Text style={styles.titleVideoColors}>4K FULL-HD</Text></Text>
                  <Text style={styles.subtitleVideo}>Hosted by <Text style={styles.subtitleVideoColors}>Hartnet Midia</Text></Text>
                    <VideoPlayer url="https://www.youtube.com/watch?v=NDI6VaBqEqc" height={250} />
                  </View>

                  // ID do vídeo do YouTube 'NDI6VaBqEqc'
                  // Décimo Video
                  <View style={styles.video}>
                  <Text style={styles.titleVideo}>Nissan R-32 <Text style={styles.titleVideoColors}>4K FULL-HD</Text></Text>
                  <Text style={styles.subtitleVideo}>Hosted by <Text style={styles.subtitleVideoColors}>Go Harder</Text></Text>
                     <VideoPlayer url="https://www.youtube.com/watch?v=9Cn_QbxcB_I" height={250} />
                  </View>
                  
                  // ID do vídeo do YouTube '9Cn_QbxcB_I''

            </View>        

            // Repositório de Musicas e Reprodutor dos Sons

            <View style={styles.boxMidia}>

              <Text style={styles.title}>Sounds For Streets</Text>
              <Text style={styles.subtitle}>Check the new songs for sound in the midnight racers</Text>

                // Primeiro SoundTrack

                <View style={styles.ImageMusic}>
                    <Image source={{uri: 'https://i.pinimg.com/736x/c9/02/ab/c902abfec616f5b6c1d0e9147e7f2402.jpg'}} style={styles.bannerMusic} />
                </View>
        

                <ScrollView horizontal>
                    <Text style={styles.titleMusic}>Veneno de Cobra - <Text style={styles.titleColors}>Drift</Text> Boys</Text>
                </ScrollView>

                <View style={styles.boxMusic}>
                  <AudioPlayer   audioUrl="https://drive.google.com/uc?export=download&id=1tl12Czw5phucUyAOqBStGkKlnUl0eskG" onError={handleError}/>
                </View>

                // Segundo SoundTrack
                <View style={styles.ImageMusic}>
                    <Image source={{uri: 'https://i.pinimg.com/736x/c8/c5/28/c8c528f736da7cc53bb502b188b1c76b.jpg' }}style={styles.bannerMusic} />
                </View>

                <ScrollView horizontal>
                    <Text style={styles.titleMusic}>Gakkou - <Text style={styles.titleColors}>Drift</Text> Boys</Text>
                </ScrollView>

                <View style={styles.boxMusic}>
                  <AudioPlayer   audioUrl="https://drive.google.com/uc?export=download&id=1SbU9wkTwSKosHOovG7rIeVOZ64IZPT-g" onError={handleError} />
                </View>

                // Terceiro SoundTrack
                <View style={styles.ImageMusic}>
                    <Image source={{uri: 'https://i.pinimg.com/736x/ae/c8/7c/aec87c345aee076be2f367689bd97c69.jpg'}} style={styles.bannerMusic} />
                </View>

                <ScrollView horizontal>
                    <Text style={styles.titleMusic}>Noite em Osaka - <Text style={styles.titleColors}>Drift</Text> Boys</Text>
                </ScrollView>

                <View style={styles.boxMusic}>
                <AudioPlayer   audioUrl="https://drive.google.com/uc?export=download&id=1mGqfMoSn8LXkH6k9sgRuJkvBOeA0RhB0" onError={handleError}/>
                </View>
                
                // Quarto SoundTrack
                <View style={styles.ImageMusic}>
                    <Image source={{uri: 'https://i.pinimg.com/736x/a7/6f/8f/a76f8f726687b216c91bf9e993b46193.jpg'}} style={styles.bannerMusic} />
                </View>

                <ScrollView horizontal>
                    <Text style={styles.titleMusic}>Noite em Osaka - <Text style={styles.titleColors}>Drift</Text> Boys</Text>
                </ScrollView>

                <View style={styles.boxMusic}>
                <AudioPlayer   audioUrl="https://drive.google.com/uc?export=download&id=19uPum6kGvL-d_7qgBSI6mJecJatldeA6" onError={handleError}/>
                </View>
                
                // Quinto SoundTrack
                <View style={styles.ImageMusic}>
                    <Image source={{uri: 'https://i.pinimg.com/736x/fb/ba/bd/fbbabd7ef368d937b11bfd4d40c31fe2.jpg'}} style={styles.bannerMusic} />
                </View>

                <ScrollView horizontal>
                    <Text style={styles.titleMusic}>Noite em Osaka - <Text style={styles.titleColors}>Drift</Text> Boys</Text>
                </ScrollView>

                <View style={styles.boxMusic}>
                <AudioPlayer   audioUrl="https://drive.google.com/uc?export=download&id=1omfxbjnA_rEgtRDd4U6Re9zJxEhXN2j-" onError={handleError}/>
                </View>
                
                // Sexto SoundTrack
                <View style={styles.ImageMusic}>
                    <Image source={{uri: 'https://i.pinimg.com/736x/1d/bc/3e/1dbc3e29a0aab80e125e76f0906f34c8.jpg'}} style={styles.bannerMusic} />
                </View>

                <ScrollView horizontal>
                    <Text style={styles.titleMusic}>Noite em Osaka - <Text style={styles.titleColors}>Drift</Text> Boys</Text>
                </ScrollView>

                <View style={styles.boxMusic}>
                <AudioPlayer   audioUrl="https://drive.google.com/uc?export=download&id=1rZ2TuhzTWHukVkxynY5-1THXQUe4qIJK" onError={handleError}/>
                </View>
                

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
    marginTop: 50,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
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
  titleColors: {
    color: '#ff2626',
    fontWeight: 'bold',
    fontSize: 24,
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
    backgroundColor: '#000000',
    width: '110%',
    padding: 20,
    marginBottom: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
  },
  titleProfiles: {
    color: '#ff2626',
    fontSize: 34,
    marginLeft: 12,
    fontWeight: "bold",
  },

  subtitleProfiles: {
    color: '#ff2626',
    fontSize: 22,
    marginBottom: 24,
    marginTop: 6,
    marginLeft: 12,
    fontWeight: "300",
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
    justifyContent: "center",
  },

  row: {
    justifyContent: 'space-between', // Espaçamento uniforme entre colunas
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
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent:"center",
    width: '100%',
    
  },
  image: {
    width: 446,
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

  //Ajustes na Caixa de Live Events

  boxLive: {
    backgroundColor: '#000000',
    padding: 2,
    height: 'auto',
    width: '100%',
    marginBottom: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
  },

  titleLive: {
    color: '#ff2626',
    fontSize: 42,
    fontWeight: 'bold',
    marginBlockStart: 24,
  },
  subtitleLive: {
    color: '#ffffff',
    fontSize: 24,
    marginBlock: 14,
  },
  //Ajustes na Caixa dos Videos
  titleVideo: {
    color: '#ff2626',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  titleVideoColors: {
    color: '#f2f2f2',
    fontSize: 28,
  },
  subtitleVideo: {
    color: '#ffffff',
    fontSize: 22,
    marginBottom: 10,
  },
  subtitleVideoColors: {
    color: '#ff2626',
    fontSize: 22,
    marginLeft: 10,
  },
  video: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#000',
    borderRadius: 10,
    marginBlock: 18,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      height: 2,
      width: 2
    },
    resizeMode: 'cover',
    overflow: 'hidden',
  },

  //Ajustes na caixa de reprodução audiovisual
  boxMidia: {
    backgroundColor: '#000000',
    padding: 2,
    height: 'auto',
    width: '100%',
    marginBottom: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      height: 2,
      width: 2
    },
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxMusic: {
    backgroundColor: '#000000',
    padding: 2,
    height: 60,
    width: '100%',
    marginBottom: 30,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      height: 2,
      width: 2
    },
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  boxBar: {
    backgroundColor: '#000000',
    padding: 2,
    height: 20,
    width: '100%',
    marginBottom: 10,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      height: 2,
      width: 2
    },
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  ImageMusic: {
    backgroundColor: '#020202',
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#010101',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent:"center",
    width: '100%',
    
  },
  bannerMusic: {
    width: 220,
    height: 250,
    resizeMode: 'contain',
  },

  titleMusic: {
    color: '#f2f2f2',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textMusic: {
    color: '#f2f2f2',
    fontSize: 22,
    fontWeight: '200',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'transparent',
    padding: 2,
    borderRadius: 24,
    height: 42,
    width: 154,
    marginTop: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      height: 2,
      width: 2
    },
    borderColor: '#ff2626',
    borderWidth: 1,
    marginInline: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPlay: {
    color: '#ff2626',
    fontSize: 24,
    fontWeight: 'bold',
    borderWidth: 1,
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderColor: '#ff2626',
  },

})