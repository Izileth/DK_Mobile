import {Text, ScrollView, SafeAreaView, Image, StyleSheet, View, TouchableOpacity} from 'react-native'
import CarrouselWords from '../../../Dinamics/CarrouselWords'

//Styes 
import { ThemeProvider } from '../../../../../context/themeContext';
import { useTheme } from "../../../../../context/themeContext";
import { Ionicons } from '@expo/vector-icons';


const StoryRacers = () => {

    const theme = useTheme();
    const styles = StyleSheet.create({
    box: {
        width: "95%",
        height:'auto',
        padding: 24,
        marginInline: 12,
        backgroundColor: theme.colors.dark.tertiary,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 2,
        marginBottom: 60,
    },

    title: {
        color: "#fff",
        fontSize: 32,
        fontWeight: "600",
        marginBlock: 12,
    },

    titleColors:{
        color: theme.colors.red.primary,
        fontSize: 16,
        fontWeight: "100",
    },

    subtitle: {
        color: theme.colors.white.primary,
        fontSize: 20,
        fontWeight: "500",
        marginBlock: 6,
    },

    paragraph: {
        color: theme.colors.white.primary,
        fontSize: 16,
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
        padding: 2,
        height:48,
        backgroundColor: theme.colors.dark.secondary,
        marginBottom: 12,
        marginInline:10,
        borderColor: theme.colors.dark.secondary,
        borderWidth: 0.25,
        borderRadius: 6,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 2,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        textAlign: 'center',
        overflow: "hidden",
        position: "relative",
    },
    icon: {
        marginInlineStart:8,
    },
    
    
    });

    
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.box}>
                    <Text style={styles.title}>Historys of Underworld Racers</Text>
                    <Text style={styles.subtitle}>Japanese Racers have a rich and fascinating history, marked by iconic models that have left an indelible mark on the automotive industry and popular culture.</Text>
                    <Text style={styles.paragraph}>Legens of Culture Japanese</Text>
                    <ScrollView horizontal   showsHorizontalScrollIndicator={false}>
                        <View style={styles.list}>

                            <TouchableOpacity style={styles.button}>
                               <Text style={styles.titleColors}>Arizona</Text>
                               <Ionicons name='chatbubbles-outline' size={24} color={'#ff2222'} style={styles.icon}></Ionicons>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.titleColors}>Detroit</Text>
                                <Ionicons name='chatbubbles-outline' size={24} color={'#ff2222'} style={styles.icon}></Ionicons>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.titleColors}>Japan</Text>
                                <Ionicons name='chatbubbles-outline' size={24} color={'#ff2222'} style={styles.icon}></Ionicons>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.titleColors}>Brazil</Text>
                                <Ionicons name='chatbubbles-outline' size={24} color={'#ff2222'} style={styles.icon}></Ionicons>
                            </TouchableOpacity>

                        </View>
                    </ScrollView>
                    <CarrouselWords  words={['Next JS', 'React JS', 'Value JS', 'Angular JS']} speed={150}direction="left" gradientWidth={40}  textStyle={{ color: 'red',fontSize: 18,fontWeight: 'bold' }}   containerStyle={{ backgroundColor: 'transparent', height: 50}} />
                </View>           
            </ScrollView>
        </SafeAreaView>
    )
}
export default StoryRacers;