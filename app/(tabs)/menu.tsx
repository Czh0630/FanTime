import { FlatList, StyleSheet, Text, View } from "react-native";
import MenuItemCard from "../../components/MenuItemCard";
import { useCart } from "../../context/CartContext";

const menuItems = [
  { id: "1", name: "番茄炒蛋" },
  { id: "2", name: "宫保鸡丁" },
  { id: "3", name: "鱼香肉丝" },
];

export default function MenuScreen() {
  const { addToCart, removeFromCart, cart } = useCart();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>吃啥呢 · FanTime</Text>
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
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
});
