import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function CookHome() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👩‍🍳 做饭端</Text>

      <Pressable
        style={styles.backButton}
        onPress={() => router.push("/")}
      >
        <Text style={styles.backText}>返回身份选择</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  backButton: {
    marginTop: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "#ccc",
    borderRadius: 8,
  },
  backText: { fontSize: 16, color: "#333" },
});
