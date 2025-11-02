import React from 'react';
import { Deck } from '../contexts/FlashContext';
import { TouchableOpacity } from 'react-native';

export default function DeckCard ({deck, onPress}: {deck: Deck; onPress:() => void}){
    return(
        <TouchableOpacity onPress = {onPress} style={StyleS}
    )
}