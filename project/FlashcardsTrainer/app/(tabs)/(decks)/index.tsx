import { useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import { useFlash } from "../../../src/contexts/FlashContext";
import {View} from "react-native";

export default function DecksScreen(){
    const router = useRouter();
    const {decks} = useFlash();
    const [query, setQuery] = useState("");

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if(!q) return decks;
        return decks.filter((d) => d.title.toLowerCase().includes(q));
    }, [decks,query]);

    return(
        <View> style={styles.container}</View>
    )
}