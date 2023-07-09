import "../styles/scoreboard.css"
const Scoreboard = (props) => {
    return (
        <section id="scoreboard">
            <div id="scoreboard-wrapper">
                <p>Current Score: {props.score}</p>
                <p>Best Score: {props.bestScore}</p>
            </div>
        </section>
    )
}

export default Scoreboard