import React from "react";
import { Stack } from "expo-router";
import { FlashProvider } from "../src/contexts/FlashContext";


export default function RootLayout() {
 return (
   <FlashProvider>
     <Stack>
       <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
       <Stack.Screen
         name="(modals)"
         options={{ presentation: "modal", headerShown: false }}
       />
     </Stack>
   </FlashProvider>
 );
}
