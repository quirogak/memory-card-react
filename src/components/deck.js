import Card from "./card";
import { useState } from "react";
import uniqid from "uniqid";
import "../styles/deck.css";
import Scoreboard from "./scoreboard";

const CardsInfo = [
    { listId: 0, name: "Aragorn", imgSrc: require("../img/aragorn.jpg") },
    { listId: 1, name: "Legolas", imgSrc: require("../img/legolas.jpg") },
    { listId: 2, name: "Bilbo", imgSrc: require("../img/bilbo.jpg") },
    { listId: 3, name: "Frodo", imgSrc: require("../img/frodo.jpg") },
    { listId: 4, name: "Gandalf", imgSrc: require("../img/gandalf.jpg") },
    { listId: 5, name: "Gollum", imgSrc: require("../img/gollum.jpg") },
    { listId: 6, name: "Samsagaz", imgSrc: require("../img/samsagaz.jpg") },
    { listId: 7, name: "Gimli", imgSrc: require("../img/gimli.jpg") },
    { listId: 8, name: "Sauron", imgSrc: require("../img/sauron.jpg") },
    { listId: 9, name: "Thorin", imgSrc: require("../img/thorin.jpg") },
    { listId: 10, name: "Saruman", imgSrc: require("../img/saruman.jpg") },
    { listId: 11, name: "Galadriel", imgSrc: require("../img/galadriel.jpg") },
]

const Deck = () => {
    const [randomize, setRandomize] = useState(false);
    const [score, setScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)
    const [clicked, setClicked] = useState(Array(12).fill(false)) // Array with 12 repeated false values.
    const stateProps = { randomizeHandler: setRandomize, score: score, setScore: setScore, clicked: clicked, setClicked: setClicked }

    const deckArray = [
        <Card key={uniqid()} cardInfo={CardsInfo[0]} {...stateProps}></Card>,
        <Card key={uniqid()} cardInfo={CardsInfo[1]} {...stateProps}></Card>,
        <Card key={uniqid()} cardInfo={CardsInfo[2]} {...stateProps}></Card>,
        <Card key={uniqid()} cardInfo={CardsInfo[3]} {...stateProps}></Card>,
        <Card key={uniqid()} cardInfo={CardsInfo[4]} {...stateProps}></Card>,
        <Card key={uniqid()} cardInfo={CardsInfo[5]} {...stateProps}></Card>,
        <Card key={uniqid()} cardInfo={CardsInfo[6]} {...stateProps}></Card>,
        <Card key={uniqid()} cardInfo={CardsInfo[7]} {...stateProps}></Card>,
        <Card key={uniqid()} cardInfo={CardsInfo[8]} {...stateProps}></Card>,
        <Card key={uniqid()} cardInfo={CardsInfo[9]} {...stateProps}></Card>,
        <Card key={uniqid()} cardInfo={CardsInfo[10]} {...stateProps}></Card>,
        <Card key={uniqid()} cardInfo={CardsInfo[11]} {...stateProps}></Card>,
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
        <>
            <div id="Deck">
                {randomize ? randomizeDeck() : null}
                {currentDeck.map((card) => card)}
            </div>
            <Scoreboard score={score} bestScore={bestScore}></Scoreboard>
        </>
    );
};

export default Deck;
