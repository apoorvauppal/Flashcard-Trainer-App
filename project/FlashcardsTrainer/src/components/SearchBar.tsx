import React from "react";
import{StyleSheet} from "react-native";

export default function SearchBar({
    value, 
    onChangeText, 
    placeholder,
}:{
    value: string, 
    onChangeText: (t:string) => void;
    placeholder?:string;
    }){
        return(

        )
    }

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 12,
    },
    input:{
        padding: 10, 
        borderRadius:8,
        borderWidth:1,
        
    }
})