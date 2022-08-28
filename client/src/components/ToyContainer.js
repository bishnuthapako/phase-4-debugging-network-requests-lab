import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDeleteToy, onUpdateToy }) {
  console.log(toys, 'toy')
  const toyCards = toys.map((toy) => (
    // console.log(toy.id, 'id')
    
  <ToyCard
    key={toy.id}
    toy={toy}
    onDeleteToy={onDeleteToy}
    onUpdateToy={onUpdateToy}
  />

  ));

  return <div id="toy-collection">{toyCards}</div>;
}

export default ToyContainer;
