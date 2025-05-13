import { MouseEventHandler, useState } from "react";
import { MenuItem } from "../entities/MenuItem";
import '../styles/foodOrder.css'

interface FoodOrderProps {
  food: MenuItem;
  onReturnToMenu: MouseEventHandler<HTMLButtonElement> | undefined;
}

function FoodOrder(props: FoodOrderProps) {

  const [quantity, setQuantity] = useState(1); // Estado para guardar la cantidad ingresada
  const [isdelevery, setIsDelivery] = useState(false); // Estado para guardar si es delivery o no

  const handleSubmit = (event: React.FormEvent) => {
    if (quantity < 1 || quantity > props.food.quantity) {
      setIsDelivery(false);
      return;
    }
    event.preventDefault(); // Evita el comportamiento por defecto del formulario
    setIsDelivery(true); // Cambia el estado a true para mostrar el mensaje de éxito
  };

  return (
    <>
      <img src={"/images/" + props.food.image} alt={props.food.name} />
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
      {isdelevery && (
        <div className="successMessage">
          <p>Tu pedido ha sido realizado con éxito!</p>
          <p>Recibirás una notificación cuando llegue.</p>
        </div>
      )}
    </>
  );
}

export default FoodOrder;













