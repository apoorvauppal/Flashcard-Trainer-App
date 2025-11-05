import React, {useContext, useState} from 'react' 
import { FlashContext } from '../../src/contexts/FlashContext';
import {useRouter} from 'expo-router'
import { View } from 'react-native';

export default function CreateDeckModal(){
    const [title, setTitle] = useState("");
    const {createDeck} = useContext(FlashContext)
    const router = useRouter();

    const handleCreate = () => {
        if(!title.trim()) return;
        createDeck(title.trim());
        router.back();
    };

    return(
        <View style ></View>
    )
}

const styles = StyleSheet.create({
    
})