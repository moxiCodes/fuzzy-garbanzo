import { useState } from "react";
import { AnimalTypeSelect } from "./AnimalTypeSelect";
import { SortOrderSelect } from "./SortOrderSelect";

import { useAnimals } from "./useAnimals";
import { AnimalType, SortByOptions } from "./types";
import { AnimalsTable } from "./AnimalsTable";
import { NameSearch } from "./NameSearch";

export const FarmChallengePage = () => {
  //  This keeps the current items of state that define the parameters that go to the endpoint

  const [animalType, setAnimalType] = useState<AnimalType>();
  const [order, setOrder] = useState<SortByOptions>();
  const [name, setName] = useState("");

  // This helpful custom hook takes the filter mechanisms and spits out a matching array of animals
  // It means the page isn't polluted with complicated fetching code
  const animals = useAnimals({
    type: animalType,
    name,
    order,
  });

  //  Keeping the state at the pafe level means that the filter/sort stuff can be cleared easily with a clearSearch helper function
  const clearSearch = () => {
    setAnimalType(undefined);
    setOrder(undefined);
    setName("");
  };

  return (
    <>
      <h1>Farm Database</h1>
      <h2>Filters</h2>
      <div>
        <button onClick={() => clearSearch()}>Clear</button>
      </div>
      <NameSearch name={name} onChange={(name) => setName(name)} />
      {/* Selecting 'None' comes from the select component as a "", we convert this to undefined to make our modeeling a little cleaner */}
      <AnimalTypeSelect
        animalType={animalType ?? ""}
        onAnimalTypeChanged={(animalType) =>
          setAnimalType(animalType === "" ? undefined : animalType)
        }
      />
      <h2>Order</h2>
      {/* Selecting 'None' comes from the select component as a "", we convert this to undefined to make our modeeling a little cleaner */}
      <SortOrderSelect
        order={order ?? ""}
        onSortOrderChanged={(order) =>
          setOrder(order === "" ? undefined : order)
        }
      />
      <hr></hr>
      <h2>Animals</h2>
      <div>Animals Table</div>

      {/* The animals table is a 'dumb' component that displays a list of animals. This is very reusable as it isn't 'bound' to a back end*/}
      <AnimalsTable animals={animals} />
    </>
  );
};
