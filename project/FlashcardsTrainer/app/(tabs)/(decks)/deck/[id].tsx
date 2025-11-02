import { useRouter, useSearchParams } from "expo-router/build/hooks";
import React from "react";
import {StyleSheet, View, Text} from "react-native";
import { useFlash } from "../../../../src/contexts/FlashContext";

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

    return(
        <View style={styles.containter}>
            <Text style = {styles.title}>{deck.title}</Text>
            <Text style = {styles.count}>{deck.cards.length}</Text>

        </View>
    )
}


const styles = StyleSheet.create({
    containter:{
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