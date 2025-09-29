import { Slot } from "expo-router";
import { CartProvider } from "../context/CartContext";

export default function RootLayout() {
  return (
    <CartProvider>
      <Slot /> 
    </CartProvider>
  );
}
