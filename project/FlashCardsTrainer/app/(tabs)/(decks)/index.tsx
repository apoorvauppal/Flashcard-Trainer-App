import React from 'react';
import { View, Text } from 'react-native/types_generated/index';


export default function DecksScreen(){
    return(
        <View style = {{flex:1, 
        justifyContent: "center",
        alignItems:"center"
        }}>
            <Text style = {{fontSize:24}}>Decks List</Text>
        </View>
    )
}