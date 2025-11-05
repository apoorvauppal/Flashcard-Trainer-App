import React, {useState, useContext} from 'react'
import { FlashContext } from '../../src/contexts/FlashContext';
import { useRouter } from 'expo-router';


export default function CreateCardModal(){
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const {addCardToDeck} = useContext(FlashContext);
    const router = useRouter();
    const {deckId} = useSearchParams
}