import Card from "./card";
import { useState } from "react";
import uniqid from "uniqid";
import "../styles/deck.css";



const Deck = () => {
    const [randomize, setRandomize] = useState(false);

    const deckArray = [
        <Card key={uniqid()} randomizeHandler={setRandomize} name="Aragorn" imgSrc={require("../img/aragorn.jpg")}></Card>,
        <Card key={uniqid()} randomizeHandler={setRandomize} name="Legolas" imgSrc={require("../img/legolas.jpg")}></Card>,
        <Card key={uniqid()} randomizeHandler={setRandomize} name="Bilbo Baggins" imgSrc={require("../img/bilbo.jpg")}></Card>,
        <Card key={uniqid()} randomizeHandler={setRandomize} name="Frodo Baggins" imgSrc={require("../img/frodo.jpg")}></Card>,
        <Card key={uniqid()} randomizeHandler={setRandomize} name="Gandalf" imgSrc={require("../img/gandalf.jpg")}></Card>,
        <Card key={uniqid()} randomizeHandler={setRandomize} name="Gollum" imgSrc={require("../img/gollum.jpg")}></Card>,
        <Card key={uniqid()} randomizeHandler={setRandomize} name="Samsagaz" imgSrc={require("../img/samsagaz.jpg")}></Card>,
        <Card key={uniqid()} randomizeHandler={setRandomize} name="Gimli" imgSrc={require("../img/gimli.jpg")}></Card>,
        <Card key={uniqid()} randomizeHandler={setRandomize} name="Sauron" imgSrc={require("../img/sauron.jpg")}></Card>,
        <Card key={uniqid()} randomizeHandler={setRandomize} name="Thorin" imgSrc={require("../img/thorin.jpg")}></Card>,
        <Card key={uniqid()} randomizeHandler={setRandomize} name="Saruman" imgSrc={require("../img/saruman.jpg")}></Card>,
        <Card key={uniqid()} randomizeHandler={setRandomize} name="Galadriel" imgSrc={require("../img/galadriel.jpg")}></Card>,
    ];

    const [currentDeck, setCurrentDeck] = useState(deckArray);

    const randomizeArray = (arr) => {
        const randomIndex = (max, min) => {
            const randomNumber = Number.parseInt(Math.random() * (max - min) + min);
            return randomNumber;
        };

        const buildRandomArray = (arr) => {
            const randomizedSet = new Set(); // we need it to be a set, because when we push random card, it shouldn't be repeated.

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

    const randomizeDeck = () => {
        setCurrentDeck(Array.from(randomizeArray(deckArray))); // set currentDeck to a randomized deck.
        return setRandomize(false); // so this function is called once at a time.
    };

    return (
        <div id="Deck">
            {randomize ? randomizeDeck() : null}
            {currentDeck.map((card) => card)}
        </div>
    );
};

export default Deck;
