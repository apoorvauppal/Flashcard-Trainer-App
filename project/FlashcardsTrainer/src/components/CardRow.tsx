import React, {useState} from 'react';
import{StyleSheet, View} from "react-native";
import { Card } from "../contexts/FlashContext";

export default function CardRow({
    card, onToggleFavorite, deckTitle, showDeckTitle = false,
}: {
    card:Card;
    onToggleFavorite?: () => void;
    deckTitle?: string;
    showDeckTitle?: boolean;
}){
    const [showAnswer, setShowAnswer] = useState(false);
    return(
        <View style = {styles.row}>
            <View style = {{ flex: 1}}>
            {showDeckTitle && deckTitle ? <Text style={styles.deckTitle}>{deckTitle}</Text> : null}

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    row: { 
        flexDirection: "row",
        padding: 12,
        borderRadius: 10, 
        backgroundColor: "#fff",
        marginBottom: 10,
    },
    question:{
        fontWeight: '600',
        fontSize: 15,
    },
    answer:{
        marginTop: 8,
        color: "#333",
    },
    actions: {
        justifyContent: "space-between", 
        alignItems: "center",
    },
    actionBtn:{
        padding: 8,
    },
    deckTitle:{
        fontSize: 12,
        color: "#888",
    }
});