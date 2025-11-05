// app/(tabs)/_layout.tsx
import React from "react";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="(decks)/index" options={{ title: "Decks" }} />
      <Tabs.Screen name="(study)/index" options={{ title: "Study" }} />
    </Tabs>
  );
}
