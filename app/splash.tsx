import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const SplashScreen = ({ navigation}) => {
    useEffect(() => {

        //Time para sair da tela após 3 segundos

        const timer = setTimeout( () => {
            navigation.navigate('index'); // Tela Inicial
        }, 7000 );
        
        return () => clearTimeout(timer); // Limpa o timer quando a tela for fechada
    }, [navigation]); 
       
       
    return (
        <View style={styles.container}>
            <Image source={{uri:  'https://i.pinimg.com/736x/c2/d5/99/c2d5992561607d3e9635cec20098a454.jpg' }} style={styles.image} />
            <Text style={styles.text}>Welcome To Drifit For All</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    //Ajustes no container principal do aplicativo
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },

    //Ajustes nas imagens
    image: {
        width: 256,
        height: 356,
    },

    //Ajustes nos textos
    text: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
})

export default SplashScreen;