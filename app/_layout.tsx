import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const Layout = () => {
  return (
    <>
      <StatusBar style="light" />
      <Stack initialRouteName="splash">
        {/* Splash Screen */}
        <Stack.Screen
          name="splash"
          options={{ headerShown: false }}
        />
        {/* Layout principal com abas */}
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
        />
        {/* Tela de erro padrão */}
        <Stack.Screen
          name="+not-found"
          options={{ headerShown: false }}
        />
      </Stack>
    </>
  );
};

export default Layout;
