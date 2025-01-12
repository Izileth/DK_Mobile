
import{} from 'react'
import { ScrollView, View, Text, TouchableOpacity, Button, StyleSheet, Pressable } from 'react-native'

//Styles 

import { ThemeProvider } from '../../../../../context/themeContext'
import { useTheme } from '../../../../../context/themeContext'
import { Ionicons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'

const AcoultUser = () => {
    const theme = useTheme()
    const styles = StyleSheet.create({
        container: {
            backgroundColor: theme.colors.dark.primary,
            flexDirection: 'column',
            height:'auto',
            width:'100%',
            padding: 24,
            marginVertical: 12
        },
        bar: {
            backgroundColor: theme.colors.dark.primary,
            width: 380,
            flexDirection: 'row',
            justifyContent:'space-between',
            alignItems: 'center',
            padding: 12,
            marginBottom: 12
        },
        box: {
            backgroundColor: theme.colors.dark.tertiary,
            flexDirection: 'row',
            justifyContent:'space-between',
            alignItems: 'center',
            width: '100%',
            height: 100,
            padding: 24,
            borderRadius: 10,
            marginBottom: 12
        },
        
        content: {
            flexDirection: 'column',
            justifyContent:'space-between',
            marginBottom: 12
        },
        //Ajustes nos Titulos, Subtitulos e Paragrafos

        title: {
            fontSize: 24,
            fontWeight: 'bold',
            color: theme.colors.white.primary
        },
        subtitle: {
            fontSize: 18,
            color: theme.colors.white.secondary
        },
        barTitle: {
            fontSize: 32,
            fontWeight: '600',
            color: theme.colors.white.primary
        },

        //Ajustes nos botões

        button: {
            backgroundColor: theme.colors.dark.primary,
            borderRadius: 5,
            padding: 12,
            justifyContent: 'center',
            alignItems: 'center'
        },

        barButton: {
            marginLeft: 12,
            height: 100,
            padding: 12,
            borderRadius: 5,
            backgroundColor: theme.colors.dark.primary,
            justifyContent: 'center',
            alignItems: 'center'
        },

    });
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.bar}>
                        <Text style={styles.barTitle}>Authentication of activities</Text>
                        <Pressable style={styles.barButton}>
                            <Ionicons name="log-out-outline" size={48} color={theme.colors.white.primary} />
                        </Pressable>
                   </View>
                   <View style={styles.box}>
                        <View style={styles.content}>
                           <Text style={styles.title}>User Activity</Text>
                           <Text style={styles.subtitle}>Parameters Produced to Illustrate</Text>
                        </View>
                        <Pressable style={styles.button}>
                            <Ionicons name="bookmark-outline" size={32} color={theme.colors.white.primary} />
                        </Pressable>
                   </View>
                   <View style={styles.box}>
                        <View style={styles.content}>
                           <Text style={styles.title}>User Activity</Text>
                           <Text style={styles.subtitle}>Parameters Produced to Illustrate</Text>
                        </View>
                        <Pressable style={styles.button}>
                            <Ionicons name="bulb-outline" size={32} color={theme.colors.white.primary} />
                        </Pressable>
                   </View>
                   <View style={styles.box}>
                        <View style={styles.content}>
                           <Text style={styles.title}>User Activity</Text>
                           <Text style={styles.subtitle}>Parameters Produced to Illustrate</Text>
                        </View>
                        <Pressable style={styles.button}>
                            <Ionicons name="flag-outline" size={32} color={theme.colors.white.primary} />
                        </Pressable>
                   </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default AcoultUser;