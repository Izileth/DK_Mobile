
import{} from 'react'
import { ScrollView, View, Text, TouchableOpacity, Button, StyleSheet, Pressable } from 'react-native'

//Styles 

import { ThemeProvider } from '../../../../../context/themeContext'
import { useTheme } from '../../../../../context/themeContext'
import { Ionicons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'

const BannerUser = () => {
    const { colors } = useTheme();
    const styles = StyleSheet.create({
        container: {
            backgroundColor: colors.dark.tertiary,
            width:460,
            height: 220,
            paddingHorizontal: 20,
            paddingVertical: 20,
            borderRadius: 12,
            justifyContent: 'space-between',
            borderBottomWidth: 1,
            borderColor: colors.dark.tertiary,
        },
        content: {
            height: 120,
            justifyContent: 'center',
            alignItems: 'center',
            width: 300,
        },
        title: {
            fontSize: 28,
            width: 310,
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
            backgroundColor: colors.red.primary,
            width: 130,
            height: 36,
            marginInlineEnd: 180,
            marginBlock:2,
            paddingHorizontal: 20,
            borderRadius: 2,
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
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Welcome To My Profile</Text>
                <Text style={styles.subtitle}>Your Personalized Experience</Text>
            </View>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Discover</Text>
                <Ionicons name="arrow-forward" size={24} color={colors.white.primary} />
            </Pressable>
        </View>
    )
}

export default BannerUser;