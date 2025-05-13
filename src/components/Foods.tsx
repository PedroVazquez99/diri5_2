import "../styles/styles.css";
import { MenuItem } from "../entities/MenuItem";

interface FoodsProps {
  foodItems: MenuItem[];
  onFoodSelected: (food: MenuItem) => void;
}

function Foods(props: FoodsProps) {
  return (
    <>
      <h4 className="foodTitle">Carta</h4>
      <ul className="ulFoods">
        {props.foodItems.map((item) => (
          <li
            key={item.id}
            className="liFoods"
            onClick={() => props.onFoodSelected(item)}
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
        ))}
      </ul>
    </>
  );
}
export default Foods;
