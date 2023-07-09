import { useEffect } from "react";
import "../styles/card.css";

const Card = (props) => {
    const currentId = props.cardInfo.listId;
    const setRandomizeTrue = () => props.randomizeHandler(true);

    const addScore = () => {
        if (!props.clicked[currentId]) props.setScore(props.score + 1)
        const mutableClicks = props.clicked  // create a copy of "clicked array" prop.
        mutableClicks[currentId] = true // set the "clicked value" of this card as true.
        props.setClicked(mutableClicks) // then, setClicked as the updated array.
    }

    useEffect(() => {
        // call useEffect to add event handlers on componentDidMount.
        const currentCard = document.getElementById(currentId);
        currentCard.addEventListener("click", addScore)
        currentCard.addEventListener("click", setRandomizeTrue);

        return () => currentCard.removeEventListener("click", setRandomizeTrue); // remove listener on componentWillUnmount.
    }, []);

    return (
        <div className="card" id={currentId}>
            <figure>
                <img src={props.cardInfo.imgSrc} alt={props.cardInfo.name}></img>
                <figcaption>{props.cardInfo.name}</figcaption>
            </figure>
        </div>
    )
};

export default Card;
