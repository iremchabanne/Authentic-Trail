import TrailBanner from "../components/TrailBanner.jsx";
import cardData from "../cardData.js";
import TrailCard from "../components/TrailCard.jsx";
import { useState } from "react";

function Trails() {
  const [trailIndex, setTrailIndex] = useState(0);

  const handleClick = (selectedIndex) => {
    setTrailIndex(selectedIndex);
  };

  return (
    <div>
      <TrailBanner {...cardData[trailIndex]} />
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
  );
}

export default Trails;
