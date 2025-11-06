import { useContext, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { FlashContext } from "../../../src/contexts/FlashContext";
import { useRouter } from "expo-router";

export default function DecksScreen() {
  const { decks } = useContext(FlashContext);
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDecks = Object.values(decks).filter()

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={Object.values(decks)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              padding: 16,
              backgroundColor: "#f0f0f0",
              borderRadius: 8,
              marginBottom: 8,
            }}
            onPress={() => router.push(`/(tabs)/(decks)/deck/${item.id}`)}
          >
            <Text style={{ fontSize: 18 }}>{item.title}</Text>
            <Text style={{ color: "gray" }}>{item.cards.length} cards</Text>
          </TouchableOpacity>
        )}
      />

      {/* Floating Action Button */}
      <TouchableOpacity
        onPress={() => router.push("/(modals)/create-deck")}
        style={{
          position: "absolute",
          bottom: 30,
          right: 30,
          backgroundColor: "#007AFF",
          width: 60,
          height: 60,
          borderRadius: 30,
          justifyContent: "center",
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 3,
          elevation: 5,
        }}
      >
        <Text style={{ color: "white", fontSize: 32, lineHeight: 32 }}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
