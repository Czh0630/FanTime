// app/cook/_layout.tsx
import { Stack } from "expo-router";

export default function CookLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "👩‍🍳 做饭端" }} />
      <Stack.Screen name="orders" options={{ title: "🍳 厨房订单" }} />
    </Stack>
  );
}
