import NameList from "./Componts/NameList";
import EvenNumbers from "./Componts/EvenNumbers";
import CartTotal from "./Componts/CartTotal";

function App() {
  const users = ["Alice", "Bob", "Charlie"];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  const cartItems = [
    { name: "Book", price: 15 },
    { name: "Pen", price: 2 },
    { name: "Bag", price: 25 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>React map / filter / reduce Examples (with props)</h1>
      <NameList users={users} />
      <EvenNumbers numbers={numbers} />
      <CartTotal cartItems={cartItems} />
    </div>
  );
}

export default App;