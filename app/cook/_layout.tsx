import { Stack } from "expo-router";

export default function CookLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true, // 👈 确保显示导航栏
      }}
    >
      <Stack.Screen name="index" options={{ title: "做饭端" }} />
      <Stack.Screen name="orders" options={{ title: "订单管理" }} />
      <Stack.Screen name="dishes" options={{ title: "菜品管理" }} />
    </Stack>
  );
}
