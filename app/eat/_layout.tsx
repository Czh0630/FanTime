import { Stack } from "expo-router";
import { CartProvider } from "../../context/CartContext";

export default function EatLayout() {
  return (
    <CartProvider>
      <Stack screenOptions={{ headerShown: true }}>
        <Stack.Screen name="menu" options={{ title: "菜单" }} />
        <Stack.Screen name="cart" options={{ title: "购物车" }} />
        <Stack.Screen name="checkout" options={{ title: "确认订单" }} />
      </Stack>
    </CartProvider>
  );
}
