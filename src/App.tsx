import { useState } from "react";
import "./App.css";
import { MenuItem } from "./entities/MenuItem";
import Foods from "./components/Foods";

function App() {
  const [isChooseFoodPage, setIsChooseFoodPage] = useState(false); // Para saber si se aprieta el boton de 'Pedir comida'
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      id: 1,
      name: "Hamburguesa de Pollo",
      quantity: 40,
      desc: "Esto es una haburguesa de pollo",
      price: 12,
      image: "hamburguesa.jpg",
    },
    {
      id: 2,
      name: "Pizza de cuatro quesos",
      quantity: 25,
      desc: "Esta es la mejor pizza del mundo",
      price: 15,
      image: "pizza.jpg",
    },
    {
      id: 3,
      name: "Ensalada",
      quantity: 30,
      desc: "Ensalada con ingredientes naturales",
      price: 7,
      image: "ensalada.jpeg",
    },
    {
      id: 4,
      name: "Bocadillo",
      quantity: 35,
      desc: "El bocata de la tía Paca",
      price: 5,
      image: "bocadillo.jpg",
    },
  ]);
  return (
    <div className="App">
      <button
        className="toggleButton"
        onClick={() => setIsChooseFoodPage(!isChooseFoodPage)}
      >
        {isChooseFoodPage ? "Disponibilidad" : "Pedir Comida"}
      </button>
      <h3 className="title">Comida Rápida Online</h3>
      {!isChooseFoodPage && (
        <>
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
        </>
      )}
      {isChooseFoodPage && <Foods foodItems={menuItems}></Foods>}
    </div>
  );
}

export default App;
