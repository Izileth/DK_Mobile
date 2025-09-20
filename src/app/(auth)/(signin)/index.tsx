import React, { useState } from "react";
import { Alert, View, Text } from "react-native";
import { Link, useRouter } from "expo-router";
import { supabase } from "../../lib/supabase";

import AuthHeader from "../../components/auth/AuthHeader";
import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/AuthButton";

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignIn() {
    if (!email || !password) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);
    if (error) {
      Alert.alert("Falha ao logar", error.message);
    } else {
      router.replace("/(tabs)");
    }
  }

  return (
    <View className="flex-1 items-center justify-center bg-black p-4">
      <AuthHeader subtitle="Complete o login para explorar o vasto mundo automotivo!" />

      {/* Form */}
      <View className="w-full items-center p-6 bg-gray-100 rounded-2xl">
        <AuthInput
          label="User"
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
          title="Login!"
          loading={loading}
          onPress={handleSignIn}
        />

        <Link href="(auth)/(signup)/createUser" className="mt-4">
          <Text className="text-black text-base underline">
            Ainda não possui uma conta?
          </Text>
        </Link>
      </View>
    </View>
  );
};

export default Login;