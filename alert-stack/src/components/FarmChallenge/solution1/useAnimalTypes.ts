import { useEffect, useState } from "react";
import { AnimalType, OptionInfo } from "./types";
import axios from "axios";

export type AnimalKeyPair = OptionInfo<AnimalType>;

export const useAnimalTypes = () => {
  const [animalTypes, setAnimalTypes] = useState<AnimalKeyPair[]>([]);

  useEffect(() => {
    const getAnimals = async () => {
      const { data } = await axios.get<AnimalKeyPair[]>("/animal-types");
      setAnimalTypes(data);
    };

    getAnimals();
  }, []);

  return animalTypes;
};
