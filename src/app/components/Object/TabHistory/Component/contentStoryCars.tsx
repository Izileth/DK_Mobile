import {Text, ScrollView, SafeAreaView, Image, StyleSheet, View, TouchableOpacity} from 'react-native'
import CarrouselWords from '../../../Dinamics/CarrouselWords'


//Styes 
import { ThemeProvider } from '../../../../../context/themeContext';
import { useTheme } from "../../../../../context/themeContext";
import { Ionicons } from '@expo/vector-icons';


const StoryCars = () => {
    
    const theme = useTheme();

    
    const styles = StyleSheet.create({
        
    box: {
        width: 430,
        height:'auto',
        marginInline:12,
        padding: 24,
        backgroundColor: theme.colors.dark.tertiary,
        borderRadius: 12,
        shadowColor: theme.colors.dark.primary,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 2,
        marginBottom: 60,
    },

    title: {
        color: theme.colors.red.primary,
        fontSize: 32,
        fontWeight: "600",
        marginBlock: 12,
    },
    titleColors: {
        color: theme.colors.red.primary,
        fontSize: 16,
        fontWeight: "100",
        marginBlock: 6,
    },

    subtitle: {
        color: theme.colors.white.primary,
        fontSize: 16,
        fontWeight: "500",
        marginBlock: 6,
    },

    paragraph: {
        color: theme.colors.white.primary,
        fontSize: 14,
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
        padding: 6,
        backgroundColor: theme.colors.dark.primary,
        borderRadius: 6,
        marginBottom: 12,
        marginInline:10,
        borderColor: theme.colors.dark.secondary,
        borderWidth: 1,
        shadowColor: theme.colors.dark.secondary,
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
    icon: {
        marginInline: 8,
    },
    
    });


    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.box}>
                    <Text style={styles.title}>Historys of this Sport Cars</Text>
                    <Text style={styles.subtitle}>Japanese cars have a rich and fascinating history, marked by iconic models that have left an indelible mark on the automotive industry and popular culture.</Text>
                    <Text style={styles.paragraph}>Legens of Culture Japanese</Text>
                    <ScrollView horizontal   showsHorizontalScrollIndicator={false}>
                        <View style={styles.list}>

                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.titleColors}>Supra</Text>
                                <Ionicons name='sparkles-outline' size={24} color={'#ff2626'} style={styles.icon}></Ionicons>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.titleColors}>Civic </Text>
                                <Ionicons name='sparkles-outline' size={24} color={'#ff2626'} style={styles.icon}></Ionicons>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.titleColors}>Marda </Text>
                                <Ionicons name='sparkles-outline' size={24} color={'#ff2626'} style={styles.icon}></Ionicons>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.titleColors}>Lancer</Text>
                                <Ionicons name='sparkles-outline' size={24} color={'#ff2626'} style={styles.icon}></Ionicons>
                            </TouchableOpacity>

                            
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.titleColors}>Honda</Text>
                                <Ionicons name='sparkles-outline' size={24} color={'#ff2626'} style={styles.icon}></Ionicons>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.titleColors}>Nissan </Text>
                                <Ionicons name='sparkles-outline' size={24} color={'#ff2626'} style={styles.icon}></Ionicons>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.titleColors}>Lexus</Text>
                                <Ionicons name='sparkles-outline' size={24} color={'#ff2626'} style={styles.icon}></Ionicons>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.titleColors}>Mitisubichi</Text>
                                <Ionicons name='sparkles-outline' size={24} color={'#ff2626'} style={styles.icon}></Ionicons>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                    <CarrouselWords  words={['Honda', 'Nissan', 'Lexus', 'Mitisubichi']} speed={150}direction="left" gradientWidth={40}  textStyle={{ color: 'red',fontSize: 18,fontWeight: 'bold' }}   containerStyle={{ backgroundColor: 'transparent', height: 50}} />
                </View>           
            </ScrollView>
        </SafeAreaView>
    )
}
export default StoryCars;