import React from 'react'

type Card = {
    id: string;
    question: string;
    answer: string;
    favorite?: boolean;
};

type Deck = {
    id: string;
    title: string;
    cards: Card[];
};

type FlashContextType = {
    decks: Record<string, Deck>;
    createDeck: (title: string) => void;
};