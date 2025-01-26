
import{} from 'react'
import { ScrollView, View, Text, TouchableOpacity, Button, StyleSheet, Pressable, Linking } from 'react-native'

//Styles 

import { useTheme } from '../../../../../context/themeContext'
import { Ionicons } from '@expo/vector-icons'

const BannerUser = () => {
    const { colors } = useTheme();
    const styles = StyleSheet.create({
        container: {
            backgroundColor: colors.red.primary,
            width:460,
            height: 220,
            paddingHorizontal: 20,
            paddingVertical: 20,
            borderRadius: 12,
            justifyContent: 'space-between',
            borderBottomWidth: 1,
            borderColor: colors.dark.primary,
        },
        content: {
            height: 120,
            justifyContent: 'center',
            alignItems: 'center',
            width: 300,
        },
        title: {
            fontSize: 28,
            width: 320,
            fontWeight: 'bold',
            marginInlineStart: 12,
            color: colors.white.primary,
        },
        subtitle: {
            fontSize: 16,
            width: 310,
            marginInlineStart: 12,
            color: colors.white.secondary,
        },
        button: {
            backgroundColor: colors.dark.primary,
            width: 142,
            height: 42,
            marginInlineEnd: 180,
            marginBlock:2,
            paddingHorizontal: 20,
            borderRadius: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        buttonText: {
            fontSize: 16,
            color: colors.white.primary,
        },

        icon: {
            color: colors.white.primary,
            marginInline: 12,
        },

    });
    const openLink = () => {
        const url = 'https://github.com/Izileth';
        Linking.openURL(url).catch((err) => console.error("Erro ao Abrir o Link", err)); 
    }
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Welcome To My Profile</Text>
                <Text style={styles.subtitle}>Your Personalized Experience</Text>
            </View>
            <Pressable onPress={openLink} style={styles.button}>
                <Text style={styles.buttonText}>Discover</Text>
                <Ionicons name="arrow-forward" size={24} color={colors.white.primary} />
            </Pressable>
        </View>
    )
}

export default BannerUser;