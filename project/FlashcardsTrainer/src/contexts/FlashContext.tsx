import React, {createContext, ReactNode, useContext, useState} from "react";
import { diffClamp } from "react-native/types_generated/Libraries/Animated/AnimatedExports";

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
    {
        id: "deck-1",
        title:"Sample Deck",
        cards:[
            {id: "c1", question: "What is React?", answer: "A JS library for UIs", favorite: false},
            {id: "c2", question: "What is Expo?", answer: "A platform for React Native", favorite: true},
        
        ],
    },
];

export const FlashProvider = ({children}: {children: ReactNode}) => {
    const [decks, setDecks] = useState<Deck[]>(initial);

    const addDeck = (title: string) => {
        const newDeck: Deck = {id: generateId("deck-"), title, cards: []};
        setDecks((d) => [newDeck, ...d]);
    }

    const getDeckById = (id: string) => decks.find((d) => d.id === id);

    const addCardToDeck = (deckId: string, card: {question: string; answer: string}) => {
        setDecks((prev) =>
        prev.map((d) =>
        d.id === deckId
            ?{
                ...d,
                cards:[
                    ...d.cards,
                {id:generateId("card-"), question: card.question, answer: card.answer, favorite: false},

                ],
            }
            :d
        )
    );
    };

    const toggleFavorite = (deckId: string, cardId: string) => {
        setDecks((prev) =>
        prev.map((d) =>
        d.id === deckId
        ?{
            ...d,
            cards: d.cards.map((c) => c.id === cardId ? {...c, favorite: !c.favorite}:c)),
            }
        :d
    )
);
    };

    const favoriteCards: FavoriteCardFlat[] = decks.flatMap((d) =>
    d.cards.filter((c) => c.favorite.map(c) => ({deckId: d.id, deckTitle: d.title, card:c}))
);
return (
    <FlashContext.Provider
    value = {{ decks, addDeck, getDeckById, addCardToDeck, toggleFavorite, favoriteCardsCards}}
    >
        {children}
    </FlashContext.Provider>
);
};