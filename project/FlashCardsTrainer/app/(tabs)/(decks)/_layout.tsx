import { Stack } from "expo-router";

export default function DecksLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Decks", // 👈 this replaces "(decks)/index" in the header
        }}
      />
      <Stack.Screen
        name="deck/[id]"
        options={{
          title: "Deck Details",
        }}
      />
    </Stack>
  );
}
