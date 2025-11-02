import { useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import { useFlash } from "../../../src/contexts/FlashContext";

export default function DecksScreen(){
    const router = useRouter();
    const {decks} = useFlash();
    const [query, setQuery] = useState("");

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if(!)
    })
}