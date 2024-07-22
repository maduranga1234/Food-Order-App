import React from 'react';
import { Stack } from 'expo-router';
import { CartProvider } from './cartContext'; // Adjust the path as necessary

export default function RootLayout() {
  return (
    <CartProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="home" options={{ headerShown: false }} />
        <Stack.Screen name="beverages" options={{ headerShown: false }} />
        <Stack.Screen name="burger" options={{ headerShown: false }} />
        <Stack.Screen name="pizza" options={{ headerShown: false }} />
        <Stack.Screen name="snack" options={{ headerShown: false }} />
        <Stack.Screen name="start" options={{ headerShown: false }} />
        <Stack.Screen name="signUp" options={{ headerShown: false }} />
        <Stack.Screen name="details" options={{ headerShown: false }} />
        <Stack.Screen name="addTocart" options={{ headerShown: false }} />
        <Stack.Screen name="cartContext" options={{ headerShown: false }} />
      </Stack>
    </CartProvider>
  );
}
