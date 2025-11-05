// app/(tabs)/(decks)/deck/[id].tsx
import React, { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity, SafeAreaView } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useFlash } from "../../../../src/contexts/FlashContext";

export default function DeckDetail() {
  const { id } = useLocalSearchParams();
  const { decks } = useContext(useFlash);
  const deck = decks?.[id as string];
  const router = useRouter();

  if (!deck) return <SafeAreaView><Text>Deck not found</Text></SafeAreaView>;

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: "700" }}>{deck.title}</Text>
      <FlatList
        data={deck.cards}
        keyExtractor={(c:any) => c.id}
        renderItem={({ item }: any) => (
          <View style={{ padding: 12, borderWidth: 1, borderRadius: 8, marginTop: 8 }}>
            <Text style={{ fontWeight: "600" }}>{item.question}</Text>
            <Text style={{ color: "#555" }}>{item.answer}</Text>
          </View>
        )}
      />

      <TouchableOpacity
        onPress={() => router.push(`/(modals)/create-card?deckId=${deck.id}`)}
        style={{
          position: "absolute",
          right: 20,
          bottom: 30,
          width: 60,
          height: 60,
          borderRadius: 30,
          backgroundColor: "#007AFF",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 28 }}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
