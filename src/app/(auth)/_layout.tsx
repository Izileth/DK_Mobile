
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function AuthLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}>
      <StatusBar />
      <Stack 
        screenOptions={{
          headerShown: false,
          headerStyle: { backgroundColor: '#000000' },
          headerTitleStyle: { color: '#fff' },
          headerTitleAlign: 'center',
        }}
      />
    </SafeAreaView>
  );
}