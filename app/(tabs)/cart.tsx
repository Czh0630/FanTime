import { useRouter } from "expo-router";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { useCart } from "../../context/CartContext";

export default function CartScreen() {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  const router = useRouter();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>购物车</Text>
      {cart.length === 0 ? (
        <Text>还没有点菜哦~</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Text>{item.name} x {item.quantity}</Text>
                <Text>￥{item.price * item.quantity}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
          <Text style={styles.total}>总价: ￥{total}</Text>
          <Button title="去结算" onPress={() => router.push("/checkout")} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  card: { flexDirection: "row", justifyContent: "space-between", padding: 12, backgroundColor: "#eee", marginVertical: 6, borderRadius: 6 },
  total: { marginTop: 20, fontSize: 20, fontWeight: "bold" },
});
