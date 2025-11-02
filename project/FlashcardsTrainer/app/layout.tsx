import React from "react";
import {Slot} from "expo-router";
import { FlashProvider } from "../src/contexts/FlashContext";

export default function RootLayout(){
    return(
        <FlashProvider>
            <Slot />
        </FlashProvider>
    );
}