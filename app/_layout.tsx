import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="beverages" options={{ headerShown: false }} />
      <Stack.Screen name="burger" options={{ headerShown: false }} />
      <Stack.Screen name="pizza" options={{ headerShown: false }} />
      <Stack.Screen name="snack" options={{ headerShown: false }} />
      <Stack.Screen name="start" options={{ headerShown: false }} />
      <Stack.Screen name="singUp" options={{ headerShown: false }} />
    </Stack>
  );
}
