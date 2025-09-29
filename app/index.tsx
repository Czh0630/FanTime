import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function IndexScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>欢迎来到 FanTime 🎉</Text>
      <Text style={styles.subtitle}>请选择你的身份</Text>

      <Pressable
        style={[styles.button, { backgroundColor: "#ff6b00" }]}
        onPress={() => router.push("/eat")}
      >
        <Text style={styles.buttonText}>我是吃饭的 🍽</Text>
      </Pressable>

      <Pressable
        style={[styles.button, { backgroundColor: "#007aff" }]}
        onPress={() => router.push("/cook")}
      >
        <Text style={styles.buttonText}>我是做饭的 👩‍🍳</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 40,
  },
  button: {
    width: "80%",
    paddingVertical: 18,
    borderRadius: 12,
    marginVertical: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3, // Android shadow
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
});
