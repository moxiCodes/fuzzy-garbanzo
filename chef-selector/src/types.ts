const jobTitles = [
  "Head Chef",
  "Sous Chef",
  "Executive Chef",
  "Station Chef",
  "Pastry Chef",
  "Sauce Chef",
] as const;
export type ChefJobTitle = (typeof jobTitles)[number];

export type MichelinStars = 0 | 1 | 2 | 3;

export type Chef = {
  id: number;
  name: string;
  jobTitle: ChefJobTitle;
  michelinStars: MichelinStars;
  trainingProgress: number;
};

export type ChefResult = Pick<Chef, "id" | "name" | "jobTitle"> & {
  isSuccess: boolean;
};
