// app/(tabs)/(study)/index.tsx
import React, { useContext } from "react";
import { SafeAreaView, Text, FlatList, View } from "react-native";
import { FlashContext } from "../../../src/contexts/FlashContext";

export default function StudyScreen() {
  const { getFavorites } = useContext(FlashContext);
  const favorites = getFavorites();

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: "700", marginBottom: 12 }}>Study - Favorites</Text>
      <FlatList
        data={favorites}
        keyExtractor={(f: any) => f.id}
        renderItem={({ item }: any) => (
          <View style={{ padding: 12, borderWidth: 1, borderRadius: 8, marginBottom: 8 }}>
            <Text style={{ fontWeight: "600" }}>{item.question}</Text>
            <Text style={{ color: "#555" }}>{item.answer}</Text>
            <Text style={{ color: "#007AFF", marginTop: 6 }}>Deck: {item.deckTitle}</Text>
          </View>
        )}
        ListEmptyComponent={<Text>No favorite cards yet.</Text>}
      />
    </SafeAreaView>
  );
}
