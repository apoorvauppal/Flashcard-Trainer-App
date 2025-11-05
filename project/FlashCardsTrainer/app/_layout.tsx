import { Stack } from 'expo-router';
import React from 'react';


export default function RootLayout(){
    return(
        <Stack>
            <Stack.Screen name = "(tabs)" options = {{headerShown: false}} />
            <Stack.Screen name = "(modals)/create-deck" options = {{headerShown: false}} />
            <Stack.Screen name = "(modals)/create-card" options = {{headerShown: false}} />

        </Stack>
    )
}