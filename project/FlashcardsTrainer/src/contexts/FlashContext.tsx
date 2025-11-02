import React from "react";

export type Card = {
    id: string;
    question: string;
    answer:string;
    favorite?: boolean;
};