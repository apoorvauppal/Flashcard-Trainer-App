import React, {useState, useContext} from 'react'
import { FlashContext } from '../../src/contexts/FlashContext';
import { useRouter } from 'expo-router';
import { useLocalSearchParams } from 'expo-router/build/hooks';
import { View, StyleSheet } from 'react-native';


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
        <View style={styles.container}>
            <Text></Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16,
        justifyContent:"center",
        backgroundColor: "#fff",
    },
    label:{
        fontSize:18,
        marginBottom: 8,
    },
    input:{
        borderWidth:1,
        borderColor:"#ccc",
        borderRadius:8,
        padding:12,
        marginBottom:16,
    },
});