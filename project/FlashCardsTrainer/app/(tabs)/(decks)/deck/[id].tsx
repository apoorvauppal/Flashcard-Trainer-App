import { useRouter, useSearchParams } from 'expo-router/build/hooks'
import React, { useContext } from 'react'
import { FlashContext } from '../../../../src/contexts/FlashContext';
import {Text, View, Button} from 'react-native'


export default function DeckDetailScreen(){
    const{deckId} = useSearchParams<{deckId: string}>();
    const{decks} = useContext(FlashContext);
    const router = useRouter();
    const deck = deckId ? decks[deckId] : undefined;

    if(!deck) return <Text>Deck not Found</Text>

    return(
        <View style={{flex:1, padding:16}}>
            <Button
                title="Add Card"
                onPress={() => router.push(`/(modals)/create-card?deckId=$`)}
            >

            </Button>
        </View>
    )
}