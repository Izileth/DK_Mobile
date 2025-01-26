import { Ionicons } from '@expo/vector-icons'
import {} from 'react'
import {Text, ScrollView, SafeAreaView, Image, StyleSheet, View} from 'react-native'

// Styles
import {useTheme} from "../../../../../context/themeContext"
const HistoryLeague = () => {

    const theme = useTheme();
    const styles = StyleSheet.create({

      box: {
          width: "100%",
          padding: 24,
          backgroundColor: theme.colors.dark.tertiary,
          borderRadius: 12,
          textAlign: "center",
          alignItems: "center",
          shadowColor: theme.colors.dark.tertiary,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 4,
          elevation: 2,
          marginBottom: 60,
      },

      title: {
          color: theme.colors.red.primary,
          fontSize: 32,
          fontWeight: "600",
      },

      subtitle: {
          color: "#ff2626",
          fontSize: 24,
          fontWeight: "500",
          marginBlock: 10,
      },

      paragraph: {
          color: "#ffffff",
          fontSize: 14,
          fontWeight: "400",
          marginBlock: 6,
          textAlign: 'justify',
          width: 390,
      },
      
      boxImage: {
        width: "100%",
        height: 200,
        marginBottom: 12,
        overflow: "hidden",
      },

      image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
      },

      boxContent: {
        width: 390,
        height: 180,
      },
      
      boxIcons: {
        width: 380,
        height: 60,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
        backgroundColor: theme.colors.dark.tertiary,
      },

      icon:{
        fontSize: 32,
        color: theme.colors.red.tertiary,
        marginInline: 4,
      },
    })

    
    return (
        <SafeAreaView>
            <ScrollView>
              
                   <View style={styles.box}>
                       <View style={styles.boxImage}>
                         <Image  source={{
                            uri: "https://images.wallpaperscraft.com/image/single/night_city_city_lights_tokyo_122633_2560x1440.jpg",
                            }} style={styles.image} />
                       </View>
                       <View style={styles.boxContent}>
                           <Text style={styles.title}>Japanese Mainland</Text>
                           <Text style={styles.paragraph}>Tokyo stands out with its neon-lit streets, labyrinthine highways, and disciplined yet daring racers. The city's meticulous infrastructure and advanced car culture make it a hub for precision-tuned vehicles and late-night battles on winding expressways like the Wangan and mountain passes.</Text>
                       </View> 
                       <View style={styles.boxIcons}>
                           <Ionicons name="arrow-back-circle-outline" style={styles.icon}></Ionicons>   
                           <Ionicons name="map-outline" style={styles.icon}></Ionicons>   
                           <Ionicons name="analytics-sharp" style={styles.icon}></Ionicons>   
                           <Ionicons name="arrow-down-circle-outline" style={styles.icon}></Ionicons> 
                       </View>
                   </View>

                   <View style={styles.box}>
                        <View style={styles.boxImage}>
                          <Image  source={{
                            uri: "https://wallpaperaccess.com/full/147476.jpg",
                            }} style={styles.image} />
                        </View>
                        <View style={styles.boxContent}>
                            <Text style={styles.title}>American Mainland</Text>
                            <Text style={styles.paragraph}>New York offers a grittier, high-energy atmosphere. The sprawling cityscape, packed with gridlocked streets and iconic bridges, forces racers to adapt to chaotic environments. The underground scene thrives on speed, agility, and risk-taking amidst the dense urban jungle.</Text>
                        </View>  
                        <View style={styles.boxIcons}>
                           <Ionicons name="arrow-back-circle-outline" style={styles.icon}></Ionicons>   
                           <Ionicons name="map-outline" style={styles.icon}></Ionicons>   
                           <Ionicons name="analytics-sharp" style={styles.icon}></Ionicons>     
                           <Ionicons name="arrow-down-circle-outline" style={styles.icon}></Ionicons> 
                       </View>
                   </View>

                   <View style={styles.box}>
                        <View style={styles.boxImage}>
                          <Image  source={{
                            uri: "https://th.bing.com/th/id/OIP.RH6bGTIq01g7Ll2tCOF30QHaEo?rs=1&pid=ImgDetMain",
                            }} style={styles.image} />
                        </View>
                        <View style={styles.boxContent}>
                            <Text style={styles.title}>Europe Mainlend</Text>
                            <Text style={styles.paragraph}>Paris, with its narrow cobblestone streets and historic landmarks, presents a more sophisticated yet rebellious racing scene. Racers weave through iconic avenues like the Champs-Élysées and challenge the limits under the cover of the city's romantic, moonlit ambiance, blending elegance with adrenaline-fueled danger. </Text>
                        </View>  
                        <View style={styles.boxIcons}>
                           <Ionicons name="arrow-back-circle-outline" style={styles.icon}></Ionicons>   
                           <Ionicons name="map-outline" style={styles.icon}></Ionicons>   
                           <Ionicons name="analytics-sharp" style={styles.icon}></Ionicons>   
                           <Ionicons name="arrow-down-circle-outline" style={styles.icon}></Ionicons> 
                       </View>
                   </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default HistoryLeague;