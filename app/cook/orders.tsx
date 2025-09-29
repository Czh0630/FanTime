// app/cook/orders.tsx
import { db } from "../../firebaseConfig";
import { collection, onSnapshot, query, orderBy, deleteDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";

export default function OrdersScreen() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const q = query(collection(db, "orders"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      setOrders(data);
    });
    return () => unsubscribe();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, "orders", id));
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
            <Text style={styles.status}>{item.status?.toUpperCase()}</Text>
            <Text style={styles.itemsTitle}>Items:</Text>
            {Array.isArray(item.items) && item.items.length > 0 ? (
              item.items.map((it: any, idx: number) => (
                <Text key={idx} style={styles.item}>
                  • {it.name} × {it.quantity}
                </Text>
              ))
            ) : (
              <Text style={styles.empty}>No items in this order</Text>
            )}
            <Text style={styles.time}>
              🕒{" "}
              {item.createdAt?.toDate
                ? item.createdAt.toDate().toLocaleString()
                : "⏳"}
            </Text>

            <Pressable style={styles.deleteBtn} onPress={() => handleDelete(item.id)}>
              <Text style={styles.deleteText}>✅ 完成 / 删除</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 16 },
  card: { marginBottom: 14, padding: 14, borderWidth: 1, borderRadius: 8, backgroundColor: "#fafafa" },
  user: { fontSize: 16, fontWeight: "600" },
  status: { fontSize: 14, color: "orange", marginBottom: 8 },
  itemsTitle: { fontWeight: "bold" },
  item: { marginLeft: 10, fontSize: 15 },
  empty: { marginLeft: 10, fontSize: 14, color: "#999" },
  time: { marginTop: 6, fontSize: 13, color: "#555" },
  deleteBtn: { marginTop: 10, backgroundColor: "tomato", padding: 10, borderRadius: 6 },
  deleteText: { color: "#fff", fontWeight: "bold", textAlign: "center" },
});
