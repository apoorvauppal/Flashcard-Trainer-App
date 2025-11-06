import { Tabs } from 'expo-router';
import React from 'react';

export default function TabsLayout(){
    return(
        <Tabs>
            <Tabs.Screen name='(decks)' options={{title:"Decks", tabBarLabel: "Decks", tabBarIcon: () => "🗂️"}}/>
            <Tabs.Screen name='(study)' options={{title:"Study", tabBarLabel: "S", tabBarIcon: () => "⭐"}}/>
    
        </Tabs>
    );
}