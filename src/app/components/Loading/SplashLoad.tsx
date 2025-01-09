import { useRouter } from "expo-router";
import { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import LoadingBar from "../Loading/LoadingBar";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/(auth)/(login)");
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://i.pinimg.com/736x/c2/d5/99/c2d5992561607d3e9635cec20098a454.jpg",
        }}
        style={styles.image}
      />
      <Text style={styles.text}>
        Welcome To <Text style={styles.textColors}>Drifit for All</Text>
      </Text>
      <LoadingBar />
      <Text style={styles.loadText}>Loading Experience...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    paddingTop: 0,
  },
  image: {
    width: 256,
    height: 356,
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  textColors: {
    color: "#ff2626",
  },
  loadBar: {
    height: 2,
    width: 226,
    backgroundColor: "#ff2626",
    borderRadius: 10,
    marginBlock: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  loadText: {
    color: "#fff",
    fontSize: 16,
  },
});
