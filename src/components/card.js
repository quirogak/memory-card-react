import { useEffect } from "react";
import "../styles/card.css";
import uniqid from "uniqid";

const Card = (props) => {
    const currentId = uniqid();
    const setRandomizeTrue = () => props.randomizeHandler(true);

    useEffect(() => {
        // call useEffect to put event listener on componentDidMount.
        const currentCard = document.getElementById(currentId);
        currentCard.addEventListener("click", setRandomizeTrue);

        return () => currentCard.removeEventListener("click", setRandomizeTrue); // remove listener on componentWillUnmount.
    }, []);

    return (
        <div className="card" id={currentId}>
            <figure>
                <img src={props.imgSrc} alt={props.name}></img>
                <figcaption>{props.name}</figcaption>
            </figure>
        </div>
    )
};

export default Card;
