import { useEffect } from "react";
import "../styles/card.css";

const Card = (props) => {
  const currentId = props.cardInfo.listId;
  const setRandomizeTrue = () => props.randomizeHandler(true);

  const updateBestScore = (newScore) => props.setBestScore(newScore);

  const resetClickedCards = () =>
    props.setClicked(Array(props.clicked.length).fill(false)); // set every "clicked" cards element to false.

  const addScore = () => {
    props.setScore(props.score + 1);
    const mutableClicks = props.clicked; // create a copy of "clicked array" prop.
    mutableClicks[currentId] = true; // set the "clicked value" of this card as true.
    props.setClicked(mutableClicks); // then, setClicked as the updated array.
  };

  const resetRound = () => {
    if (props.score >= props.bestScore) updateBestScore(props.score);
    resetClickedCards();
    props.setScore(0);
  };

  const updateScoreboard = () => {
    if (props.clicked[currentId])
      resetRound(); // if the current card is already clicked, reset the round.
    else addScore();
  };

  useEffect(() => {
    // call useEffect to add event handlers on componentDidMount.
    const currentCard = document.getElementById(currentId);
    currentCard.addEventListener("click", updateScoreboard);
    currentCard.addEventListener("click", setRandomizeTrue);

    return () => {
      // remove listeners on componentWillUnmount.
      currentCard.removeEventListener("click", setRandomizeTrue);
      currentCard.removeEventListener("click", updateScoreboard);
    };
  }, []);

  return (
    <div className="card" id={currentId}>
      <figure>
        <img src={props.cardInfo.imgSrc} alt={props.cardInfo.name}></img>
        <figcaption>{props.cardInfo.name}</figcaption>
      </figure>
    </div>
  );
};

export default Card;
