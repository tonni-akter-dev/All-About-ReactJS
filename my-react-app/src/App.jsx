import "./App.css";
import Game from "./components/TicTacToe/Game";
import Winner from "./components/TicTacToe/Winner";

function App() {
  return (
    <>
      <p className="read-the-docs">lets Build a tic-tac-toe game</p>
      <Game />
      <Winner />
    </>
  );
}

export default App;
