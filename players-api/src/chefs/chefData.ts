export const jobTitles = [
  "Head Chef",
  "Sous Chef",
  "Executive Chef",
  "Station Chef",
  "Pastry Chef",
  "Sauce Chef",
];
export type ChefJobTitle = (typeof jobTitles)[number];
// https://stackoverflow.com/questions/44497388/typescript-array-to-string-literal-type

export type Chef = {
  id: number;
  name: string;
  jobTitle: ChefJobTitle;
  michelinStars: 0 | 1 | 2 | 3;
  trainingProgress: number;
};

// https://www.typescriptlang.org/docs/handbook/utility-types.html
export type ChefResult = Pick<Chef, "id" | "name" | "jobTitle"> & {
  isSuccess: boolean;
};

export const chefs: Chef[] = [
  {
    id: 1,
    name: "Sharon Quinn",
    jobTitle: "Pastry Chef",
    michelinStars: 1,
    trainingProgress: 0.75,
  },
  {
    id: 2,
    name: "Houston Dixon",
    jobTitle: "Executive Chef",
    michelinStars: 0,
    trainingProgress: 0.2,
  },
  {
    id: 3,
    name: "Ricky Wu",
    jobTitle: "Station Chef",
    michelinStars: 0,
    trainingProgress: 0.3313,
  },
  {
    id: 4,
    name: "Bella Bryant",
    jobTitle: "Head Chef",
    michelinStars: 2,
    trainingProgress: 0.45,
  },
  {
    id: 5,
    name: "Raina Stark",
    jobTitle: "Sous Chef",
    michelinStars: 0,
    trainingProgress: 0.95,
  },
  {
    id: 6,
    name: "Nathaly Mcdaniel",
    jobTitle: "Sous Chef",
    michelinStars: 0,
    trainingProgress: 0.35,
  },
  {
    id: 7,
    name: "Nelson Davila",
    jobTitle: "Executive Chef",
    michelinStars: 1,
    trainingProgress: 1,
  },
  {
    id: 8,
    name: "Hadley Farrell",
    jobTitle: "Pastry Chef",
    michelinStars: 0,
    trainingProgress: 0.25,
  },
  {
    id: 9,
    name: "Owen Beasley",
    jobTitle: "Station Chef",
    michelinStars: 0,
    trainingProgress: 0.135,
  },
  {
    id: 10,
    name: "Raina Stark",
    jobTitle: "Pastry Chef",
    michelinStars: 3,
    trainingProgress: 0.95,
  },
  {
    id: 11,
    name: "Kymani Ortiz",
    jobTitle: "Sauce Chef",
    michelinStars: 0,
    trainingProgress: 0,
  },
  {
    id: 12,
    name: "Cade Stark",
    jobTitle: "Head Chef",
    michelinStars: 2,
    trainingProgress: 1,
  },
  {
    id: 13,
    name: "Easton McConnell",
    jobTitle: "Head Chef",
    michelinStars: 0,
    trainingProgress: 0.3,
  },
  {
    id: 14,
    name: "Nelson Davila",
    jobTitle: "Sauce Chef",
    michelinStars: 0,
    trainingProgress: 0.123,
  },
  {
    id: 15,
    name: "Maria Reeves",
    jobTitle: "Sous Chef",
    michelinStars: 2,
    trainingProgress: 0.7,
  },
];
