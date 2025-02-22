import "../styles/styles.css";
import { MenuItem } from "../entities/MenuItem";
import { useState } from "react";

interface FoodsProps {
  foodItems: MenuItem[];
}

function Foods(props: FoodsProps) {
  const [isFoodPressed, setIsOnFoodPressed] = useState<boolean>(false);

  const handleOnFoodPressed = (isPressed: boolean) => {
    setIsOnFoodPressed(!isPressed);
  };

  return (
    <>
      <h4 className="foodTitle">Carta</h4>
      <ul className="ulFoods">
        {props.foodItems.map((item) => {
          return (
            <li
              key={item.id}
              className="liFoods"
              onClick={() => handleOnFoodPressed(isFoodPressed)}
            >
              <img
                className="foodImg"
                src={`/images/${item.image}`}
                alt={item.name}
              />
              <div className="foodItem">
                <p className="foodDesc">{item.desc}</p>
                <p className="foodPrice">{item.price}$</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default Foods;
