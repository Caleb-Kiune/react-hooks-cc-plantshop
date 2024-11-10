import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants,deletePlant}) {
  return (
    <ul className="cards">{
      plants.map((plant) => (
        <PlantCard key={plant.id} {...plant} deletePlant={deletePlant}/>
      ))
      }</ul>
  );
}

export default PlantList;
