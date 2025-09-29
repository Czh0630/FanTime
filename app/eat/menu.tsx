// app/eat/menu.tsx
import { FlatList, Text, View, StyleSheet, Pressable } from "react-native";
import { useCart } from "../../context/CartContext";
import { useRouter } from "expo-router";

const menuItems = [
    { id: "1", name: "番茄炒蛋" },
    { id: "2", name: "宫保鸡丁" },
    { id: "3", name: "鱼香肉丝" },
    { id: "4", name: "麻婆豆腐" },
    { id: "5", name: "青椒肉丝" },
        
];

export default function MenuScreen() {
  const { cart, addToCart, removeFromCart } = useCart();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>菜单</Text>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const cartItem = cart.find((c) => c.id === item.id);
          const quantity = cartItem?.quantity || 0;
          return (
            <View style={styles.card}>
              <Text style={styles.item}>{item.name}</Text>
              <View style={styles.controls}>
                {quantity > 0 && (
                  <Pressable
                    style={styles.button}
                    onPress={() => removeFromCart(item.id)}
                  >
                    <Text style={styles.buttonText}>-</Text>
                  </Pressable>
                )}
                {quantity > 0 && <Text style={styles.quantity}>{quantity}</Text>}
                <Pressable
                style={styles.button}
                onPress={() => addToCart({ ...item, quantity: 1 })}
                >
                <Text style={styles.buttonText}>+</Text>
                </Pressable>
              </View>
            </View>
          );
        }}
      />

      {/* ✅ Checkout button */}
      {cart.length > 0 && (
        <Pressable
          style={styles.checkoutButton}
          onPress={() => router.push("/eat/checkout")}
        >
          <Text style={styles.checkoutText}>🧾 去结账 ({cart.length})</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16,  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: "#fafafa",
    elevation: 2,
  },
  item: { fontSize: 18 },
  controls: { flexDirection: "row", alignItems: "center" },
  button: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 4,
  },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  quantity: { fontSize: 16, fontWeight: "600" },

  checkoutButton: {
    marginTop: 20,
    paddingVertical: 16,
    backgroundColor: "orange",
    borderRadius: 8,
    alignItems: "center",
  },
  checkoutText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
