import React, { useState } from "react";
import { Alert, View, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { supabase } from "../../lib/supabase";
import { SafeAreaView } from "react-native-safe-area-context";

import AuthHeader from "../../components/auth/AuthHeader";
import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/AuthButton";

const CreateUser = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignUp() {
    if (!name || !email || !password) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          name: name,
        },
      },
    });

    setLoading(false);
    if (error) {
      Alert.alert("Falha ao criar conta", error.message);
    } else {
      Alert.alert("Sucesso", "Conta criada! Por favor, faça o login.");
      router.replace("(auth)/(loguin)");
    }
  }

  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView contentContainerClassName="flex-grow items-center justify-center p-4">
        <AuthHeader
          subtitle="Crie sua conta para explorar o vasto mundo automotivo!"
          onBack={() => router.back()}
        />

        <View className="w-full items-center p-6 bg-gray-100 rounded-2xl">
          <AuthInput
            label="Name"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
          />

          <AuthInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <AuthInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            isPassword
          />

          <AuthButton
            title="Criar Conta"
            loading={loading}
            onPress={handleSignUp}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateUser;