import{} from 'react'
import { ScrollView, StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

//Styes 
import { useTheme } from '../../../../context/themeContext';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";


const Banner = () => {
    const theme = useTheme();  
    const styles = StyleSheet.create({
        container: {
            height: 160,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:theme.colors.dark.secondary,
            paddingTop: 48,
            paddingBottom: 64,
            borderRadius:8,
            marginBlock: 34,
        },
        box: {
            height: 180,
            paddingTop: 24,
            paddingBottom: 24,
            paddingHorizontal: 24,
            marginBottom: 24,
            borderRadius: 12,
            backgroundColor:theme.colors.red.tertiary,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            zIndex: 999, // To ensure it stays on top of other elements when scrolling
            position: 'relative', // To make the shadow effect work properly on Android
        },

        //Ajustes no Titulo, subtitulo e paragrafo

        title: {
            fontSize: 32,
            fontWeight: 'bold',
            marginBlockStart:8,
            color: theme.colors.white.primary,
        },

        titleColors: {
            fontSize: 32,
            fontWeight: 'bold',
            color: theme.colors.white.tertiary,
        },

        subtitle: {
            fontSize: 20,
            marginBlock:-6,
            fontWeight: 'bold',
            color: theme.colors.white.tertiary,
        },

        //Ajustes no botão
        button: {
            width: 152,
            height: 42,
            borderRadius: 6,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.colors.dark.primary,
            display: 'flex',
            flexDirection: 'row',
            marginBlock: 20,
        },
    });

    return (
        <SafeAreaView>
            <ScrollView>
                <LinearGradient style={styles.container} colors={['#ff2626', '#ff2626', "ff2626"]} start={{x:0, y:0}} end={{x:1, y:1}}>
                    <View style={styles.box}>
                        <Text style={styles.title}>Welcome To <Text style={styles.titleColors}>Drift For All</Text></Text>
                        <Text style={styles.subtitle}>Where are you going today?</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={{color: theme.colors.white.primary, fontWeight: '100', fontSize: 18, padding:4, borderRadius: 4, }}>Book Now</Text>
                            <Ionicons name='arrow-forward-circle-outline' style={{color: theme.colors.white.primary, fontSize: 24, marginLeft: 2}} size={24} />
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Banner;