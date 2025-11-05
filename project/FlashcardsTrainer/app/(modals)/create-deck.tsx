// app/(modals)/create-deck.tsx
import React, { useContext, useState } from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { FlashContext } from "../../src/contexts/FlashContext";

export default function CreateDeckModal() {
  const [title, setTitle] = useState("");
  const { createDeck } = useContext(FlashContext);
  const router = useRouter();

  const onSubmit = () => {
    if (!title.trim()) return;
    createDeck(title.trim());
    router.back();
  };

  return (
    <SafeAreaView style={{ flex:1, padding: 16 }}>
      <Text style={{ fontSize: 20, marginBottom: 8 }}>New Deck</Text>
      <TextInput value={title} onChangeText={setTitle} placeholder="Deck title" style={{ borderWidth:1, padding:8, borderRadius:6 }} />
      <TouchableOpacity onPress={onSubmit} style={{ marginTop:12, backgroundColor:"#007AFF", padding:12, borderRadius:8 }}>
        <Text style={{ color:"white" }}>Create</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
