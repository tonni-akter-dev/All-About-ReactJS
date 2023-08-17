import "./App.css";
import Board from "./components/TicTacToe/Board";
import Winner from "./components/TicTacToe/Winner";

function App() {
  return (
    <>
      <p className="read-the-docs">lets Build a tic-tac-toe game</p>
      <Board />
      <Winner />
    </>
  );
}

export default App;
