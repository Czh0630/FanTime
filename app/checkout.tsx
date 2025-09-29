import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useCart } from "../context/CartContext";

export default function CheckoutScreen() {
  const { cart, clearCart } = useCart();

  const handleCheckout = () => {
    alert("订单提交成功！请耐心等待上菜 🍜");
    clearCart();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>结算</Text>
      <TextInput placeholder="请输入桌号" style={styles.input} />
      <TextInput placeholder="备注 (可选)" style={styles.input} />
      <Button title="确认下单" onPress={handleCheckout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 6, padding: 12, marginBottom: 12 },
});
