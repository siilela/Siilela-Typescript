import React from "react";

interface Pizza {
  id: number;
  name: string;
  description: string;
  price: number;
}
interface Props {
  pizza: Pizza;
}

const Pizza: React.FC<Props> = ({ pizza }) => {
  return (
    <>
      <li>
        <h2>{pizza.name}</h2>
        <h2>{pizza.description}</h2>
        <h2>{pizza.price}</h2>
      </li>
    </>
  );
};

export default Pizza;
