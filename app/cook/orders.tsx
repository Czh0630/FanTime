// app/cook/orders.tsx
import { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import { db } from "../../firebaseConfig";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  deleteDoc,
  doc,
} from "firebase/firestore";

export default function OrdersScreen() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const q = query(collection(db, "orders"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((docSnap) => {
        const raw = docSnap.data();

        // ✅ normalize items
        let items: any[] = [];
        if (Array.isArray(raw.items)) {
          items = raw.items;
        } else if (raw.items && typeof raw.items === "object") {
          items = Object.values(raw.items);
        }

        return { id: docSnap.id, ...raw, items };
      });

      setOrders(data);
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, "orders", id));
      console.log(`🗑️ Deleted order ${id}`);
    } catch (error) {
      console.error("❌ Failed to delete order:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🍳 厨房订单</Text>

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.user}>👤 User: {item.user}</Text>
            <Text style={styles.status}>
              {item.status?.toUpperCase() || "UNKNOWN"}
            </Text>

            <Text style={styles.itemsTitle}>Items:</Text>
            {item.items.length > 0 ? (
              item.items.map((it: any, idx: number) => (
                <Text key={idx} style={styles.item}>
                  • {it.name} × {it.quantity}
                </Text>
              ))
            ) : (
              <Text style={styles.noItems}>No items in this order</Text>
            )}

            <Pressable
              style={styles.deleteButton}
              onPress={() => handleDelete(item.id)}
            >
              <Text style={styles.deleteText}>✅ Mark as Completed</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f9f9f9" },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 16 },
  card: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  user: { fontSize: 16, fontWeight: "600" },
  status: { color: "orange", fontWeight: "bold", marginVertical: 4 },
  itemsTitle: { fontSize: 14, fontWeight: "600", marginTop: 6 },
  item: { marginLeft: 8, fontSize: 14 },
  noItems: { marginLeft: 8, fontSize: 14, fontStyle: "italic", color: "#666" },
  deleteButton: {
    marginTop: 10,
    backgroundColor: "green",
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: "center",
  },
  deleteText: { color: "#fff", fontWeight: "bold" },
});
