import { useContext } from "react";
import { View, Text, FlatList, Button } from "react-native";
import { FlashContext } from "../../../../src/contexts/FlashContext";
import { useRouter, useLocalSearchParams } from "expo-router";

export default function DeckDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>(); // <-- get [id] param
  const { decks, toggleFavorite } = useContext(FlashContext);
  const router = useRouter();

  const deck = id ? decks[id] : undefined;

  if (!deck) return <Text>Deck not found</Text>;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Button
        title="➕ Add Card"
        onPress={() => router.push(`/(modals)/create-card?deckId=${deck.id}`)}
      />

      <Text style={{ fontSize: 24, marginVertical: 16 }}>{deck.title}</Text>

      <FlatList
        data={deck.cards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 16,
              marginBottom: 8,
              backgroundColor: "#f0f0f0",
              borderRadius: 8,
              flexDirection:"row",
              justifyContent:"space-between",
              alignItems:"center",
            }}
          >
            <View>
                <Text style={{ fontSize: 16 }}>{item.question}</Text>
                <Text style={{ color: "gray" }}>{item.answer}</Text>
          </View>
          <Text style={{fontSize:20}}
          onPress={() => toggleFavorite(deck.id, item.id)}
          >
            {item.favorite ? "❤️" : "🤍"}
          </Text>
          <View>
        )}
      />
    </View>
  );
}
