import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Animated,
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
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [hidePass, setHidePass] = useState(true);

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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Drift King <Text style={styles.titleColors}>Mobile</Text>
        </Text>
        <Text style={styles.subtitle}>
          Complete o login para explorar o vasto mundo automotivo!
        </Text>
      </View>
      <View style={styles.form}>

        {/* Email */}
        <View style={styles.inputContainer}>
          <Animated.Text
            style={[
              styles.label,
              {
                top: email || isEmailFocused ? -10 : 14,
                fontSize: email || isEmailFocused ? 12 : 14,
                color: email || isEmailFocused ? "#f50000" : "#000",
              },
            ]}
          >
            User
          </Animated.Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder={isEmailFocused ? "" : ""}
            style={styles.input}
            keyboardType="email-address"
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(!!email)}
          />
        </View>

        {/* Senha */}
        <View style={styles.inputContainer}>
          <Animated.Text
            style={[
              styles.label,
              {
                top: password || isPasswordFocused ? -10 : 15,
                fontSize: password || isPasswordFocused ? 12 : 16,
                color: password || isPasswordFocused ? "#f50000" : "#000",
              },
            ]}
          >
            Password
          </Animated.Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder={isPasswordFocused ? "" :""}
            style={styles.input}
            secureTextEntry={hidePass}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(!!password)}
          />
          <TouchableOpacity
            onPress={() => setHidePass(!hidePass)}
            style={styles.icon}
          >
            <Ionicons
              name={hidePass ? "eye" : "eye-off"}
              size={24}
              color="black"
              style={{ marginLeft: 10 }}
            />
          </TouchableOpacity>
        </View>

        <Pressable
          style={[styles.button, loading && { backgroundColor: "#ccc" }]}
          disabled={loading}
          onPress={handleSignIn}
        >
          <Text style={styles.buttonText}>
            {loading ? "Loading..." : "Login!"}
          </Text>
        </Pressable>

        <Link href="(auth)/(signup)/createUser">
          <Text style={styles.forgotPassword}>Ainda não possui uma conta?</Text>
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
    backgroundColor: "transparent",
    borderRadius: 14,
    textAlign: "left",
  },

  form: {
    flex: 1 / 2,
    width: "100%",
    padding: 12,
    backgroundColor: "#f3f3f3",
    borderRadius: 14,
    alignItems: "center",
  },

  formSpace: {
    marginBottom: 18,
    marginInline: 12,
    flexDirection: 'row',
    width: "100%",
  },
  space: {
    flexDirection: 'row',
    width: "95%",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 8,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    position: 'absolute',
    right: 10,
    top: 13,
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

  inputContainer: {
    width: '80%',
    position: 'relative',
    marginVertical: 24,
  },

  label: {
    position: 'absolute',
    left: 10,
    paddingHorizontal: 4,
    fontSize: 24,
    color: "#ccc",
    backgroundColor: "#f3f3f3",
    zIndex: 10,
  },
  input: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  placeholder: {
    width: '100%',
    color: "#ffffff",
    fontSize: 20,
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
