import authenticLogo from '/authentic-outdoor-logo.png'
import './App.css'
import TrailCard from './components/TrailCard'
import cardData from "./assets/cardData.js"

function App() {

  return (
    <>
      <div>
          <img src={authenticLogo} className="logo" alt="Authentic logo" />
          <div className="cardDeck">
          {cardData.map((card, i) => <TrailCard key={i} {...card}/>)}
          </div>
      </div>
    </>
  )
}

export default App
