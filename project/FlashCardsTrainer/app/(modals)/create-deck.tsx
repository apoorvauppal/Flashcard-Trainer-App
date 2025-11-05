import React, {useContext, useState} from 'react' 
import { FlashContext } from '../../src/contexts/FlashContext';
import {useRouter} from 'expo-router'

export default function CreateDeckModal(){
    const [title, setTitle] = useState("");
    const {createDeck} = useContext(FlashContext)
    const router = useRouter();

    const handleCreate = () => {
        
    }
}