
import {Text, ScrollView, SafeAreaView, Image, StyleSheet, View, TouchableOpacity} from 'react-native'
import CarrouselWords from '../../../Dinamics/CarrouselWords'

//Styes 
import { Linking } from 'react-native';
import { useTheme } from "../../../../../context/themeContext";
import { Ionicons } from '@expo/vector-icons';



const StoryBrand = () => {
    const theme = useTheme();
    const styles = StyleSheet.create({

    box: {
        width: 480,
        padding: 6,
        height:'auto',
        marginInline: 12,
        backgroundColor: theme.colors.red.tertiary,
        borderRadius: 12,
        shadowColor: theme.colors.dark.tertiary,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 2,
        marginBottom: 60,
    },

    title: {
        color: theme.colors.white.primary,
        fontSize: 32,
        fontWeight: "600",
        marginInlineStart: 12,
        marginBlock: 12,
    },

    titleColors: {
        color: theme.colors.red.primary,
        fontSize: 16,
    },
    icon: {
        marginInlineStart: 6,
    },
    subtitle: {
        color: theme.colors.white.primary,
        fontSize: 16,
        marginInlineStart: 12,
        fontWeight: "500",
        marginBlock: 6,
    },

    paragraph: {
        color: theme.colors.white.primary,
        fontSize: 14,
        marginInlineStart: 12,
        fontWeight: "400",
        marginBlock: 12,
    },

    //Ajutes na lista 

    list: {
        display: "flex",
        flexDirection: "row",
        flexWrap: 'nowrap',
        justifyContent: "center",
        paddingHorizontal: 12,
        marginBlock:12,
    },

    button: {
        width: 150,
        padding: 12,
        backgroundColor: theme.colors.dark.primary,
        borderRadius: 6,
        marginBottom: 12,
        marginInline:10,
        shadowColor: theme.colors.dark.primary,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 2,
        justifyContent: "center",
        alignItems: "center",
        textAlign: 'center',
        flexDirection: "row",
        overflow: "hidden",
        position: "relative",
    },
    
    });
        
    // Chama a Constante para ir ao Link Http
    
    const openBrand = {

        brandNissan: () => {
        const url = 'https://www.nissan.co.jp/';
        Linking.openURL(url).catch((err) => console.error("Erro ao Abrir o Link", err));
        },
        brandMitsubichi: () => {
        const url = 'https://www.mitsubishi-motors.co.jp/'
        Linking.openURL(url).catch((err) => console.error("Erro ao Abrir o Link", err));
        },
        brandToyota: () => {
        const url = 'https://toyota.jp/';
        Linking.openURL(url).catch((err) => console.error("Erro ao Abrir o Link", err));
        },
        brandHonda: () => {
        const url = 'https://www.honda.co.jp/?msockid=3e8ecfece648628b193edb82e71f63df';
        Linking.openURL(url).catch((err) => console.error("Erro ao Abrir o Link", err));
        },
        brandMardza: () => {
        const url = 'https://www.mazda.co.jp/';
        Linking.openURL(url).catch((err) => console.error("Erro ao Abrir o Link", err));
        },
        brandLexus: () => {
        const url = 'https://lexus.jp/';
        Linking.openURL(url).catch((err) => console.error("Erro ao Abrir o Link", err));
        },
        
    };   

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.box}>
                    <Text style={styles.title}>Historys of this Brand Cars</Text>
                    <Text style={styles.subtitle}>Japanese cars have a rich and fascinating history, marked by iconic models that have left an indelible mark on the automotive industry and popular culture.</Text>
                    <Text style={styles.paragraph}>Legens of Culture Japanese</Text>
                    <ScrollView horizontal   showsHorizontalScrollIndicator={false}>
                        <View style={styles.list}>

                            <TouchableOpacity onPress={openBrand.brandHonda} style={styles.button}>
                                <Text style={styles.titleColors}>Honda</Text>
                                <Ionicons name='star-half' style={styles.icon} size={24} color={'#ff2626'}></Ionicons>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={openBrand.brandToyota} style={styles.button}>
                                <Text style={styles.titleColors}>Toyota</Text>
                                <Ionicons name='star-half' style={styles.icon} size={24} color={'#ff2626'}></Ionicons>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={openBrand.brandMitsubichi} style={styles.button}>
                                <Text style={styles.titleColors}>Mitisubichi</Text>
                                <Ionicons name='star-half' style={styles.icon} size={24} color={'#ff2626'}></Ionicons>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={openBrand.brandMardza} style={styles.button}>
                                <Text style={styles.titleColors}>Mardza</Text>
                                <Ionicons name='star-half' style={styles.icon} size={24} color={'#ff2626'}></Ionicons>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={openBrand.brandNissan} style={styles.button}>
                                <Text style={styles.titleColors}>Nissan</Text>
                                <Ionicons name='star-half' style={styles.icon} size={24} color={'#ff2626'}></Ionicons>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={openBrand.brandLexus} style={styles.button}>
                                <Text style={styles.titleColors}>Lexus</Text>
                                <Ionicons name='star-half' style={styles.icon} size={24} color={'#ff2626'}></Ionicons>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                   
                    <CarrouselWords  words={['Supra', 'Civic', 'Lancer', 'Skyline']} speed={150}direction="left" gradientWidth={0}  textStyle={{ color: '#000',fontSize: 18,fontWeight: 'bold' }}   containerStyle={{ backgroundColor: 'transparent', height: 50}} />
                </View>           
            </ScrollView>
        </SafeAreaView>
    )
}

export default StoryBrand;