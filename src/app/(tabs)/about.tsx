import {useEffect, useId, useState} from 'react'
import {ScrollView, StyleSheet, SafeAreaView, Text, View, Image} from 'react-native'
import {useRouter} from 'expo-router'

//Styles

import {ThemeProvider } from '../../context/themeContext';
import { useTheme } from '../../context/themeContext';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

// Components

import HeaderUser from '../components/Object/TabAboutUs/Component/contentHeaderUser'
import AboutUser from '../components/Object/TabAboutUs/Component/contentAboutUser'
import BannerUser from '../components/Object/TabAboutUs/Component/contentBannerUser'
import AcoultUser from '../components/Object/TabAboutUs/Component/contentAcoultUser'
import HomePageUser from '../components/Object/TabAboutUs/Component/contentHomePageUser'

const About = () => {
    const theme = useTheme();
    const styles = StyleSheet.create({

        container: {
            flex: 1,
            backgroundColor: theme.colors.dark.primary,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
          },
          main: {
            width: "100%",
            borderRadius: 12,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
            backgroundColor: theme.colors.dark.primary,
          },
    });

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#000", width: "100%" }}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.main}><HeaderUser/></View>
                    <View style={styles.main}><BannerUser/></View>
                    <View style={styles.main}><HomePageUser/></View>
                    <View style={styles.main}><AboutUser/></View>
                    <View style={styles.main}><AcoultUser/></View>
                </View>
            </ScrollView>    
        </SafeAreaView>
    )
}
export default About;