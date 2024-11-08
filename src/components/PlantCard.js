import React, { useState } from "react";

function PlantCard({name,image,price}) {

  const [isAvailable, setIsAvailable] = useState(true)

  function handleAvailabilityToggle() {
    setIsAvailable(!isAvailable)
  }


  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isAvailable ? (
        <button className="primary" onClick={handleAvailabilityToggle}>In Stock</button>
      ) : (
        <button onClick={handleAvailabilityToggle}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
