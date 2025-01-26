import { useState } from "react";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  Alert,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Animated,
  TextInput,
  Pressable,
} from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { supabase } from "../../lib/supabase";


const createLoguin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); 
  const [isNameFocused, setIsNameFocused] = useState(false); 
  const [isEmailFocused, setIsEmailFocused] = useState(false); 
  const [isPasswordFocused, setIsPasswordFocused] = useState(false); 
  // Ocultar e desoclutar password 
  const [hidePassOut, setHidePassOut] = useState(true)
  const [hidePassIn, setHidePassIn] = useState(true)
  const [hidePassOn, setHidePassOn] = useState(true)


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
  
  async function handleReturnLogin() {
    router.replace('/(auth)/(loguin)');
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: "#000000" }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Pressable style={styles.backButton} onPress={handleReturnLogin}>
              <Ionicons name="arrow-back" size={24} color="#fff" />
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
              <View style={styles.inputContainer}>
                <Animated.Text
                  style={[
                    styles.label,
                    {
                      top: name || isNameFocused ? -10 : 14,
                      fontSize: name|| isNameFocused ? 12 : 14,
                      color: name || isNameFocused ? "#f50000" : "#000",
                    },
                  ]}
                >
                  Name
                </Animated.Text>
                <View style={styles.inputWrapper}>
                    <TextInput
                      value={name}
                      onChangeText={setName}
                      placeholder={isNameFocused ? "" : ""}
                      style={styles.input}
                      keyboardType="url"
                      onFocus={() => setIsNameFocused(true)}
                      onBlur={() => setIsNameFocused(!!name)}
                    />
                    <TouchableOpacity
                        onPress={() => setHidePassIn(!hidePassIn)}
                        style={styles.icon}
                      >
                        <Ionicons
                          name={hidePassIn ? "eye" : "eye-off"}
                          size={24}
                          color="black"
                          style={styles.iconStyle} // Ajuste o estilo conforme necessário
                        />
                    </TouchableOpacity>    
                </View>
              </View>       

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
                  Email
                </Animated.Text>
                <View style={styles.inputWrapper}>
                    <TextInput
                      value={email}
                      onChangeText={setEmail}
                      placeholder={isEmailFocused ? "" : ""}
                      style={styles.input}
                      keyboardType="email-address"
                      onFocus={() => setIsEmailFocused(true)}
                      onBlur={() => setIsEmailFocused(!!email)}
                    />
                    <TouchableOpacity
                        onPress={() => setHidePassOn(!hidePassOn)}
                        style={styles.icon}
                      >
                        <Ionicons
                          name={hidePassOn ? "eye" : "eye-off"}
                          size={24}
                          color="black"
                          style={styles.iconStyle} // Ajuste o estilo conforme necessário
                        />
                    </TouchableOpacity>  
                </View>
              </View>     

              <View style={styles.inputContainer}>
                <Animated.Text
                  style={[
                    styles.label,
                    {
                      top: password || isPasswordFocused ? -10 : 14,
                      fontSize: password || isPasswordFocused ? 12 : 14,
                      color: password || isPasswordFocused ? "#f50000" : "#000",
                    },
                  ]}
                >
                  Password
                </Animated.Text>   
                <View style={styles.inputWrapper}>
                  <TextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder={isPasswordFocused ? "" : ""}
                    style={styles.input}
                    keyboardType="email-address"
                    secureTextEntry={hidePassOut} 
                    onFocus={() => setIsPasswordFocused(true)}
                    onBlur={() => setIsPasswordFocused(!!password)}
                  />
                  <TouchableOpacity
                    onPress={() => setHidePassOut(!hidePassOut)}
                    style={styles.icon}
                  >
                    <Ionicons
                      name={hidePassOut ? "eye" : "eye-off"}
                      size={24}
                      color="black"
                      style={styles.iconStyle} 
                    />
                  </TouchableOpacity>
                </View>
              </View>
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

  space: {
    flexDirection: 'row',
    width: "85%",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 8,
    alignContent: 'center',
    height: 50,
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
  inputContainer: {
    width: '80%',
    position: 'relative',
    marginVertical: 24,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    position: 'absolute',
    left: 10,
    paddingHorizontal: 4,
    fontSize: 18,
    color: "#ccc",
    backgroundColor: "#f3f3f3",
    zIndex: 10,
  },
  iconStyle: {
    marginLeft: -40,
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
  
  backButton: {
    backgroundColor: "#ff2626",
    padding: 10,
    width: 50,
    borderRadius: 8,
    marginBottom: 12,
    color: "#ffffff",
  },
});
