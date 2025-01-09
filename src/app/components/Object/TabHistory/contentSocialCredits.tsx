import {Text, ScrollView, SafeAreaView, Image, StyleSheet, View, TouchableOpacity, Animated, Pressable, FlatList} from 'react-native'
import {useEffect, useRef, useState} from 'react'
import { Ionicons } from '@expo/vector-icons'
import CarrouselWords from '../../Dinamics/CarrouselWords'
import WordsPulsing from '../../Animation/WordsInPulsing'
import { Linking } from "react-native";

// Dados para a FlatList
const data = [
    {
      id: "1",
      title: "Pinterest",
      link: "https://br.pinterest.com/",
      icon: "logo-facebook",
    },
    {
      id: "2",
      title: "Reddit",
      link: "https://www.reddit.com/?rdt=33805",
      icon: "logo-twitter",
    },
    {
      id: "3",
      title: "Instagram",
      link: "https://www.instagram.com",
      icon: "logo-instagram",
    },
];

const ContentSociaCredits = () => {

  // Constante de redirecionamento para links externos
  const [loading, setLoading] = useState(false);

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
    
    //Efeitos e Animações

    const fadeAnim = useRef(new Animated.Value(0)).current; // Inicializa com opacidade 0

    useEffect(() => {
        Animated.timing(fadeAnim, {
        toValue: 1, // Opacidade final
        duration: 2000, // Duração da animação
        useNativeDriver: true,
        }).start();
    }, [fadeAnim]);
    
    return (
        <SafeAreaView>
            <ScrollView>
                    <Animated.View style={[{ opacity: fadeAnim }]}>
                          <View style={styles.box}>
                            <FlatList  data={data} keyExtractor={(item) => item.id} horizontal={true} showsHorizontalScrollIndicator={false} renderItem={({ item }) => (
                                <Pressable onPress={() => handlePress(item.link)}>
                                  <Ionicons style={styles.icon}
                                   name={item.icon }
                                   size={30} 
                                   color="#ffffff" />
                                </Pressable>
                              )}
                            />
                            <Text style={styles.credits}>
                                <Text style={styles.credits}>Credits for Developer</Text>
                            </Text>
                            <Pressable style={styles.button}onPress={() =>  Linking.openURL(   "https://www.pexels.com/pt-br/@introspectivedsgn/" )} >
                              <Text style={styles.text}>Follow Izileth</Text>
                            </Pressable>
                          </View>
                    </Animated.View>    
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    box: {
        height: 120,
        width: '100%',
        backgroundColor: '#000',
        padding: 16,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    icon: {
        color: '#ff2626',
        marginLeft: 16,
        marginTop: 10,
        marginBottom: 10,
    },
    credits: {
        color: '#ffffff',
        flexDirection: 'row',
        textAlign: 'center',
        marginInline: 16,
    },
    button:{
        backgroundColor: '#ff2626',
        flexDirection: 'row',
        height:32,
        width: 120,
        borderRadius: 4,
        marginInline: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '100',
    },
})
export default ContentSociaCredits;
