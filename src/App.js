import Header from "./components/header.js";
import Footer from "./components/footer.js";
import Deck from "./components/deck";
import Scoreboard from "./components/scoreboard.js";
import "./styles/app.css"

function App() {
  return (
    <div className="App">
      <Header title="The Lord Of The Rings" subtitle="Memory Game"></Header>
      <body>
        <Deck></Deck>
        <Scoreboard></Scoreboard>
      </body>
      <Footer content="@quirogak" href="https://github.com/quirogak"></Footer>
    </div>
  );
}

export default App;
