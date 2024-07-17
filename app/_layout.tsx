import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="home" 
        options={{ headerShown: false }} 
      />
     <Stack.Screen 
        name="bevareges" 
        options={{ headerShown: false }} 
      />

        <Stack.Screen 
        name="burger" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="pizza" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="snack" 
        options={{ headerShown: false }} 
      />
    </Stack>
   

    
  );
}
