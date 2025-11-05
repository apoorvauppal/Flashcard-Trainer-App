// app/(tabs)/(decks)/index.tsx
import React, { useContext, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, SafeAreaView } from "react-native";
import { Link, useRouter } from "expo-router";
import { FlashContext } from "../../../src/contexts/FlashContext";

export default function DecksScreen() {
  const { decks } = useContext(FlashContext);
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: "700", marginBottom: 12 }}>Decks</Text>
      <FlatList
        data={Object.values(decks)}
        keyExtractor={(d: any) => d.id}
        renderItem={({ item }: any) => (
          <TouchableOpacity
            onPress={() => router.push(`(tabs)/(decks)/deck/${item.id}`)}
            style={{ padding: 12, borderWidth: 1, borderRadius: 8, marginBottom: 8 }}
          >
            <Text style={{ fontSize: 18 }}>{item.title}</Text>
            <Text style={{ color: "#666" }}>{item.cards.length} cards</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text>No decks yet. Press + to create one.</Text>}
      />

      {/* Floating + button: opens create-deck modal */}
      <Link href="/(modals)/create-deck" asChild>
        <TouchableOpacity
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
      </Link>
    </SafeAreaView>
  );
}
