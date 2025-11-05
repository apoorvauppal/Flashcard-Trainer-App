import React, { createContext, useState } from 'react'

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

export const FlashContext = createContext<FlashContextType>({
    decks: {},
    createDeck: () => {},
});

export const FlashProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [decks, setDecks] = useState<Record<String, Deck>({
        'sample-deck': {
            id: 'sample-deck',
            title: 'Sample Deck',
            cards: [],
        },
    });

    const createDeck = 
}