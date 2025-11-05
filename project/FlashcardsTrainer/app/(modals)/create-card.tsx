// app/(modals)/create-card.tsx
import React, { useContext, useState } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { FlashContext } from "../../src/contexts/FlashContext";

export default function CreateCardModal() {
  const { deckId } = useLocalSearchParams();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const { addCardToDeck } = useContext(FlashContext);
  const router = useRouter();

  const submit = () => {
    if (!question.trim() || !answer.trim()) return;
    addCardToDeck(deckId as string, { question: question.trim(), answer: answer.trim() });
    router.back();
  };

  return (
    <SafeAreaView style={{ flex:1, padding: 16 }}>
      <Text style={{ fontSize: 20 }}>New Card</Text>
      <TextInput placeholder="Question" value={question} onChangeText={setQuestion} style={{ borderWidth:1, padding:8, marginTop:8, borderRadius:6 }} />
      <TextInput placeholder="Answer" value={answer} onChangeText={setAnswer} style={{ borderWidth:1, padding:8, marginTop:8, borderRadius:6 }} />
      <TouchableOpacity onPress={submit} style={{ marginTop:12, backgroundColor:"#007AFF", padding:12, borderRadius:8 }}>
        <Text style={{ color:"white" }}>Add Card</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
