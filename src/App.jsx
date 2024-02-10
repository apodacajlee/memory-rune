import './App.css';
import ScoreBoard from "./components/ScoreBoard";
import Game from "./components/Game";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0); //initialize score as 0
  const [hiScore, setHiScore] = useState(0); //do the same for hiScore

  function handleScore() {
    setScore(score + 1);

    if(score >= hiScore) {
      setHiScore(hiScore + 1);
    }
  }

  function handleScoreReset() {
    setScore(0);
  }


    return (
      <div className="App">
        <ScoreBoard score={score} hiScore={hiScore}/>
        <Game handleScore={handleScore} handleScoreReset={handleScoreReset}/>
      </div>
    );
}

export default App;
