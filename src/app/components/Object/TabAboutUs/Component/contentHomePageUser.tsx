import {} from 'react'
import { ScrollView , StyleSheet, View, Text, Image} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

//Styles 

import { ThemeProvider } from '../../../../../context/themeContext'
import { useTheme } from '../../../../../context/themeContext'
import { Ionicons } from '@expo/vector-icons'

const HomePageUser = () => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        container: {
            height: 360,
            width: 450,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'column',
            borderRadius: 12,
            backgroundColor: 'rgba(41, 41, 41, 0.2)', // Simula o "embaçado"
        },
        content: {
            alignItems: 'center',
            flexDirection: 'column',
            height: 160,
            padding: 24,
        },

        //Ajustes na caixa de usuário

        
        contentUser: {
            width: 150,
            height: 150,
            borderRadius: 75,
            marginBottom: 24,
            overflow: 'hidden',
            backgroundColor: theme.colors.dark.primary,
            justifyContent: 'center',
            alignItems: 'center',
        },
        listTop: {
            position: 'absolute',
            top: 10,
            right: 10,
            borderRadius: 20,
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5,
            zIndex: 100, // Adiciona um z-index para evitar sobreposições com outros componentes.
        },
        listBotton: {
            width: 120,
            height: 25,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#000',
            marginBlockEnd: 38,
            shadowOffset: { width: 0, height: 2 },
        },

        icon:{
            marginInline: 8,
        },

        //Ajustes nos titulos, subtitulos e paragrafos

        title: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: -6,
            marginTop: 8,
            color: theme.colors.white.primary,
        },
        subtitle: {
            fontSize: 18,
            marginBlock: 8,
            color: theme.colors.white.primary,
        },
        // Add more UI components and styles here...
    });
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.content}>
                        <Image source={{uri: 'https://i.pinimg.com/736x/5e/39/6b/5e396bb1b17681759922dd10f8a9d702.jpg'}} style={styles.contentUser}></Image>
                        <View style={styles.listTop}>
                            <Ionicons name="star-outline" size={24} color={theme.colors.white.primary} />
                        </View>
                        <View style={styles.listBotton}>
                            <Ionicons name="star-outline" size={24} color={theme.colors.white.primary} style={styles.icon}/>
                            <Ionicons name="cloud-outline" size={24} color={theme.colors.white.primary} style={styles.icon}/>
                            <Ionicons name="heart-outline" size={24} color={theme.colors.white.primary} style={styles.icon} />
                            <Ionicons name="musical-notes-outline" size={24} color={theme.colors.white.primary } style={styles.icon}  />
                        </View>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.title}>Name of User</Text>
                        <Text style={styles.subtitle}>Descriton of Qualitys in The App</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomePageUser;