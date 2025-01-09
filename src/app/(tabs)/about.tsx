import {useEffect, useId, useState} from 'react'
import {ScrollView, StyleSheet, SafeAreaView, Text, View, Image} from 'react-native'
import {useRouter} from 'expo-router'

const About = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.titleHeader}>About DK App</Text>
                    <Text style={styles.titleHeader}>Descriptions Off</Text>
                </View>
                <View style={styles.container}>
                    <View style={styles.main}>
                        <Text style={styles.text}>About Description</Text>
                    </View>
                </View>
            </ScrollView>    
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    header: {
        flexDirection: 'row',
        backgroundColor: '#F8F8F8',
        padding: 20,
        marginBottom: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleHeader: {
        fontSize: 20,
        fontWeight: '100',
        marginBottom: 10,
    },
    container: {
        padding: 20,
        backgroundColor: '#F8F8F8',
    },
    main: {
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 10,
        textAlign: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 10,
        alignSelf: 'center',
    },
})

export default About