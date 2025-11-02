import React from "react";
import {StyleSheet} from "react-native";
import { useFlash } from "../../../src/contexts/FlashContext";

export default function StudyScreen(){
    const{favoriteCards} = useFlash();

    return (
    <View style={styles.container}>
      <Text style={styles.header}>Favorites</Text>

      {favoriteCards.length === 0 ? (
        <View style={styles.empty}>
          <Text>No favorite cards yet — mark cards as favorite to see them here.</Text>
        </View>
      ) : (
        <FlatList
          data={favoriteCards}
          keyExtractor={(c) => `${c.card.id}-${c.deckId}`}
          renderItem={({ item }) => (
            <CardRow card={item.card} deckTitle={item.deckTitle} showDeckTitle />
          )}
        />
      )}
    </View>
  );
}

}


const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:12,
    },
    header:{
        fontSize:20,
        fontWeight:"700",
        marginBottom:8,
    },
    empty:{
        flex:1,
        alignItems: "center",
        justifyContent:"center",
        marginTop: 24,
    }
})