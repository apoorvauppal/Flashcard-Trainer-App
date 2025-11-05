// app/_layout.tsx
import React from "react";
import { Stack } from "expo-router";
import { FlashProvider } from "../src/contexts/FlashContext";

export default function RootLayout() {
  return (
    <FlashProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(modals)/create-deck" options={{ presentation: "modal", title: "Create Deck" }} />
        <Stack.Screen name="(modals)/create-card" options={{ presentation: "modal", title: "Create Card" }} />
      </Stack>
    </FlashProvider>
  );
}
