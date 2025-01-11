import {} from 'react'
import { ScrollView, Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import CarrouselWords from '../../../Dinamics/CarrouselWords';

//Styes 
import { ThemeProvider } from '../../../../../context/themeContext';
import { useTheme } from "../../../../../context/themeContext";
import { Ionicons } from '@expo/vector-icons';



const StorySpotify = () => {
    
    const theme = useTheme();
    const styles = StyleSheet.create({
    box: {
        backgroundColor: theme.colors.dark.secondary,
        height: 220,
        width: '95%',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    title: {
        color: theme.colors.white.primary,
        fontSize: 18,
        fontWeight: 'bold',
    },
    subtitle: {
        color: theme.colors.white.primary,
        fontSize: 16,
        marginBottom: 10,
    },
    paragraph: {
        color: theme.colors.white.primary,
        fontSize: 14,
        marginBottom: 10,
    },
    button: {
        backgroundColor: theme.colors.white.primary,
        borderRadius: 5,
        padding: 10,
        marginHorizontal: 10,
        marginBottom: 10,
        borderWidth: 1,
    },

    colorsEffect: {
        color: theme.colors.red.secondary,
        fontSize: 16,
        fontWeight: '100',
    },

    icon: {
        marginInlineStart: 8,
    },
    });

    return(
        <SafeAreaView>
            <ScrollView>
                  <View style={styles.box}>
                    <Text style={styles.title}>Profiles of Spotfy </Text>
                    <Text style={styles.subtitle}>Description of profiles of cars on the world in the Spotfy</Text>
                    <Text style={styles.paragraph}>First Atention of Users who are in the aplicative</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} scrollPerfTag='#'>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.colorsEffect}>Two Steps</Text>
                            <Ionicons name='star' size={24} style={styles.icon} color={'#ff2626'}></Ionicons>
                        </TouchableOpacity>    

                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.colorsEffect}>Canadá </Text>
                            <Ionicons name='star' size={24} style={styles.icon} color={'#ff2626'}></Ionicons>
                        </TouchableOpacity>    

                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.colorsEffect}> Gakku </Text>
                            <Ionicons name='star' size={24} style={styles.icon} color={'#ff2626'}></Ionicons>
                        </TouchableOpacity>   

                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.colorsEffect}> Õkami </Text>
                            <Ionicons name='star' size={24} style={styles.icon} color={'#ff2626'}></Ionicons>
                        </TouchableOpacity>    

                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.colorsEffect}> Shibuya </Text>
                            <Ionicons name='star' size={24} style={styles.icon} color={'#ff2626'}></Ionicons>
                        </TouchableOpacity>    
                    </ScrollView>
                    <CarrouselWords  words={['Gakku', 'Shibuya', 'Two Steps', 'Canadá', 'Õkami', 'Night City', 'Datsun']} speed={250} direction="left" gradientWidth={40}  textStyle={{ color: theme.colors.red.tertiary ,fontSize: 18,fontWeight: 'bold' }}   containerStyle={{ backgroundColor: 'transparent', height: 50}} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default StorySpotify;