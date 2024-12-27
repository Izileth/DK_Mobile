import { Slot } from 'expo-router';
import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SplashScreen from './components/SplashLoad'
import Layout from './(auth)/_layout';

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  // Renderiza o Slot mesmo durante o loading
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      {!isReady ? <SplashScreen /> : <Layout/>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});