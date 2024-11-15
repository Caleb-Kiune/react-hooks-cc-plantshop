import React, { useState,useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])

  const [searchTerm, setSearchTerm] = useState('')

  const baseURL = "https://my-json-server.typicode.com/Caleb-Kiune/react-hooks-cc-plantshop/plants"

  useEffect(() => {
    fetch(baseURL)
    .then((response) => response.json())
    .then((data) => { 
      console.log("Fetched plants data:", data);
       setPlants(data); })
    .catch((error) => console.error ('Error fetching plants:', error))
  }, [])


  function handleAddPlant(newPlant){
    setPlants([...plants,newPlant])
  }

  function handleSearchInput(term){
    setSearchTerm(term)
  }



  function handleDeletePlant(id){
    fetch(`baseURL${id}`,{
      method: 'DELETE',
    })
    .then(() => {
      setPlants(plants.filter(plant => plant.id !== id))
    })
    .catch((error) => console.error('Error deleting plant:',error))
  }

  const filteredPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  )






  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search setSearchInput={handleSearchInput}/>
      <PlantList plants={filteredPlants} deletePlant={handleDeletePlant}/>
    </main>
  );
}

export default PlantPage;
