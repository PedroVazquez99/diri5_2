import { MouseEventHandler, useState } from "react";
import { MenuItem } from "../entities/MenuItem";
import '../styles/foodOrder.css'

interface FoodOrderProps {
  food: MenuItem;
  srcImg: string;
  onQuantityUpdated(id: number, quantity: number): void;
  onReturnToMenu: MouseEventHandler<HTMLButtonElement> | undefined;
}

function FoodOrder(props: FoodOrderProps) {

  const [quantity, setQuantity] = useState(1); // Estado para guardar la cantidad ingresada

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario
    props.onQuantityUpdated(props.food.id, quantity);
  };

  return (
    <>
      <img src={props.srcImg} alt={props.food.name} />
      <h3>{props.food.name}</h3>
      <p>{props.food.desc}</p>
      <p>{props.food.price}$</p>
      <form className="foodOrderForm" onSubmit={handleSubmit}>
        <h3>Ordena tu comida</h3>

        <div className="formGroup">
          <label htmlFor="quantity">Cantidad</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            min="1"
            max={props.food.quantity} // Limita el máximo a la cantidad disponible
            placeholder="Ej. 2"
          />
        </div>

        <div className="formGroup">
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name" placeholder="Tu nombre" />
        </div>

        <div className="formGroup">
          <label htmlFor="phone">Teléfono</label>
          <input type="tel" id="phone" name="phone" placeholder="+34 123 456 789" />
        </div>

        <div className="buttonGroup">
          <button type="submit" className="orderButton">Hacer Pedido</button>
          <button className="orderButton" onClick={props.onReturnToMenu}>Volver</button>
        </div>
      </form>



    </>
  );
}

export default FoodOrder;













