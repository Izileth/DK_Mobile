import { useState } from "react";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  Alert,
  Button,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Animated,
  TextInput,
  Pressable,
  ImageBackground,
} from "react-native";
import { Link, useRouter, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { supabase } from "../../lib/supabase";


const createLoguin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleCreateLoguin() {
    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          name: name,
        },
      },
    });

    if (error) {
      Alert.alert("Falha ao logar", error.message);
      setLoading(false);
      return;
    }

    setLoading(false);
    router.replace('(auth)/(loguin)');
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: "#000000" }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Pressable style={styles.backButton}>
              <Link href='(auth)/(loguin)'>
              <Ionicons name="arrow-back" size={24} color="#fff" />
              </Link>
            </Pressable>
            <Text style={styles.title}>
              Drift King <Text style={styles.titleColors}>Mobile</Text>
            </Text>
            <Text style={styles.subtitle}>
              Create to loguin for explore the more vast content of the westen
              automotive world
            </Text>
          </View>
          <View style={styles.form}>
            <Text style={styles.label}>Nome Completo</Text>
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="Inisra o seu nome completo"
              style={styles.input}
              secureTextEntry
            />

            <Text style={styles.label}>Nome do Usuário</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Insira o seu Email"
              style={styles.input}
              secureTextEntry
            />

            <Text style={styles.label}> Nova Senha</Text>
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Inisira a sua Senha"
              style={styles.input}
              secureTextEntry={true}
            />

            <Pressable style={styles.button} onPress={handleCreateLoguin}>
              <Text style={styles.buttonText}>
                {loading ? "Loading..." : "Create acoult"}
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default createLoguin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flex: 1 / 2,
    width: "100%",
    padding: 12,
    margin: 20,
    marginTop: 100,
    backgroundColor: "transparent",
    borderRadius: 14,
    textAlign: "left",
  },

  form: {
    flex: 1 / 2,
    width: "98%",
    padding: 12,
    backgroundColor: "#f3f3f3",
    borderRadius: 14,
    alignItems: "center",
  },
  //Ajustes nos titulos e paragrafos

  title: {
    fontSize: 48,
    color: "#ff2626",
    fontWeight: "bold",
    marginBottom: 8,
    marginInline: 12,
  },
  titleColors: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  subtitle: {
    color: "#ffffff",
    fontSize: 24,
    marginBottom: 24,
    marginInline: 12,
  },

  //Ajustes no forumulário

  label: {
    color: "#000000",
    fontSize: 18,
    marginBottom: 18,
    marginInline: 12,
  },
  input: {
    color: "#000000",
    width: "85%",
    fontSize: 18,
    marginBottom: 8,
    marginInline: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 8,
  },
  placeholder: {
    color: "#ffffff",
    fontSize: 18,
    marginInline: 12,
  },
  button: {
    backgroundColor: "#ff2626",
    padding: 12,
    width: 150,
    borderRadius: 8,
    marginBlock: 28,
    marginInline: 12,
    color: "#ffffff",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "200",
    textAlign: "center",
  },
  forgotPassword: {
    color: "#000000",
    fontSize: 18,
    marginBlock: 24,
    marginInline: 12,
    textDecorationLine: "underline",
  },
  backButton: {
    backgroundColor: "#ff2626",
    padding: 10,
    width: 50,
    borderRadius: 8,
    marginBottom: 12,
    color: "#ffffff",
  },
});
