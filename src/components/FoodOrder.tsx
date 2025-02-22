import React, { MouseEventHandler } from "react";
import { MenuItem } from "../entities/MenuItem";

interface FoodOrderProps {
  food: MenuItem;
  onQuantityUpdated(id: number, quantity: number): void;
  onReturnToMenu: MouseEventHandler<HTMLButtonElement> | undefined;
}

function FoodOrder(props: FoodOrderProps) {
  return (
    <>
      <form>
        <p>{props.food.price}</p>
        <p>Cantidad</p>
        <input type="number"></input>
        <input type="text"></input>
        <input type="tel"></input>
        <button type="submit"></button>
      </form>
    </>
  );
}

export default FoodOrder;
