import { useRouter, useSearchParams } from 'expo-router/build/hooks'
import React, { useContext } from 'react'
import { FlashContext } from '../../../../src/contexts/FlashContext';
import {Text, View} from 'react-native'


export default function DeckDetailScreen(){
    const{deckId} = useSearchParams<{deckId: string}>();
    const{decks} = useContext(FlashContext);
    const router = useRouter();
    const deck = deckId ? decks[deckId] : undefined;

    if(!deck) return <Text>Deck not Found</Text>

    return(
        <View></View>
    )
}