import {StyleSheet, Text, View}  from 'react-native';
import React from 'react';
import {Link, Stack} from 'expo-router';


export default function NotFoundScreen() {
    return (
        <>
        <Stack.Screen options={{ title: "Not Found"}} />
        <View style={styles.container}>
            <Text style={styles.text}>Page not found</Text>
            <Link href="/">
                <Text style={{color: '#fff', fontWeight: 'bold', marginBottom: 10 }}>Back to Home</Text>
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
    },
    text: {
        color: '#fff',
        fontSize: 24,
        marginBottom: 20,
    },  
})