import Card from "./card";
import { useState } from "react";
import uniqid from "uniqid";

const Deck = () => {
    const deckArray = [
        <Card key={uniqid()}></Card>,
        <Card key={uniqid()}></Card>,
        <Card key={uniqid()}></Card>,
        <Card key={uniqid()}></Card>,
        <Card key={uniqid()}></Card>,
        <Card key={uniqid()}></Card>,
        <Card key={uniqid()}></Card>,
        <Card key={uniqid()}></Card>,
        <Card key={uniqid()}></Card>,
        <Card key={uniqid()}></Card>,
        <Card key={uniqid()}></Card>,
        <Card key={uniqid()}></Card>,
    ];

    const randomizeArray = (arr) => {
        const randomIndex = (max, min) => {
            const randomNumber = Number.parseInt(Math.random() * (max - min) + min);
            return randomNumber;
        };

        const buildRandomArray = (arr) => {
            const randomizedSet = new Set; // we need it to be a set, because when we push random card, it shouldn't be repeated.

            const fillSet = () => {
                // on this algorithm, there is no need for comparing if the value already exists, because of the definition of Set.
                // when the randomElement is already inside of randomizedSet, the Set won't increase size,
                // so the recursive call will keep running until we have a full randomized Set with different cards, triggering the base case.
                if (randomizedSet.size === arr.length) return randomizedSet;
                const randomNumber = randomIndex(arr.length, 0);
                const randomElement = arr[randomNumber];
                randomizedSet.add(randomElement);
                return fillSet();
            };

            return fillSet(); // first call to recursive function
        };
        return buildRandomArray(arr);
    };

    const randomizedDeck = Array.from(randomizeArray(deckArray));

    return <div id="Deck">{deckArray.map((card) => card)}</div>;
};

export default Deck;
