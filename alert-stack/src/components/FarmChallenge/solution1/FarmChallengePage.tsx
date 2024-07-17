import { useState } from "react";
import { AnimalTypeSelect, SelectAnimalType } from "./AnimalTypeSelect";

export const FarmChallengePage = () => {
  const [animalType, setAnimalType] = useState<SelectAnimalType>("");

  console.log("animalType", animalType);

  return (
    <>
      <h1>Farm Database</h1>
      <h2>Filters</h2>
      <div>Name Search</div>
      <div>
        <button onClick={() => setAnimalType("")}>Clear</button>
      </div>
      <AnimalTypeSelect
        animalType={animalType}
        onAnimalTypeChanged={(animalType) => setAnimalType(animalType)}
      />
      <h2>Order</h2>
      <div>Sort Order</div>
      <hr></hr>
      <h2>Animals</h2>
      <div>Animals Table</div>

      <h3>State</h3>
      <h4 style={{ background: "lightyellow" }}>Animal Type: {animalType}</h4>
    </>
  );
};
