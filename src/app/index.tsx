
import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from '../app/components/Loading/SplashLoad';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const initialize = async () => {
      try {
        // Aguarda splash screen
        await new Promise(resolve => setTimeout(resolve, 7000));
        
        const token = await AsyncStorage.getItem("userToken");
        router.replace(token ? '/(tabs)' : '/(auth)/(loguin)');
      } catch (error) {
        console.error("Erro de autenticação:", error);
        router.replace('/(auth)/login');
      }
    };

    initialize();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#000000' }}>
      <SplashScreen />
    </View>
  );
}