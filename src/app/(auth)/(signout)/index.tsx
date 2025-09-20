import React, { useEffect } from "react";
import { View, ActivityIndicator, Alert } from "react-native";
import { useRouter } from "expo-router";
import { supabase } from "../../lib/supabase";
import { useAuth } from "../../../context/authContext";

const Logout = () => {
  const router = useRouter();
  const { setAuth } = useAuth();

  useEffect(() => {
    const handleSignOut = async () => {
      const { error } = await supabase.auth.signOut();

      if (error) {
        Alert.alert("Erro ao sair", error.message);
      }
      
      // Limpa o estado de autenticação e redireciona
      setAuth(null);
      router.replace("/(auth)/(loguin)");
    };

    handleSignOut();
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-black">
      <ActivityIndicator size="large" color="#ffffff" />
    </View>
  );
};

export default Logout;
