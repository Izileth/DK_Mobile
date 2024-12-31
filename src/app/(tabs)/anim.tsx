import React, {useEffect, useRef} from 'react'
import {StyleSheet, Animated, View, Text, Image} from 'react-native'
import { LinearGradient } from "expo-linear-gradient";


const TopStyle = () => {

   // Efeitos e Animações
    
      const fadeAnim = useRef(new Animated.Value(0)).current; // Inicializa com opacidade 0
    
      useEffect(() => {
        Animated.timing(fadeAnim, {
          toValue: 1, // Opacidade final
          duration: 2000, // Duração da animação
          useNativeDriver: true,
        }).start();
      }, [fadeAnim]);
    
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#000000', '#ff2626']}
                start={{ x: 0.4, y: 0.6 }}
                end={{ x: 2.5, y: 2.6 }}
            >
                <Animated.View style={[{opacity: fadeAnim}]}>
                    <Image source={{uri:  'https://i.pinimg.com/736x/c2/d5/99/c2d5992561607d3e9635cec20098a454.jpg' }} style={styles.image} />
                    <Text style={styles.title}>Section <Text style={styles.titleColors}>Number</Text></Text>
                </Animated.View>
            </LinearGradient>
        </View>
    )
}

export default TopStyle

const styles = StyleSheet.create({
    container: {
        flex: 1/3,
        backgroundColor: '#f5f5f5',
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    titleColors: {
        color: '#fff',
    },
    
    image: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
        marginBottom: 10,
        borderRadius: 10,
    },

});
