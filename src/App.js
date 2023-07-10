import Header from "./components/header.js";
import Footer from "./components/footer.js";
import Deck from "./components/deck";
import "./styles/app.css"

function App() {
  return (
    <div className="App">
      <Header title="The Lord Of The Rings" subtitle="Memory Game"></Header>
      <section id="body">
        <Deck></Deck>
      </section>
      <Footer content="@quirogak" href="https://github.com/quirogak"></Footer>
    </div>
  );
}

export default App;
