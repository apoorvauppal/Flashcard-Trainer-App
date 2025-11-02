import React from 'react';
import { Deck } from '../contexts/FlashContext';
import { TouchableOpacity, StyleSheet } from 'react-native';

export default function DeckCard ({deck, onPress}: {deck: Deck; onPress:() => void}){
    return(
        <TouchableOpacity onPress = {onPress} style={styles.card}>
            <View>
                <Text style={styles.title}>{deck.title}</Text>
            </View>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    card:{
        padding: 14, 
        borderRadius: 10, 
        backgroundColor: "#fff",
        marginBottom: 10, 
        shadowColor: "#000", 
        shadowOpacity: 0.05, 
        elevation: 2,
    },
    title:{fontSize: 16, fontWeight: "700"}, 
    count: {marginTop: 6, color: "#666"},
});