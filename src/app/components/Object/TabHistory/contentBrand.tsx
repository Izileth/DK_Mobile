import { ScrollView, FlatList, Image, TouchableOpacity, StyleSheet, Text, View,} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const ContentBrand = () => {
    return (
        <ScrollView>
            <SafeAreaView>
                <View style={styles.box}>
                    <Text style={styles.title}>Nissan</Text>
                    <View style={styles.boxImage}>
                    <Image
                        source={{
                        uri: "https://i.pinimg.com/736x/a1/84/b0/a184b0fd49ec766f7dba8fe760760a81.jpg",
                        }}
                        style={styles.imageBrand}
                    />
                    </View>
                    <View style={styles.boxBrand}>
                    <Text style={styles.brandTitle}>History</Text>
                    <Text style={styles.paragraph}>
                        Nissan is a Japanese automotive manufacturing company, founded
                        in 1886 as Nisshin. The company has been producing luxury
                        vehicles since its inception, with some of the most iconic
                        models being the Nissan 350Z, the Nissan GT-R, and the Nissan
                        GT-R (Dura-Ace). Nissan has also made significant contributions
                        to the world of sports car racing, with the company
                        participating in the 2011 D1 Grand Prix.
                    </Text>
                    </View>
                </View>

                <View style={styles.box}>
                    <Text style={styles.titleBrand}>Toyota</Text>
                    <View style={styles.boxImage}>
                    <Image
                        source={{
                        uri: "https://i.pinimg.com/736x/7e/52/65/7e5265aba65f20d6ede4d5536b2509b5.jpg",
                        }}
                        style={styles.imageBrand}
                    />
                    </View>
                    <View style={styles.boxBrand}>
                    <Text style={styles.brandTitle}>History</Text>
                    <Text style={styles.paragraph}>
                        Nissan is a Japanese automotive manufacturing company, founded
                        in 1886 as Nisshin. The company has been producing luxury
                        vehicles since its inception, with some of the most iconic
                        models being the Nissan 350Z, the Nissan GT-R, and the Nissan
                        GT-R (Dura-Ace). Nissan has also made significant contributions
                        to the world of sports car racing, with the company
                        participating in the 2011 D1 Grand Prix.
                    </Text>
                    </View>
                </View>

                <View style={styles.box}>
                    <Text style={styles.titleBrand}>Mitsubishi</Text>
                    <View style={styles.boxImage}>
                    <Image
                        source={{
                        uri: "https://i.pinimg.com/736x/d0/7c/f8/d07cf819bbd62d7b9d339ebfeecbe7fe.jpg",
                        }}
                        style={styles.imageBrand}
                    />
                    </View>
                    <View style={styles.boxBrand}>
                    <Text style={styles.brandTitle}>History</Text>
                    <Text style={styles.paragraph}>
                        Nissan is a Japanese automotive manufacturing company, founded
                        in 1886 as Nisshin. The company has been producing luxury
                        vehicles since its inception, with some of the most iconic
                        models being the Nissan 350Z, the Nissan GT-R, and the Nissan
                        GT-R (Dura-Ace). Nissan has also made significant contributions
                        to the world of sports car racing, with the company
                        participating in the 2011 D1 Grand Prix.
                    </Text>
                    </View>
                </View>

                <View style={styles.box}>
                    <Text style={styles.titleBrand}>Honda</Text>
                    <View style={styles.boxImage}>
                    <Image
                        source={{
                        uri: "https://i.pinimg.com/736x/ca/2e/0f/ca2e0f554f671d709f2830d69f325036.jpg",
                        }}
                        style={styles.imageBrand}
                    />
                    </View>
                    <View style={styles.boxBrand}>
                    <Text style={styles.brandTitle}>History</Text>
                    <Text style={styles.paragraph}>
                        Nissan is a Japanese automotive manufacturing company, founded
                        in 1886 as Nisshin. The company has been producing luxury
                        vehicles since its inception, with some of the most iconic
                        models being the Nissan 350Z, the Nissan GT-R, and the Nissan
                        GT-R (Dura-Ace). Nissan has also made significant contributions
                        to the world of sports car racing, with the company
                        participating in the 2011 D1 Grand Prix.
                    </Text>
                    </View>
                </View>

                <View style={styles.box}>
                    <Text style={styles.titleBrand}>Mardza</Text>
                    <View style={styles.boxImage}>
                    <Image
                        source={{
                        uri: "https://i.pinimg.com/736x/29/28/2e/29282e31de93bfff420f2b7dfaf433b3.jpg",
                        }}
                        style={styles.imageBrand}
                    />
                    </View>
                    <View style={styles.boxBrand}>
                    <Text style={styles.brandTitle}>History</Text>
                    <Text style={styles.paragraph}>
                        Nissan is a Japanese automotive manufacturing company, founded
                        in 1886 as Nisshin. The company has been producing luxury
                        vehicles since its inception, with some of the most iconic
                        models being the Nissan 350Z, the Nissan GT-R, and the Nissan
                        GT-R (Dura-Ace). Nissan has also made significant contributions
                        to the world of sports car racing, with the company
                        participating in the 2011 D1 Grand Prix.
                    </Text>
                    </View>
                </View>                
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    box: {
        width: "100%",
        padding: 24,
        backgroundColor: "#000",
        borderRadius: 12,
        textAlign: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 2,
        marginBottom: 90,
    },

    
  //Ajustes nos titulos, subtitulos e paragrafos
  title: {
    color: "#ff2626",
    fontSize: 32,
    marginBottom: 20,
    fontWeight: "600",
  },

  boldTitle: {
    color: "#ff2626",
    fontSize: 28,
    marginBottom: 12,
    marginInlineStart: 18,
    fontWeight: "600",
  },

  titleBrand: {
    color: "#ff2626",
    fontSize: 28,
    marginBottom: 12,
    fontWeight: "600",
  },

  brandTitle: {
    color: "#ff2626",
    fontSize: 28,
    marginBottom: 16,
    fontWeight: "600",
  },

  boldParagraph: {
    color: "#ffffff",
    fontSize: 20,
    marginBottom: 8,
    marginBlock: 12,
    fontWeight: "600",
  },

  subtitle: {
    color: "#ff2626",
    fontSize: 24,
    marginBottom: 32,
    fontWeight: "500",
  },
  paragraph: {
    color: "#ffffff",
    fontSize: 14,
    marginBottom: 10,
    fontWeight: "400",
  },
  text: {
    color: "#ffffff",
    fontSize: 14,
    textAlign: "justify",
  },

  //Ajustes nas caixas de conteúdo

  boxContent: {
    marginBottom: 58,
    backgroundColor: "#070707",
    justifyContent: "center",
    width: "100%",
    padding: 8,
    height: 630,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 2,
  },

  boxList: {
    width: "100%",
    height: 490,
    padding: 12,
    marginBlock: 28,
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: "#070707",
    justifyContent: "center",
  },

  boxBrand: {
    width: "100%",
    padding: 12,
    marginBlock: 28,
    marginBottom: 12,
    borderRadius: 12,
    backgroundColor: "#060606",
    justifyContent: "center",
  },

  
  //Ajustes na caixa de imagens

  boxImage: {
    marginBlock: 24,
    padding: 4,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#000",
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

  imageBrand: {
    justifyContent: "center",
    alignItems: "center",
    width: 426,
    height: 262,
    marginBottom: 16,
    borderRadius: 12,
  },
  logo: {
    width: 148,
    height: 428,
    marginBottom: 16,
  },

})

export default ContentBrand;