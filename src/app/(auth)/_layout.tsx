import { Stack } from 'expo-router';
import { SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Layout () {

  const [initialRoute, setInitialRoute] = useState<string>("/(auth)/(loguin)/index");

  useEffect(() => {
    const verificarAutenticacao = async () => {
      try {
        const tokenUsuario = await AsyncStorage.getItem("userToken");
        setInitialRoute(tokenUsuario ? "/(tabs)" : "/(auth)/(loguin)/index");
      } catch (erro) {
        console.error("Erro ao verificar autenticação:", erro);
        setInitialRoute("/(auth)/(loguin)/index");
      }
    };
    verificarAutenticacao();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Stack  screenOptions={{
        headerShown: false,
        title: "",
        headerTitle: "",
        headerLeft: () => null,
        headerRight: () => null,
        headerStyle: { backgroundColor: '#000000' },
        headerTitleStyle: { color: '#fff' },
        headerTitleAlign: 'center',
      }}>
        <Stack.Screen 
          name="/(auth)"
          options={{ headerShown: false }} 
        />
        
        <Stack.Screen 
          name="/(auth)/(signin)/index"
          options={{ headerShown: false }} 
        />
        
        <Stack.Screen 
          name="/(tabs)" 
          options={{ headerShown: true }} 
        />
        
        <Stack.Screen 
          name="+not-found" 
          options={{ headerShown: false }} 
        />
      </Stack>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});