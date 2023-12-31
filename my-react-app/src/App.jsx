import "./App.css";
import EventHandler from "./components/EventHandler/EventHandler";
import Toolbar from "./components/EventHandler/Toolbar";
import Gallery from "./components/EventHandler/Gallery";
import FilterableProductTable from "./components/SearchableProduct/FilterableProductTable";

// import Game from "./components/TicTacToe/Game";
// import Winner from "./components/TicTacToe/Winner";
const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];
function App() {
  return (
    <>
      {/* <p className="read-the-docs">lets Build a tic-tac-toe game</p>
      <Game />
      <Winner /> */}
      {/* <FilterableProductTable products={PRODUCTS} /> */}
      {/* <Gallery /> */}
      {/* <EventHandler message="Playing"> Play movie </EventHandler> */}
      {/* <Toolbar/> */}
      <Gallery/>
    </>
  );
}

export default App;
