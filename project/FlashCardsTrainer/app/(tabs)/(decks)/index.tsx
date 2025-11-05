import { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { FlashContext } from "../../../src/contexts/FlashContext";

export default function DecksScreen() {
  const { decks } = useContext(FlashContext);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>🗂️ Decks</Text>

      <FlatList
        data={Object.values(decks)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              padding: 16,
              marginBottom: 8,
              backgroundColor: "#f0f0f0",
              borderRadius: 8,
            }}
          >
            <Text style={{ fontSize: 18 }}>{item.title}</Text>
            <Text style={{ color: "gray" }}>{item.cards.length} cards</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
