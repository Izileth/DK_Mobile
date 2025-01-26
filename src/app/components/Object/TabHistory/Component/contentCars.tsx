import {ScrollView,FlatList,Image,TouchableOpacity,StyleSheet,Text,View, } from "react-native";
import React from "react";
import { Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../../../../context/themeContext";

const Cars = () => {

    const theme = useTheme();
        
    const styles = StyleSheet.create({
        
        //Ajustes nas caixas de conteúdo
        
        box: {
        width: "100%",
        padding: 24,
        backgroundColor: theme.colors.dark.primary,
        borderRadius: 12,
        textAlign: "center",
        shadowColor: theme.colors.dark.primary,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 2,
        marginBottom: 90,
        },
    
    
        boxList: {
        width: "100%",
        height: 490,
        padding: 12,
        marginBlock: 28,
        marginBottom: 16,
        borderRadius: 12,
        backgroundColor: theme.colors.dark.primary,
        justifyContent: "center",
        alignItems: 'center',
        },
    
        //Ajustes na caixa de imagens
    
        boxImage: {
        marginBlock: 24,
        padding: 4,
        borderRadius: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: theme.colors.dark.primary,
        position: "relative",
        height: 380,
        width: "95%",
        },
    
        image: {
        width: 442,
        height: 262,
        marginBottom: 16,
        borderRadius: 12,
        },
    
        
        //Ajustes nos titulos, subtitulos e paragrafos
        title: {
        color: theme.colors.red.primary,
        fontSize: 32,
        marginBottom: 20,
        fontWeight: "600",
        },
    
        boldTitle: {
        color: theme.colors.red.primary,
        fontSize: 28,
        marginBottom: 18,
        marginInlineStart: 20,
        fontWeight: "600",
        },
    
        boldParagraph: {
        color: theme.colors.white.primary,
        fontSize: 20,
        marginBottom: 8,
        marginBlock: 12,
        width: 440,
        fontWeight: "600",
        },
    
        subtitle: {
        color: theme.colors.red.primary,
        fontSize: 24,
        marginBottom: 32,
        fontWeight: "500",
        },
        paragraph: {
        color: theme.colors.white.primary,
        fontSize: 14,
        marginBottom: 10,
        width: 440,
        fontWeight: "400",
        },
        text: {
        color: theme.colors.white.primary,
        fontSize: 14,
        textAlign: "justify",
        },
    
        
        //Ajustes na lista de itens
    
        listItens: {
        flexDirection: "row",
        justifyContent: "center",
        fontSize: 26,
        width: 100,
        marginBlock: 12,
        },
        item: {
        backgroundColor: theme.colors.dark.primary,
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: 100,
        justifyContent: "center",
        marginBlock: 8,
        },
    
        // Ajustes nos icones
        icon: {
        color: theme.colors.red.primary,
        padding: 4,
        borderRadius: 12,
        marginBottom: 8,
        marginInline: 24,
        },
    });
    
    // Redirecionamento caso haja falha no Link
    const handlePress = async (link: string) => {
        const canOpen = await Linking.canOpenURL(link);
        if (canOpen) {
          Linking.openURL(link).catch((err) =>
            console.error("Erro ao abrir o link:", err)
          );
        } else {
          console.error("URL inválida ou não suportada:", link);
        }
    };

    // Chama a Constante para ir ao Link Http
    const openCars = {

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
        <ScrollView>
            <SafeAreaView>
                <View style={styles.box}>
                     <Text style={styles.boldTitle}>Toyota Supra Mk-4 1995</Text>
                        <TouchableOpacity
                        style={styles.boxList}
                        onPress={() =>
                            handlePress("https://www.youtube.com/watch?v=q-2i93gJ5_8")
                        }
                        >
                        <Image
                            source={{
                            uri: "https://i.pinimg.com/736x/6b/c3/f8/6bc3f88027d2acc090bba30348999e4a.jpg",
                            }}
                            style={styles.image}
                        />
                        <Text style={styles.boldParagraph}>
                            Clik to be redirected for video of car
                        </Text>
                        <Text style={styles.paragraph}>
                            Launched in 1978, the Toyota Supra became a global icon,
                            especially in the 1980s and 1990s. Known for its robustness and
                            performance, the Supra has gained international prominence. The
                            1995 model, for example, is highly prized by enthusiasts and
                            collectors alike.
                        </Text>
                        <View style={styles.listItens}>
                            <Ionicons 
                                style={styles.icon}
                                size={25}
                                name="flame"
                                onPress={openCars.brandToyota}
                            >
                            </Ionicons>
                            <Ionicons
                                style={styles.icon}
                                size={25}
                                name="bookmark"
                                onPress={openCars.brandToyota}
                            ></Ionicons>
                            <Ionicons 
                                style={styles.icon} 
                                size={25} name="heart"   
                                onPress={openCars.brandToyota}
                            >
                            </Ionicons>
                            <Ionicons
                                style={styles.icon}
                                size={25}
                                name="paper-plane"
                                onPress={openCars.brandToyota}
                            >
                            </Ionicons>
                            <Ionicons
                                style={styles.icon}
                                size={25}
                                name="chatbubble"
                                onPress={openCars.brandToyota}
                            >
                            </Ionicons>
                        </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.box}>
                        <Text style={styles.boldTitle}>Nissan Skyline R-34 1994</Text>
                        <TouchableOpacity
                        style={styles.boxList}
                        onPress={() =>
                            handlePress("https://www.youtube.com/watch?v=q-2i93gJ5_8")
                        }
                        >
                        <Image
                            source={{
                            uri: "https://i.pinimg.com/736x/13/aa/cf/13aacff17dbf6007893713a4f9530751.jpg",
                            }}
                            style={styles.image}
                        />
                        <Text style={styles.boldParagraph}>
                            Clik to be redirected for video of car
                        </Text>
                        <Text style={styles.paragraph}>
                            Introduced in 1957, the Nissan Skyline has evolved over the
                            years, but it was the R32 generation, launched in 1989, that
                            solidified its reputation as one of the most respected cars in
                            the sports car world. Powered by the RB26DETT engine, the
                            Skyline R32 GT-R is often remembered for its impressive
                            performance and for being a favorite of Jay Leno.
                        </Text>
                        <View style={styles.listItens}>
                            <Ionicons 
                                style={styles.icon}
                                size={25}
                                name="flame"
                                onPress={openCars.brandNissan}
                            >
                            </Ionicons>
                            <Ionicons
                                style={styles.icon}
                                size={25}
                                name="bookmark"
                                onPress={openCars.brandNissan}
                            ></Ionicons>
                            <Ionicons 
                                style={styles.icon} 
                                size={25} name="heart"   
                                onPress={openCars.brandNissan}
                            >
                            </Ionicons>
                            <Ionicons
                                style={styles.icon}
                                size={25}
                                name="paper-plane"
                                onPress={openCars.brandNissan}
                            >
                            </Ionicons>
                            <Ionicons
                                style={styles.icon}
                                size={25}
                                name="chatbubble"
                                onPress={openCars.brandNissan}
                            >
                            </Ionicons>
                        </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.box}>
                        <Text style={styles.boldTitle}>Mardza Rx-7 1994</Text>
                        <TouchableOpacity
                        style={styles.boxList}
                        onPress={() =>
                            handlePress("https://www.youtube.com/watch?v=q-2i93gJ5_8")
                        }
                        >
                        <Image
                            source={{
                            uri: "https://i.pinimg.com/736x/20/f1/2f/20f12f04c00f23891e0d9fe048076435.jpg",
                            }}
                            style={styles.image}
                        />
                        <Text style={styles.boldParagraph}>
                            Clik to be redirected for video of car
                        </Text>
                        <Text style={styles.paragraph}>
                            Produced between 1978 and 2002, the Mazda RX-7 is famous for its
                            rotary engine, which provided a unique driving experience. The
                            1995 model, for example, is highly prized by enthusiasts and
                            collectors alike. In addition, the RX-7 is often compared to
                            other Japanese icons, such as the Supra and Skyline, in
                            discussions about the best sports cars of the time..
                        </Text>
                        <View style={styles.listItens}>
                            <Ionicons 
                                style={styles.icon}
                                size={25}
                                name="flame"
                                onPress={openCars.brandMardza}
                            >
                            </Ionicons>
                            <Ionicons
                                style={styles.icon}
                                size={25}
                                name="bookmark"
                                onPress={openCars.brandMardza}
                            ></Ionicons>
                            <Ionicons 
                                style={styles.icon} 
                                size={25} name="heart"   
                                onPress={openCars.brandMardza}
                            >
                            </Ionicons>
                            <Ionicons
                                style={styles.icon}
                                size={25}
                                name="paper-plane"
                                onPress={openCars.brandMardza}
                            >
                            </Ionicons>
                            <Ionicons
                                style={styles.icon}
                                size={25}
                                name="chatbubble"
                                onPress={openCars.brandMardza}
                            >
                            </Ionicons>
                        </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.box}>
                        <Text style={styles.boldTitle}>Nissan Fairlady Z (240Z)</Text>
                        <TouchableOpacity
                        style={styles.boxList}
                        onPress={() =>
                            handlePress("https://www.youtube.com/watch?v=q-2i93gJ5_8")
                        }
                        >
                        <Image
                            source={{
                            uri: "https://i.pinimg.com/736x/db/5e/2b/db5e2b823afd4c54d256855028fdd731.jpg",
                            }}
                            style={styles.image}
                        />
                        <Text style={styles.boldParagraph}>
                            Clik to be redirected for video of car
                        </Text>
                        <Text style={styles.paragraph}>
                            Introduced in 1969, the Nissan Fairlady Z, known as the 240Z in
                            international markets, is one of Nissan's first affordable
                            sports cars. With a design inspired by European cars, the 240Z
                            quickly became a classic, being appreciated for its performance
                            and style.
                        </Text>
                        <View style={styles.listItens}>
                            <Ionicons 
                                style={styles.icon}
                                size={25}
                                name="flame"
                                onPress={openCars.brandNissan}
                            >
                            </Ionicons>
                            <Ionicons
                                style={styles.icon}
                                size={25}
                                name="bookmark"
                                onPress={openCars.brandNissan}
                            ></Ionicons>
                            <Ionicons 
                                style={styles.icon} 
                                size={25} name="heart"   
                                onPress={openCars.brandNissan}
                            >
                            </Ionicons>
                            <Ionicons
                                style={styles.icon}
                                size={25}
                                name="paper-plane"
                                onPress={openCars.brandNissan}
                            >
                            </Ionicons>
                            <Ionicons
                                style={styles.icon}
                                size={25}
                                name="chatbubble"
                                onPress={openCars.brandNissan}
                            >
                            </Ionicons>
                        </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.box}>
                        <Text style={styles.boldTitle}>
                        Mitsubishi Lancer Evolution VII
                        </Text>
                        <TouchableOpacity
                        style={styles.boxList}
                        onPress={() =>
                            handlePress("https://www.youtube.com/watch?v=q-2i93gJ5_8")
                        }
                        >
                        <Image
                            source={{
                            uri: "https://i.pinimg.com/736x/5c/fc/53/5cfc53f57f588167c4f6bdf2e0d65b93.jpg",
                            }}
                            style={styles.image}
                        />
                        <Text style={styles.boldParagraph}>
                            Clik to be redirected for video of car
                        </Text>
                        <Text style={styles.paragraph}>
                            Launched in 2001, the Mitsubishi Lancer Evolution VII is one of
                            the most iconic models in the Lancer Evolution line. Known for
                            its all-wheel drive and exceptional performance, the Evo VII has
                            become a favorite among rally and sports car enthusiasts.
                        </Text>
                        <View style={styles.listItens}>
                            <Ionicons 
                                style={styles.icon}
                                size={25}
                                name="flame"
                                onPress={openCars.brandMitsubichi}
                            >
                            </Ionicons>
                            <Ionicons
                                style={styles.icon}
                                size={25}
                                name="bookmark"
                                onPress={openCars.brandMitsubichi}
                            ></Ionicons>
                            <Ionicons 
                                style={styles.icon} 
                                size={25} name="heart"   
                                onPress={openCars.brandMitsubichi}
                            >
                            </Ionicons>
                            <Ionicons
                                style={styles.icon}
                                size={25}
                                name="paper-plane"
                                onPress={openCars.brandMitsubichi}
                            >
                            </Ionicons>
                            <Ionicons
                                style={styles.icon}
                                size={25}
                                name="chatbubble"
                                onPress={openCars.brandMitsubichi}
                            >
                            </Ionicons>
                        </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.box}>
                        <Text style={styles.boldTitle}>Nissan 240SX</Text>
                        <TouchableOpacity
                        style={styles.boxList}
                        onPress={() =>
                            handlePress("https://www.youtube.com/watch?v=q-2i93gJ5_8")
                        }
                        >
                        <Image
                            source={{
                            uri: "https://i.pinimg.com/736x/38/f3/20/38f320c7f03a86c42a61bccca8e10a90.jpg",
                            }}
                            style={styles.image}
                        />
                        <Text style={styles.boldParagraph}>
                            Clik to be redirected for video of car
                        </Text>
                        <Text style={styles.paragraph}>
                            Introduced in 1989, the Nissan 240SX is a sports coupe that has
                            gained popularity among drift enthusiasts, especially in the
                            United States. Its rear-wheel drive and balanced design have
                            made it an ideal platform for modifications and competitions.
                        </Text>
                        <View style={styles.listItens}>
                            <Ionicons 
                                style={styles.icon}
                                size={25}
                                name="flame"
                                onPress={openCars.brandNissan}
                            >
                            </Ionicons>
                            <Ionicons
                                style={styles.icon}
                                size={25}
                                name="bookmark"
                                onPress={openCars.brandNissan}
                            ></Ionicons>
                            <Ionicons 
                                style={styles.icon} 
                                size={25} name="heart"   
                                onPress={openCars.brandNissan}
                            >
                            </Ionicons>
                            <Ionicons
                                style={styles.icon}
                                size={25}
                                name="paper-plane"
                                onPress={openCars.brandNissan}
                            >
                            </Ionicons>
                            <Ionicons
                                style={styles.icon}
                                size={25}
                                name="chatbubble"
                                onPress={openCars.brandNissan}
                            >
                            </Ionicons>
                        </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.box}>
                        <Text style={styles.boldTitle}>Nissan Silvia S-14 1999</Text>
                        <TouchableOpacity
                        style={styles.boxList}
                        onPress={() =>
                            handlePress("https://www.youtube.com/watch?v=q-2i93gJ5_8")
                        }
                        >
                        <Image
                            source={{
                            uri: "https://i.pinimg.com/736x/40/c5/02/40c50270e259b6ea39a9d879b673caa2.jpg",
                            }}
                            style={styles.image}
                        />
                        <Text style={styles.boldParagraph}>
                            Clik to be redirected for video of car
                        </Text>
                        <Text style={styles.paragraph}>
                            The Nissan Silvia series, especially the S13, S14, and S15
                            generations, is revered by drift and tuning enthusiasts.
                            Introduced in the late 1980s, the Silvia line stood out for its
                            rear-wheel drive and balance, making it a popular choice for
                            modifications and competitions. The S15, for example, won 11
                            championships in the D1 Grand Prix with eight different drivers,
                            solidifying its reputation in the world of drift.
                        </Text>
                        <View style={styles.listItens}>
                            <Ionicons 
                                style={styles.icon}
                                size={25}
                                name="flame"
                                onPress={openCars.brandNissan}
                            >
                            </Ionicons>
                            <Ionicons
                                style={styles.icon}
                                size={25}
                                name="bookmark"
                                onPress={openCars.brandNissan}
                            ></Ionicons>
                            <Ionicons 
                                style={styles.icon} 
                                size={25} name="heart"   
                                onPress={openCars.brandNissan}
                            >
                            </Ionicons>
                            <Ionicons
                                style={styles.icon}
                                size={25}
                                name="paper-plane"
                                onPress={openCars.brandNissan}
                            >
                            </Ionicons>
                            <Ionicons
                                style={styles.icon}
                                size={25}
                                name="chatbubble"
                                onPress={openCars.brandNissan}
                            >
                            </Ionicons>
                        </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.box}>
                        <Text style={styles.boldTitle}>Nissan 250z</Text>
                        <TouchableOpacity
                        style={styles.boxList}
                        onPress={() =>
                            handlePress("https://www.youtube.com/watch?v=q-2i93gJ5_8")
                        }
                        >
                        <Image
                            source={{
                            uri: "https://i.pinimg.com/736x/9c/fa/4a/9cfa4aeaa648d2941499ef82d5ea2664.jpg",
                            }}
                            style={styles.image}
                        />
                        <Text style={styles.boldParagraph}>
                            Clik to be redirected for video of car
                        </Text>
                        <Text style={styles.paragraph}>
                            Launched in the early 2000s, the Nissan 350Z revitalized
                            Nissan's Z line. With a powerful V6 engine and bold design, it
                            has quickly become a favorite among sports car enthusiasts. Its
                            popularity has also extended to the world of racing and tuning,
                            with many owners customizing their vehicles for enhanced
                            performance and aesthetics.
                        </Text>
                        <View style={styles.listItens}>
                            <Ionicons 
                                style={styles.icon}
                                size={25}
                                name="flame"
                                onPress={openCars.brandNissan}
                            >
                            </Ionicons>
                            <Ionicons
                                style={styles.icon}
                                size={25}
                                name="bookmark"
                                onPress={openCars.brandNissan}
                            ></Ionicons>
                            <Ionicons 
                                style={styles.icon} 
                                size={25} name="heart"   
                                onPress={openCars.brandNissan}
                            >
                            </Ionicons>
                            <Ionicons
                                style={styles.icon}
                                size={25}
                                name="paper-plane"
                                onPress={openCars.brandNissan}
                            >
                            </Ionicons>
                            <Ionicons
                                style={styles.icon}
                                size={25}
                                name="chatbubble"
                                onPress={openCars.brandNissan}
                            >
                            </Ionicons>
                        </View>
                        </TouchableOpacity>                    
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}
export default Cars;