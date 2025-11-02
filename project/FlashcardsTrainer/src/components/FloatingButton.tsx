import React from "react";
import{StyleSheet} from "react-native";

export default function FloatingButton({onPress}: {onPress: () => void}){
    return(
        <TouchableOpacity onPress = {onpress} style = {styles.fab}}></TouchableOpacity>
    )
}




const styles = StyleSheet.create({
    fab:{
        position: "absolute",
        right:18, 
        bottom: 26,
        width: 56,
        height:56,
        borderRadius: 28,
        backgroundColor: "#007AFF",
        alignItems: "center",
        justifyContent:"center",
        elevation:4,
        shadowColor:"#000",
        shadowOpacity:0.2,
    },
    plus:{
        color:"white",
        fontSize:28,
        lineHeight:28,
    }
});