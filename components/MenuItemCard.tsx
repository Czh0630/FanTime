import { Pressable, StyleSheet, Text, View } from "react-native";

type MenuItem = {
  id: string;
  name: string;
};

type Props = {
  item: MenuItem;
  quantity: number;
  onAdd: () => void;
  onRemove: () => void;
};

export default function MenuItemCard({ item, quantity, onAdd, onRemove }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>

      <View style={styles.actions}>
        {quantity > 0 && (
          <Pressable style={styles.circleButton} onPress={onRemove}>
            <Text style={styles.circleButtonText}>-</Text>
          </Pressable>
        )}
        {quantity > 0 && <Text style={styles.quantity}>{quantity}</Text>}
        <Pressable style={styles.circleButton} onPress={onAdd}>
          <Text style={styles.circleButtonText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    marginVertical: 8,
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  name: { fontSize: 18, fontWeight: "600", color: "#333" },
  actions: { flexDirection: "row", alignItems: "center", gap: 8 },
  circleButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#ff6b00",
    justifyContent: "center",
    alignItems: "center",
  },
  circleButtonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  quantity: { fontSize: 16, fontWeight: "500", marginHorizontal: 6 },
});
