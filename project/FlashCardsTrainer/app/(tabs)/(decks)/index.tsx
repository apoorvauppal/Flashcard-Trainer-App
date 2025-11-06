import { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity, Button } from "react-native";
import { FlashContext } from "../../../src/contexts/FlashContext";
import { useRouter } from "expo-router";

export default function DecksScreen() {
  const { decks, createDeck, getFavorites } = useContext(FlashContext);
  const router = useRouter();

  const favorites = getFavorites();
  const deckList = Object.values(decks);

  return (
    <View style={{ flex: 1, padding: 16 }}>
        <Button
        title="Create Deck"
        onPress={() => router.push("/(modals)/create-deck")}
        />

        {favorites.length > 0 && (
          <>
            <Text style = {{fontSize:20, marginTop}}>

            </Text>
          </>
        )}
      <Text style={{ fontSize: 24, marginBottom: 16 }}> Decks</Text>

      <FlatList
        data={Object.values(decks)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
          key={item.id}
            style={{
              padding: 16,
              marginBottom: 8,
              backgroundColor: "#f0f0f0",
              borderRadius: 8,
            }}
            onPress={() => router.push(`/(tabs)/(decks)/deck/${item.id}`)}
          >
            <Text style={{ fontSize: 18 }}>{item.title}</Text>
            <Text style={{ color: "gray" }}>{item.cards.length} cards</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
