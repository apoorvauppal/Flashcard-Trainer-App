import { useSearchParams } from "expo-router/build/hooks";
import React from "react";
import {StyleSheet} from "react-native";

export default function DeckDetail(){
    const{id} = useSearchParams();
    const router = useR
}


const styles = StyleSheet.create({
    containter:{
        flex:1,
        padding:12,
    },
    title:{
        fontSize:22,
        fontWeight:"700",
    },
    count:{
        marginBottom:12,
        color:"#666",
    },
    empty:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 24,
    }
});