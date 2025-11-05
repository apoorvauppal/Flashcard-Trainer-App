import React, {useContext, useState} from 'react' 
import { FlashContext } from '../../src/contexts/FlashContext';
import {useRouter} from 'expo-router'
import { View, StyleSheet } from 'react-native';

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
    container:{
        flex:1,
        padding:16,
        justifyContent:"center",
        backgroundColor:"#fff",
    },
    label:{
        fontSize: 18,
        marginBottom: 8,
    }
})