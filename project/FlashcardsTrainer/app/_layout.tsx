// app/_layout.tsx
import React from "react";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* main UI */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* modals group will be defined in a separate route group, route files determine stack */}
      <Stack.Screen name="(modals)/create-deck" options={{ presentation: "modal", title: "Create Deck" }} />
      <Stack.Screen name="(modals)/create-card" options={{ presentation: "modal", title: "Create Card" }} />
    </Stack>
  );
}
