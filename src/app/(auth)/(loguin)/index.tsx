import React from "react";
import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { supabase } from "../../lib/supabase";

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignIn() {
    setLoading(true);
    // Simula a verificação do login
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert("Falha ao logar", error.message);
      setLoading(false);
      return;
    }

    setLoading(false);
    router.replace('/(tabs)');
  }

  // Ocular de Desocultar password
  const [hidePass, setHidePass] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Drift King <Text style={styles.titleColors}>Mobile</Text>
        </Text>
        <Text style={styles.subtitle}>
          Complete to loguin for explore the more vast content of the westen
          automotive world{" "}
        </Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Usuário</Text>
        <View style={styles.space}>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Inisra o seu Email"
              style={styles.input}
              secureTextEntry={hidePass}
            />
            <TouchableOpacity onPress={() => { setHidePass(!hidePass);}} style={styles.icon }>
              { hidePass ?
              <Ionicons name="eye" size={24} color="black" style={{ marginLeft: 10 }} />
              :
              <Ionicons  name="eye-off"  size={24}  color="black"  style={{ marginLeft: 10 }}   />
              }
            </TouchableOpacity>
        </View>

        <Text style={styles.label}>Senha</Text>
        <View style={styles.space}>
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Insira a Senha"
              style={styles.input}
              secureTextEntry={hidePass}
            />
            <TouchableOpacity onPress={() => { setHidePass(!hidePass);}} style={styles.icon }>
              { hidePass ?
              <Ionicons name="eye" size={24} color="black" style={{ marginLeft: 10 }} />
              :
              <Ionicons  name="eye-off"  size={24}  color="black"  style={{ marginLeft: 10 }}   />
              }
            </TouchableOpacity>
        </View>

        <Pressable style={styles.button}>
          <Text onPress={handleSignIn} style={styles.buttonText}>
            {loading ? "Loading..." : "Loguin !"}
          </Text>
        </Pressable>

        <Link href="(auth)/(signup)/createUser">
          <Text style={styles.forgotPassword}>
            {" "}
            Ainda não possui uma conta?
          </Text>
        </Link>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flex: 1 / 4,
    width: "100%",
    padding: 12,
    margin: 20,
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

  formSpace: {
    marginBottom: 18,
    marginInline: 12,
    flexDirection: 'row',
    width: "80%",
  },
  space: {
    flexDirection: 'row',
    width: "85%",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 8,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    height: 25,
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
    height: 50,
    fontSize: 18,
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
});
