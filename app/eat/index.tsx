// app/eat/index.tsx
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function EatHome() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍽️ 点餐端</Text>

      <Pressable style={styles.button} onPress={() => router.push("/eat/menu")}>
        <Text style={styles.buttonText}>📖 查看菜单</Text>
      </Pressable>

      <Pressable style={styles.backButton} onPress={() => router.push("/")}>
        <Text style={styles.backText}>返回身份选择</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff", },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  button: {
    marginTop: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "orange",
    borderRadius: 8,
  },
  buttonText: { fontSize: 16, color: "#fff" },
  backButton: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "#ccc",
    borderRadius: 8,
  },
  backText: { fontSize: 16, color: "#333" },
});
