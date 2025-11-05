import { useSearchParams } from 'expo-router/build/hooks'
import React, { useContext } from 'react'
import { FlashContext } from '../../../../src/contexts/FlashContext';


export default function DeckDetailScreen(){
    const{deckId} = useSearchParams<{deckId: string}>();
    const{decks} = useContext(FlashContext)
}