import authenticLogo from "/authentic-outdoor-logo.png";
import "./App.css";
import TrailCard from "./components/TrailCard";
import cardData from "./assets/cardData.js";
import NavBar from "./components/NavBar.jsx";
import SelectedCard from "./components/SelectedCard.jsx";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <img src={authenticLogo} className="logo" alt="Authentic logo" />
        <SelectedCard {...cardData[0]} />
        <div className="cardDeck">
          {cardData.map((card, i) => (
            <TrailCard key={i} {...card} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
