import{} from 'react'
import { ScrollView, View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

//Styles 
import { ThemeProvider } from '../../../../../context/themeContext'
import { useTheme } from '../../../../../context/themeContext'
import { Ionicons } from '@expo/vector-icons'

const AboutUser = () => {
    const theme = useTheme();
    const styles = StyleSheet.create({

        container: {
            flexDirection: 'row',
            justifyContent:'space-around',
            width: '100%',
            paddingHorizontal: 24,
            paddingVertical: 16,
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
            width: 390,
            height:280,
            padding: 24,
            backgroundColor: theme.colors.dark.tertiary,
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
    return (
        <SafeAreaView>
            <ScrollView horizontal>
                <View style={styles.container}>
                    <View style={styles.box}>
                        <Text style={styles.title}>About Me</Text>
                        <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel neque vel felis dapibus tincidunt. Sed convallis, turpis at pellentesque ultrices, ligula est molestie velit, ac ultricies orci ipsum in est. In hac habitasse platea dictumst.</Text>
                        <Button title='Visit My Website' color={theme.colors.dark.primary} />
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.title}>My Story</Text>
                        <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel neque vel felis dapibus tincidunt. Sed convallis, turpis at pellentesque ultrices, ligula est molestie velit, ac ultricies orci ipsum in est. In hac habitasse platea dictumst.</Text>
                        <Button title='Read My Blog' color={theme.colors.dark.primary} />
                    </View>    
                    <View style={styles.box}>
                        <Text style={styles.title}>My Skills</Text>
                        <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel neque vel felis dapibus tincidunt. Sed convallis, turpis at pellentesque ultrices, ligula est molestie velit, ac ultricies orci ipsum in est. In hac habitasse platea dictumst.</Text>
                        <Button title='Read My Blog' color={theme.colors.dark.primary} />
                    </View>    
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default AboutUser;