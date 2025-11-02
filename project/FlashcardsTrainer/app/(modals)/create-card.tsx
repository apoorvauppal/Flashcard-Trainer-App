// app/(modals)/create-card.tsx
import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, Alert } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useFlash } from "../../src/contexts/FlashContext";

export default function CreateCardModal() {
  const router = useRouter();
  const { deckId } = useLocalSearchParams();
  const { addCardToDeck, getDeckById } = useFlash();
  const deck = getDeckById(String(deckId));

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  if (!deck) {
    return (
      <View style={styles.container}>
        <Text>Deck not found.</Text>
        <Button title="Close" onPress={() => router.back()} />
      </View>
    );
  }

  const submit = () => {
    if (!question.trim() || !answer.trim()) {
      Alert.alert("Both question and answer are required");
      return;
    }
    addCardToDeck(deck.id, { question: question.trim(), answer: answer.trim() });
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add card to: {deck.title}</Text>

      <Text style={styles.label}>Question</Text>
      <TextInput
        value={question}
        onChangeText={setQuestion}
        placeholder="Enter question"
        style={styles.input}
      />

      <Text style={styles.label}>Answer</Text>
      <TextInput
        value={answer}
        onChangeText={setAnswer}
        placeholder="Enter answer"
        style={styles.input}
      />

      <Button title="Add Card" onPress={submit} />
      <View style={{ height: 12 }} />
      <Button title="Cancel" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 18, justifyContent: "center" },
  heading: { fontSize: 18, fontWeight: "700", marginBottom: 12 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, borderRadius: 8, marginBottom: 12 },
  label: { fontWeight: "600", marginBottom: 4 },
});
