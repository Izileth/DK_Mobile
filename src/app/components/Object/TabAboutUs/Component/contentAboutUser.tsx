import{} from 'react'
import { ScrollView, View, Text, TouchableOpacity, Button, StyleSheet, Linking } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

//Styles 
import { useTheme } from '../../../../../context/themeContext'

const AboutUser = () => {
    const theme = useTheme();
    const styles = StyleSheet.create({

        container: {
            flexDirection: 'row',
            justifyContent:'space-around',
            width: '100%',
            paddingHorizontal: 24,
            backgroundColor: theme.colors.dark.primary,
            marginBottom: 24,
            borderRadius: 10,
            overflow: 'hidden',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5,
        },

        box: {
            width: 425,
            height:290,
            padding: 24,
            backgroundColor: theme.colors.red.primary,
            borderRadius: 10,
            marginInline: 24,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5,
            marginBottom: 16,

        },

        // Ajustes nosntitulos, subtitulos, paragrafos
        
        title: {
            color: theme.colors.white.primary,
            fontSize: 32,
            fontWeight: '100',
            marginBottom: 8,
        },
        
        paragraph: {
            color: theme.colors.white.primary,
            fontSize: 14,
            textAlign: 'justify',
            marginBottom: 24,
        },

    });
    const openLink = () => {
            const url = 'https://github.com/Izileth';
            Linking.openURL(url).catch((err) => console.error("Erro ao Abrir o Link", err)); 
    }    
    return (
        <SafeAreaView>
            <ScrollView horizontal>
                <View style={styles.container}>
                    <View style={styles.box}>
                        <Text style={styles.title}>About Me</Text>
                        <Text style={styles.paragraph}>Hello, my nickname is Izilteh, I am a Back and Front End developer, my job is to find solutions to problems of my customers and cooperatives, and I like that, I have been studying since 2022 and I feel more and more able to face new challenges. </Text>
                        <Button onPress={openLink} title='Visit My Website' color={theme.colors.dark.primary} />
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.title}>My Story</Text>
                        <Text style={styles.paragraph}>As of 2022, my first project was a counter in javascrit, a little small when compared to the others, but it was my contact with programming logic, since then, I started to improve myself more and more.</Text>
                        <Button onPress={openLink} title='Read My Blog' color={theme.colors.dark.primary} />
                    </View>    
                    <View style={styles.box}>
                        <Text style={styles.title}>My Skills</Text>
                        <Text style={styles.paragraph}>My skills consist of the development of Applications in React Native, Multi-platform projects in React and Web Components in the most other frameworks.</Text>
                        <Button  onPress={openLink}title='Read My Blog' color={theme.colors.dark.primary} />
                    </View>    
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default AboutUser;