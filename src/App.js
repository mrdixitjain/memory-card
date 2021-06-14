import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  const updateBestScore = () => {
    setBestScore(Math.max(bestScore, currentScore));
    setCurrentScore(0);
  }

  const updateCurrentScore = () => {
    setCurrentScore(currentScore + 1);
  }
  
  return (
    <div className="App">
      <Navbar 
        currentScore={currentScore} 
        bestScore={bestScore}
      />
      <Card 
        updateBestScore={updateBestScore}
        updateCurrentScore={updateCurrentScore}
      />
    </div>
  );
}

export default App;
