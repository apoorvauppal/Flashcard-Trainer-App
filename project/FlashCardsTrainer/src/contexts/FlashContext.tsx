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
    const [decks, setDecks] = useState<Record<string, Deck>>({
        'sample-deck': {
            id: 'sample-deck',
            title: 'Sample Deck',
            cards: [],
        },
    });

    const createDeck = (title: string) => {
        const id = Math.random().toString(36).substring(2, 9);
        setDecks((d) => ({ ...d, [id]: {id, title, cards: []}}));
    };

    const addCardToDeck = (deckId: string, card: { question: string; answer: string }) => {
    const newCard = { id: Math.random().toString(36).substring(2, 9), ...card, favorite: false };
    setDecks((d) => {
      const deck = d[deckId];
      if (!deck) return d;
      return {
        ...d,
        [deckId]: { ...deck, cards: [...deck.cards, newCard] },
      };
    });
  };
    
    return(
        <FlashContext.Provider value = {{ decks, createDeck, addCardToDeck}}>
            {children}
        </FlashContext.Provider>
    );
};