import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundCOlor
      }}
    >
      <Text style={{ fontSize: 24 }}>Flashcards Trainer 🧠</Text>
      <Text>Expo Router is working!</Text>
    </View>
  );
}
