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

type FvaoriteCardFlat = {deckId: string; deckTitle: string; card: Card}

type FlashContextType = {
    decks: Deck[];
    addDeck: (title: string) => void;
    getDeckById: (id: string) => Deck | undefined;
    addCardToDeck: (deckId: string, card: {question: string; answer: string}) => void;
    toggleFavorite: (deckId: string, cardId: string) 
}