import { FlatList, Text, View, StyleSheet } from "react-native";

const fakeOrders = [
  { id: "1001", items: ["番茄炒蛋", "鱼香肉丝"], status: "等待中" },
  { id: "1002", items: ["宫保鸡丁"], status: "已完成" },
];

export default function OrdersScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>订单管理</Text>
      <FlatList
        data={fakeOrders}
        renderItem={({ item }) => (
          <View style={styles.orderCard}>
            <Text>订单号: {item.id}</Text>
            <Text>菜品: {item.items.join(", ")}</Text>
            <Text>状态: {item.status}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  orderCard: { padding: 12, borderRadius: 8, backgroundColor: "#f5f5f5", marginBottom: 12 },
});
