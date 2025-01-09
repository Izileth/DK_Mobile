
import {Text, ScrollView, SafeAreaView, Image, StyleSheet, View, TouchableOpacity} from 'react-native'
import CarrouselWords from '../../Dinamics/CarrouselWords'
import WordsPulsing from '../../Animation/WordsInPulsing'

const ContentHistoryBrand = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.box}>
                    <Text style={styles.title}>Historys of this Brand Cars</Text>
                    <Text style={styles.subtitle}>Japanese cars have a rich and fascinating history, marked by iconic models that have left an indelible mark on the automotive industry and popular culture.</Text>
                    <Text style={styles.paragraph}>Legens of Culture Japanese</Text>
                    <ScrollView horizontal   showsHorizontalScrollIndicator={false}>
                        <View style={styles.list}>

                            <TouchableOpacity style={styles.button}>
                                <WordsPulsing text="Toyota" duration={1000} startColor="#fff"endColor="transparent" />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.button}>
                                <WordsPulsing text="Lexus" duration={1000} startColor="#fff"endColor="transparent" />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.button}>
                                <WordsPulsing text="Mardza" duration={1000} startColor="#fff"endColor="transparent" />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.button}>
                                <WordsPulsing text="Mitsubichu" duration={1000} startColor="#fff"endColor="transparent" />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.button}>
                                <WordsPulsing text="Nissan" duration={1000} startColor="#fff"endColor="transparent" />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.button}>
                                <WordsPulsing text="Honda" duration={1000} startColor="#fff"endColor="transparent" />
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                   
                    <CarrouselWords  words={['React JS', 'Node JS', 'Value JS', 'Node JS']} speed={150}direction="left" gradientWidth={40}  textStyle={{ color: 'red',fontSize: 18,fontWeight: 'bold' }}   containerStyle={{ backgroundColor: 'transparent', height: 50}} />
                </View>           
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    box: {
        width: "100%",
        padding: 24,
        backgroundColor: "#080808",
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

    subtitle: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "500",
        marginBlock: 6,
    },

    paragraph: {
        color: "#ffffff",
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
        padding: 12,
        backgroundColor: "#1a1a1a",
        borderRadius: 6,
        marginBottom: 12,
        marginInline:10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 2,
        justifyContent: "center",
        alignItems: "center",
        textAlign: 'center',
        overflow: "hidden",
        position: "relative",
    },
    
})

export default ContentHistoryBrand