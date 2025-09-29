// app/index.tsx
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👋 欢迎使用 FanTime</Text>

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
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
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
