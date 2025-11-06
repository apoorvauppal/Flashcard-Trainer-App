import { useContext } from "react";
import { View, Text, FlatList, Button } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { FlashContext } from "../../../../../src/contexts/FlashContext";
import CardRow from "../../../../../src/components/CardRow";

export default function DeckDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { decks, toggleFavorite } = useContext(FlashContext);
  const router = useRouter();

  const deck = id ? decks[id] : undefined;

  if (!deck) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 18, color: "gray" }}>Deck not found</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      {/* ➕ Button to Add a New Card */}
      <Button
        title="➕ Add Card"
        onPress={() => router.push(`/(modals)/create-card?deckId=${deck.id}`)}
      />

      {/* Deck Title */}
      <Text style={{ fontSize: 24, marginVertical: 16, fontWeight: "600" }}>
        {deck.title}
      </Text>

      {/* Card List */}
      <FlatList
        data={deck.cards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardRow
            question={item.question}
            answer={item.answer}
            favorite={item.favorite ?? false}
            onToggleFavorite={() => toggleFavorite(deck.id, item.id)}
          />
        )}
        ListEmptyComponent={
          <Text style={{ textAlign: "center", color: "gray", marginTop: 20 }}>
            No cards yet. Add one to get started!
          </Text>
        }
      />
    </View>
  );
}
