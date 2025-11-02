import React from "react";

export type Card = {
    id: string;
    question: string;
    answer:string;
    favorite?: boolean;
};

export type Deck = {
    id:string;
    title: string;
    cards: Card[];
};

type FvaoriteCardFlat = {}