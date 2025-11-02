import { useRouter, useSearchParams } from "expo-router/build/hooks";
import React from "react";
import {StyleSheet, View, Text, FlatList} from "react-native";
import { useFlash } from "../../../../src/contexts/FlashContext";
import CardRow from "../../../../src/components/CardRow";

export default function DeckDetail(){
    const{id} = useSearchParams();
    const router = useRouter();
    const {getDeckById, toggleFavorite} = useFlash();

    const deck = getDeckById(String(id));
    if(!deck) {
        return(
            <View style = {styles.empty}>
                <Text>Deck not found.</Text>
            </View>
        );
    }

    return (
    <View style={styles.container}>
      <Text style={styles.title}>{deck.title}</Text>
      <Text style={styles.count}>{deck.cards.length} cards</Text>

      {deck.cards.length === 0 ? (
        <View style={styles.empty}>
          <Text>This deck has no cards. Add one with +</Text>
        </View>
      ) : (
        <FlatList
          data={deck.cards}
          keyExtractor={(c) => c.id}
          renderItem={({ item }) => (
            <CardRow
              card={item}
              onToggleFavorite={() => toggleFavorite(deck.id, item.id)}
              showDeckTitle={false}
            />
          )}
        />
      )}

      <FloatingButton
        onPress={() => {
          // pass deckId to create-card modal
          router.push({ pathname: "/create-card", params: { deckId: deck.id } });
        }}
      />
    </View>
  );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:12,
    },
    title:{
        fontSize:22,
        fontWeight:"700",
    },
    count:{
        marginBottom:12,
        color:"#666",
    },
    empty:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 24,
    }
});