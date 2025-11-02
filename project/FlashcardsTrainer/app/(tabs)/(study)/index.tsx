import React from "react";
import {StyleSheet} from "react-native";
import { useFlash } from "../../../src/contexts/FlashContext";

export default function StudyScreen(){
    const{favoriteCards} = useFlash();

    
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:12,
    },
    header:{
        fontSize:20,
        fontWeight:"700",
        marginBottom:8,
    },
    empty:{
        flex:1,
        alignItems: "center",
        justifyContent:"center",
        marginTop: 24,
    }
})