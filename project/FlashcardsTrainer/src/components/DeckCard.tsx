import React from 'react';
import { Deck } from '../contexts/FlashContext';
import { TouchableOpacity, StyleSheet } from 'react-native';

export default function DeckCard ({deck, onPress}: {deck: Deck; onPress:() => void}){
    return(
        <TouchableOpacity onPress = {onPress} style={StyleS}
    )
}



const styles = StyleSheet.create({
    card:{
        padding: 14, 
        borderRadius: 10, 
        backgroundColor: "#fff",
        marginBottom: 10, 
        shadowColor: "#000", 

    }
})