import React from 'react';
import{StyleSheet} from "react-native";

export default function CardRow({
    
})


const styles = StyleSheet.create({
    row: { 
        flexDirection: "row",
        padding: 12,
        borderRadius: 10, 
        backgroundColor: "#fff",
        marginBottom: 10,
    },
    question:{
        fontWeight: '600',
        fontSize: 15,
    },
    answer:{
        marginTop: 8,
        color: "#333",
    },
    actions: {
        justifyContent: "space-between", 
        alignItems: "center",
    },
    actionBtn:{
        padding: 8,
    },
    deckTitle:{
        fontSize: 12,
        color: "#888",
    }
});