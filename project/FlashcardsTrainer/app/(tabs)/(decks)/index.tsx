import { useRouter } from "expo-router";
import React from "react";
import { useFlash } from "../../../src/contexts/FlashContext";

export default function DecksScreen(){
    const router = useRouter();
    const {decks} = useFlash();
    const [query, ]
}