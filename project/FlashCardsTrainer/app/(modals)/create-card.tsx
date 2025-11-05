import React, {useState, useContext} from 'react'
import { FlashContext } from '../../src/contexts/FlashContext';


export default function CreateCardModal(){
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const {addCardToDeck} = useContext(FlashContext);
}