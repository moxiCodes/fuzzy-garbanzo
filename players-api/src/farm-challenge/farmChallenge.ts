import { Express } from "express";
import animals from "./farmAnimals.json";
import sortby from "lodash.sortby";

type AnimalType = "chicken" | "cow" | "goat" | "pig" | "sheep";

type SortByOptions = "age" | "name" | "worth";

type QueryParams = {
  name?: string;
  type?: AnimalType;
  order?: SortByOptions;
};

type OptionInfo<T> = {
  type: T;
  displayName: string;
};

const doesAnimalMatchFilter = (
  animal: (typeof animals)[number],
  { name, type }: QueryParams
) => {
  if (
    name !== undefined &&
    !animal.name.toLowerCase().includes(name.toLowerCase())
  ) {
    return false;
  }

  return type !== undefined && animal.animalType !== type ? false : true;
};

export const addAnimalsEndpoint = (app: Express) => {
  app.get("/animals", async (req, res) => {
    const queryParams = req.query as QueryParams;

    const filteredAnimals = animals.filter((animal) =>
      doesAnimalMatchFilter(animal, queryParams)
    );

    const sortedAndFilteredAnimals =
      queryParams.order !== undefined
        ? sortby(filteredAnimals, [queryParams.order])
        : filteredAnimals;

    res.send(sortedAndFilteredAnimals.slice(0, 10));
  });

  app.get("/animal-types", async (_, res) => {
    const animalTypeInfos: OptionInfo<AnimalType>[] = [
      { type: "chicken", displayName: "Chicken" },
      { type: "cow", displayName: "Cow" },
      { type: "goat", displayName: "Goat" },
      { type: "pig", displayName: "Pig" },
      { type: "sheep", displayName: "Sheep" },
    ];

    res.send(animalTypeInfos);
  });

  app.get("/animal-sort-options", async (req, res) => {
    const animalTypeInfos: OptionInfo<SortByOptions>[] = [
      { type: "age", displayName: "Age" },
      { type: "name", displayName: "Name" },
      { type: "worth", displayName: "Worth" },
    ];

    res.send(animalTypeInfos);
  });
};
