import authenticLogo from "/authentic-outdoor-logo.png";
import "./App.css";
import TrailCard from "./components/TrailCard";
import cardData from "./assets/cardData.js";
import NavBar from "./components/NavBar.jsx";
import SelectedCard from "./components/SelectedCard.jsx";
import { useState } from "react";

function App() {
  const [trailIndex, setTrailIndex] = useState(0);

  const handleClick = (selectedIndex) => {
    setTrailIndex(selectedIndex);
  };

  return (
    <>
      <div>
        <NavBar />
        <img src={authenticLogo} className="logo" alt="Authentic logo" />
        <SelectedCard {...cardData[trailIndex]} />
        <div className="cardDeck">
          {cardData.map((card, i) => (
            <TrailCard
              key={i}
              handleClick={() => {
                handleClick(i);
              }}
              {...card}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
