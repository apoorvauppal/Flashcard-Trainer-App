import { useSearchParams } from 'expo-router/build/hooks'
import React from 'react'


export default function DeckDetailScreen(){
    const{deckId} = useSearchParams<{deckId: string}>();
    
}