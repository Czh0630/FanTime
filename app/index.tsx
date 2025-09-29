// app/index.tsx
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
       <Image source={require("../assets/logo.png")} style={styles.logo} />

      <Pressable style={styles.button} onPress={() => router.push("/eat")}>
        <Text style={styles.buttonText}>🍽️ 点餐端</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => router.push("/cook")}>
        <Text style={styles.buttonText}>👩‍🍳 做饭端</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center",backgroundColor: "#fff"},
  logo: { width: 520, height: 520, resizeMode: "contain", marginBottom: 30 }, 
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 30 },
  button: {
    marginVertical: 10,
    paddingVertical: 14,
    paddingHorizontal: 24,
    backgroundColor: "orange",
    borderRadius: 8,
  },
  buttonText: { fontSize: 18, color: "#fff" },
});
