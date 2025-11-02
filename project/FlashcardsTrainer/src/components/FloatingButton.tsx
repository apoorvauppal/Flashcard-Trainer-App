import React from "react";
import{StyleSheet} from "react-native";

export default function FloatingButton({onPress}: {onPress: () => void}){

}




const styles = StyleSheet.create({
    fab:{
        position: "absolute",
        right:18, 
        bottom: 26,
        width: 56,
        height:56,
        borderRadius: 28
        backgroundColor: "#007AFF",
        
    }
})