import React, {createContext} from "react";

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

type FavoriteCardFlat = {deckId: string; deckTitle: string; card: Card}

type FlashContextType = {
    decks: Deck[];
    addDeck: (title: string) => void;
    getDeckById: (id: string) => Deck | undefined;
    addCardToDeck: (deckId: string, card: {question: string; answer: string}) => void;
    toggleFavorite: (deckId: string, cardId: string) => void
    favoriteCards: FavoriteCardFlat[];

};

const FlashContext = createContext<FlashContextType | undefined>(undefined);

function generateId(prefix = ""){
    return '${prefix}${Date.now().toString(36)}-$Math.random().toString(36).slice((2,8)}';
}

const initial: Deck[] = [
    
]