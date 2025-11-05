import React, {useState, useContext} from 'react'
import { FlashContext } from '../../src/contexts/FlashContext';
import { useRouter } from 'expo-router';
import { useLocalSearchParams } from 'expo-router/build/hooks';
import { View } from 'react-native';


export default function CreateCardModal(){
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const {addCardToDeck} = useContext(FlashContext);
    const router = useRouter();
    const {deckId} = useLocalSearchParams<{deckId: string}>();

    const handleCreate = () => {
        if(!question.trim() || !answer.trim() || !deckId) return;
        addCardToDeck(deckId, {question: question.trim(), answer: answer.trim()});
        router.back();
    };

    return(
        <View style={StyleSheet.con}>

        </View>
    )
}


const styles = StyleSheet.create({
    
})