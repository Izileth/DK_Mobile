import React, { useEffect } from "react";
import { AuthProvider, useAuth } from "../../../context/authContext";
import {
  Alert,
} from "react-native";
import { Link, router, useRouter } from "expo-router";
import { supabase } from "../../lib/supabase";


// Configuração da tela de veirficação de logui


export default function saveUser () {
  const {setAuth} = useAuth()
  
  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session ) => {

      if (session) {
        setAuth(session.user)
        router.replace('/(tabs)')
        Alert.alert("Login efetuado com sucesso!")
        return;
      }
      setAuth(null)
      Alert.alert("Você precisa estar logado para ver essa tela!")
      router.replace('/(auth)/(loguin)')
    })

  }, [])
}