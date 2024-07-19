import { useEffect, useState } from "react";
import { AnimalType, SortByOptions } from "./types";
import { Animal } from "./types";
import axios from "axios";

// This is a type of everything we can filter/sort by

type FilterSortDetails = {
  type?: AnimalType;
  order?: SortByOptions;
  name?: string;
};

export const useAnimals = (props: FilterSortDetails) => {
  const { name, order, type } = props;
  const [animals, setAnimals] = useState<Animal[]>([]);

  useEffect(() => {
    const getAnimals = async () => {
      const { data: animals } = await axios.get<Animal[]>("/animals", {
        params: { name, order, type },
      });
      setAnimals(animals);
    };

    getAnimals();
  }, [name, order, type]);
  // A change in name, order or type will trigger another call, which is what we want
  // This is what does the filtering/sorting, we don't do this ourselves!

  return animals;
};
