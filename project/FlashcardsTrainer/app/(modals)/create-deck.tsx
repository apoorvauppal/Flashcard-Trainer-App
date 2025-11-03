import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import { useRouter } from "expo-router";
import { useFlash } from "../../src/contexts/FlashContext";


export default function CreateDeckModal() {
 const [title, setTitle] = useState("");
 const router = useRouter();
 const { addDeck } = useFlash();


 const submit = () => {
   if (!title.trim()) return;
   addDeck(title.trim());
   router.back();
 };


 return (
   <View style={styles.container}>
     <Text style={styles.label}>Deck title</Text>
     <TextInput
       placeholder="e.g. French verbs"
       value={title}
       onChangeText={setTitle}
       style={styles.input}
     />
     <Button title="Create deck" onPress={submit} />
     <View style={{ height: 12 }} />
     <Button title="Cancel" onPress={() => router.back()} />
   </View>
 );
}


const styles = StyleSheet.create({
 container: { flex: 1, padding: 18, justifyContent: "center" },
 input: { borderWidth: 1, borderColor: "#ccc", padding: 10, borderRadius: 8, marginBottom: 12 },
 label: { marginBottom: 6, fontWeight: "600" },
});
