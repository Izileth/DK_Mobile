import {} from 'react'
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

//Styles 

import { ThemeProvider } from '../../../../../context/themeContext'
import { useTheme } from '../../../../../context/themeContext'
import { Ionicons } from '@expo/vector-icons'

const HeaderUser = () => {

    const theme = useTheme();
    const styles = StyleSheet.create({
        header: {
            backgroundColor: theme.colors.dark.primary,
            width:'100%',
            height: 80,
            paddingTop: 24,
            paddingBottom: 24,
            paddingHorizontal: 24,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            position: 'relative',
            zIndex: 10,
            elevation: 5,
        },
        title: {
            fontSize: 20,
            fontWeight: '100',
            color: theme.colors.white.primary,
        },
        titleColors: {
            fontSize: 20,
            fontWeight: '100',
            color: theme.colors.red.primary,
        },

        //Ajustes na caixa de imagem do usuário

        userImage: {
            width: 42,
            height: 42,
            borderRadius: 50,
            borderWidth: 2,
            borderColor: theme.colors.white.primary,
            marginLeft: 16,
            justifyContent: 'center',
            alignItems: 'center',
            objectFit: 'contain'
        },

        button: {
            width: 62,
            height: 42,
            borderRadius: 50,
            backgroundColor: theme.colors.dark.primary,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 6,
            elevation: 5,
            shadowColor: "#000",
            shadowOpacity: 0.2,
            shadowRadius: 5,
            shadowOffset: {
                width: 0,
                height: 2,
            },
        },
        
    });
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.title}>Drift King <Text style={styles.titleColors}>Acout</Text></Text>
                    <TouchableOpacity style={styles.button }>
                        <Ionicons name='notifications' size={24} color={theme.colors.red.primary} />
                        <Image source={{uri: 'https://i.pinimg.com/736x/5e/39/6b/5e396bb1b17681759922dd10f8a9d702.jpg'}} style={styles.userImage}></Image>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HeaderUser;
