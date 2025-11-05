import { useRouter, useSearchParams } from 'expo-router/build/hooks'
import React, { useContext } from 'react'
import { FlashContext } from '../../../../src/contexts/FlashContext';
import {Text, View, Button, FlatList} from 'react-native'


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
                onPress={() => router.push(`/(modals)/create-card?deckId=$(deckId)`)}
            />
            <Text style={{fontSize:14, marginVertical:16}}>{deck.title}</Text>

            <FlatList 
            data={deck.cards}
            keyExtractor={(item) => item.id}
            renderItem = {({item}) => (
                <View style={{
                    padding:16, 
                    marginBottom:8,
                    backgroundColor: "#"
                }}>

                </View>
            )}
            >

            </FlatList>

        </View>
    )
}