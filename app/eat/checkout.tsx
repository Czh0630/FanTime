import { View, Text, Pressable, StyleSheet } from "react-native";
import { useCart } from "../../context/CartContext";
import { db, auth } from "../../firebaseConfig"; // 👈 import auth
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useRouter } from "expo-router";

export default function CheckoutScreen() {
  const { cart, clearCart } = useCart();
  const router = useRouter();

  const handlePlaceOrder = async () => {
    try {
      if (cart.length === 0) {
        alert("🛒 Your cart is empty");
        return;
      }

      await addDoc(collection(db, "orders"), {
        user: auth.currentUser?.uid || "Guest", 
        status: "pending",
        items: cart.map((c) => ({
          id: c.id,
          name: c.name,
          quantity: c.quantity,
        })),
        createdAt: serverTimestamp(),
      });

      clearCart();
      alert("✅ Order placed!");
      router.push("/eat/success");
    } catch (error: any) {
      console.error("🔥 Firestore error:", error);
      alert("❌ Failed to place order: " + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧾 Checkout</Text>

      {cart.length === 0 ? (
        <Text>Your cart is empty</Text>
      ) : (
        cart.map((item) => (
          <Text key={item.id}>
            {item.name} × {item.quantity}
          </Text>
        ))
      )}

      <Pressable style={styles.button} onPress={handlePlaceOrder}>
        <Text style={styles.buttonText}>下单 🚀</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff",},
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 16 },
  button: {
    marginTop: 20,
    paddingVertical: 14,
    backgroundColor: "orange",
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
