import React from "react";
import {Stack} from "expo-router";

export default function ModalsLayout(){
    return(
        <Stack screenOptions={{presentation: "modal"}}>
            <Stack.Screen name="create-deck" options={{title:"Create Deck"}}/>
            <Stack.Screen name="create-card" options={{title:"Add Card"}}/>
        </Stack>
    );
}