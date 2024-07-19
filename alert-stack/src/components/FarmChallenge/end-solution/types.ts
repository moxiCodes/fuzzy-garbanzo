// Union literals because types should always be constrained as much as possible
// https://www.codecademy.com/learn/learn-typescript/modules/learn-typescript-union-types/cheatsheet
// If someting can only return 5 values, its type should not be "string"
export type AnimalType = "chicken" | "cow" | "goat" | "pig" | "sheep";
export type SortByOptions = "age" | "name" | "worth";

// This is a "helper type" for when we have a union literal with a display name (animal type + sort By Opyions)
export type OptionInfo<T> = {
  type: T;
  displayName: string;
};

// Modelling an animal (and getting more use out of out AnimalType)
export type Animal = {
  _id: string;
  isAlive: boolean;
  worth: number;
  age: number;
  name: string;
  gender: "male" | "female";
  animalType: AnimalType;
};
