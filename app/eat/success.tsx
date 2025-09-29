import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function SuccessScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>✅</Text>
      <Text style={styles.title}>Order Placed!</Text>
      <Text style={styles.subtitle}>Your order has been sent to the kitchen 🍳</Text>

      <Pressable style={styles.button} onPress={() => router.push("/eat/menu")}>
        <Text style={styles.buttonText}>Back to Menu</Text>
      </Pressable>

      <Pressable style={styles.backButton} onPress={() => router.push("/")}>
        <Text style={styles.backText}>Return to Role Selection</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 16, backgroundColor: "#fff",},
  emoji: { fontSize: 64, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 16, color: "#666", marginBottom: 30, textAlign: "center" },
  button: {
    marginTop: 10,
    paddingVertical: 14,
    paddingHorizontal: 24,
    backgroundColor: "orange",
    borderRadius: 8,
  },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  backButton: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "#ccc",
    borderRadius: 8,
  },
  backText: { fontSize: 16, color: "#333" },
});
