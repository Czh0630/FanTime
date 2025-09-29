import { FlatList, Text, View, StyleSheet, Pressable } from "react-native";
import { useCart } from "../../context/CartContext";
import MenuItemCard from "../../components/MenuItemCard";
import { useRouter } from "expo-router";

const menuItems = [
  { id: "1", name: "番茄炒蛋" },
  { id: "2", name: "宫保鸡丁" },
  { id: "3", name: "鱼香肉丝" },
];

export default function MenuScreen() {
  const { cart, addToCart, removeFromCart } = useCart();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>菜单</Text>

      {/* 🔙 返回身份选择 */}
      <Pressable
        style={styles.backButton}
        onPress={() => router.push("/")}
      >
        <Text style={styles.backText}>返回身份选择</Text>
      </Pressable>

      <FlatList
        data={menuItems}
        renderItem={({ item }) => {
          const cartItem = cart.find((c) => c.id === item.id);
          return (
            <MenuItemCard
              item={item}
              quantity={cartItem?.quantity || 0}
              onAdd={() => addToCart(item)}
              onRemove={() => removeFromCart(item.id)}
            />
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  backButton: {
    marginBottom: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "#ccc",
    borderRadius: 8,
    alignSelf: "flex-start", // 👈 让按钮靠左
  },
  backText: { fontSize: 16, color: "#333" },
});
