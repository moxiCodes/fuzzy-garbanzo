export type AnimalType = "chicken" | "cow" | "goat" | "pig" | "sheep";

export type SortByOptions = "age" | "name" | "worth";

export type OptionInfo<T> = {
  type: T;
  displayName: string;
};

export type AnimalOptionType = OptionInfo<AnimalType>;
