import authenticLogo from '/authentic-outdoor-logo.png'
import './App.css'
import TrailCard from './components/TrailCard'

function App() {

  return (
    <>
      <div>
          <img src={authenticLogo} className="logo" alt="Authentic logo" />
          <TrailCard />
      </div>
    </>
  )
}

export default App
