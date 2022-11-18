import './App.css';
import Menu from "./components/Menu";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";
import { useState } from "react";
import { GameStateContext } from "./helpers/Contexts";


function App() {

  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  const [userName, setUserName] = useState("");

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <GameStateContext.Provider 
        value={{ 
          gameState, 
          setGameState, 
          score, 
          setScore, 
          userName, 
          setUserName 
          }}>
          {gameState === "menu" && <Menu />}
          {gameState === "playing" && <Quiz />}
          {gameState === "finished" && <EndScreen />}
      </GameStateContext.Provider>
    </div>
  );
}

export default App;
