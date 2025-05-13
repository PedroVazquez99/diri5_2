import React, { Suspense, useState } from "react";
import "./App.css";
import { MenuItem } from "./entities/MenuItem";
import FoodOrder from "./components/FoodOrder";
const Foods = React.lazy(() => import("./components/Foods")); // Lazy load
export const foodItemsContext = React.createContext<MenuItem[]>([]); // Contexto para pasar los items de comida

function App() {
  const [selectedFood, setSelectedFood] = useState<MenuItem | null>(null);
  const [isChooseFoodPage, setIsChooseFoodPage] = useState(false);

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
    <foodItemsContext.Provider value={menuItems}>
      <div className="App">
        {/* Si NO hay comida seleccionada */}
        {!selectedFood ? (
          <>
            <button
              className="toggleButton"
              onClick={() => setIsChooseFoodPage(!isChooseFoodPage)}
            >
              {isChooseFoodPage ? "Disponibilidad" : "Pedir Comida"}
            </button>
            <h3 className="title">Comida Rápida Online</h3>
            {!isChooseFoodPage ? (
              <>
                <h4 className="subTitle">Menús</h4>
                <ul className="ulApp">
                  {menuItems.map((item) => (
                    <li key={item.id} className="liApp">
                      <p>{item.name}</p>
                      <p>#{item.quantity}</p>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <Suspense fallback={<div>Cargando platos...</div>}>
                  <Foods foodItems={menuItems} onFoodSelected={setSelectedFood} />
                </Suspense>
              </>
            )}
          </>
        ) : (
          // Si hay comida seleccionada
          <FoodOrder
            food={selectedFood}
            onReturnToMenu={() => setSelectedFood(null)}
          />
        )}
      </div>
    </foodItemsContext.Provider>
  );
}

export default App;
