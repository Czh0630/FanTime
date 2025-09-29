// app/eat/_layout.tsx
import { Stack } from "expo-router";

export default function EatLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "🍽️ 点餐端" }} />
      <Stack.Screen name="menu" options={{ title: "菜单" }} />
      <Stack.Screen name="checkout" options={{ title: "🧾 Checkout" }} />
      <Stack.Screen name="success" options={{ title: "✅ 下单成功" }} />
    </Stack>
  );
}
