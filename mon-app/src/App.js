import "./App.css";
import illustration_hero from "./images/illustration-hero.svg";
function App() {
  return (
    <div className="App">
      <img src={illustration_hero} alt="illustration hero" />
      <h1>Order summary</h1>
      <p>
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>
    </div>
  );
}

export default App;
