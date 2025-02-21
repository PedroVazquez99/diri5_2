import { useState } from "react";
import "./App.css";
import { MenuItem } from "./entities/MenuItem";

function App() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      id: 1,
      name: "Hamburguesa de Pollo",
      quantity: 40,
      desc: "Hamburguesa de pollo frito - … y mayonesa",
      price: 24,
      image: "cb.jpg",
    },
    {
      id: 2,
      name: "Pizza de cuatro quesos",
      quantity: 40,
      desc: "Hamburguesa de pollo frito - … y mayonesa",
      price: 24,
      image: "cb.jpg",
    },
    {
      id: 3,
      name: "Ensalada",
      quantity: 40,
      desc: "Hamburguesa de pollo frito - … y mayonesa",
      price: 24,
      image: "cb.jpg",
    },
    {
      id: 4,
      name: "Bocadillo",
      quantity: 40,
      desc: "Hamburguesa de pollo frito - … y mayonesa",
      price: 24,
      image: "cb.jpg",
    },
  ]);
  return (
    <div className="App">
      <h3 className="title">Comida Rápida Online</h3>
      <h4 className="subTitle">Menús</h4>
      <ul className="ulApp">
        {menuItems.map((item) => {
          return (
            <li key={item.id} className="liApp">
              <p>{item.name}</p>
              <p>#{item.quantity}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
