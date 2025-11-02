import React from "react";
import{StyleSheet, View} from "react-native";
import { TextInput } from "react-native/types_generated/index";

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
            <View style={styles.wrapper}>
                <TextInput

            </View>
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
        borderColor:"#ddd",
        backgroundColor:"#fff",
    }
});