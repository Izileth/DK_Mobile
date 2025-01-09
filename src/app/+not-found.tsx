import {ActivityIndicator, StyleSheet, Text, View}  from 'react-native';
import React from 'react';
import {Link, Stack} from 'expo-router';


export default function NotFoundScreen() {
    return (
        <>
        <Stack.Screen options={{ title: "Not Found"}} />
        <View style={styles.container}>
            <ActivityIndicator animating={true} color={'#ff2626'} size={'large'}/>
            <Text style={styles.text}>Loading...</Text>
            <Link href="/">
                <Text style={{color: '#fff', fontWeight: 'bold', marginBottom: 10 }}>Reload App</Text>
            </Link>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 0, // Remove possíveis espaçamentos
    },
    text: {
        color: '#fff',
        fontSize: 24,
        marginBottom: 20,
    },  
})