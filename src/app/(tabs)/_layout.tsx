import { Tabs } from 'expo-router';
import { Ionicons} from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView, StyleSheet } from 'react-native';

const Tab = createMaterialTopTabNavigator();

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#ff2323',
        tabBarInactiveTintColor: '#6c757d',
        tabBarLabelStyle: { fontSize: 16, fontWeight: '600' },
        tabBarStyle: { 
          backgroundColor: '#000000', 
          borderTopWidth: 0, // Remove a linha
          elevation: 0,      // Remove a sombra (Android)
          shadowOpacity: 0,  // Remove a sombra (iOS)
          height: 65,
          paddingTop: 14, // Ajusta o topo do tab bar
          position: 'absolute', // Positiona o tab bar abaixo do header
        },
        tabBarIconStyle: { color: '#ff2323' },
        
        //Ajustes no Header do Aplicativo
        headerStyle: { backgroundColor: '#000000' },
        headerTitleStyle: { color: '#ff2323' },
        headerTransparent: true, // Para transparência
        headerShown: true, // Controle visibilidade
        headerTitleAlign: 'center',
        headerTitle: () => null, // Remove header title for screens without titles
    }}>
      <Tabs.Screen name="default" options={{
        headerTitle: 'Defalult',
        tabBarIcon: ({focused, color }) => (
        <Ionicons name={focused? 'build': 'build-outline'} size={30} color={color} />
      ),
      }} />
      <Tabs.Screen name="index" options={{ 
        headerTitle: 'Drif King World',
        tabBarIcon: ({focused, color }) => (
          <Ionicons name={focused ? 'home-sharp': 'home-outline'} size={30} color={color} />
        ),
        }} />
      <Tabs.Screen name="about" options={{
         headerTitle: 'Historys',
         tabBarIcon: ({focused, color }) => (
            <Ionicons name={focused ? 'information-circle': 'information-circle-outline'} size={30} color={color} />
          ),
         }} />
      <Tabs.Screen name="profile" options={{
         headerTitle: 'Profiles',
         tabBarIcon: ({focused, color }) => (
            <Ionicons name={focused ?  'person': 'person-outline'} size={30} color={color} />
          ),
         }} />
      <Tabs.Screen name="content" options={{
         headerTitle: 'Content',
         tabBarIcon: ({focused, color }) => (
            <Ionicons name={focused ?  'open': 'open-outline'} size={30} color={color} />
          ),
         }} />     
      <Tabs.Screen name="not-found" options={{ headerTitle: 'Profile', headerShown: false }} />
    </Tabs>
  );
};

export default TabsLayout;
