import { useState } from "react";
import { Chef } from "../../types";
import { ChefsTable } from "../ChefsTable/ChefsTable";

const testChefs: Chef[] = [
  {
    id: 4,
    name: "Bella Bryant",
    jobTitle: "Head Chef",
    michelinStars: 2,
    trainingProgress: 0.45,
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
    id: 8,
    name: "Hadley Farrell",
    jobTitle: "Pastry Chef",
    michelinStars: 0,
    trainingProgress: 0.25,
  },
  {
    id: 2,
    name: "Houston Dixon",
    jobTitle: "Executive Chef",
    michelinStars: 0,
    trainingProgress: 0.2,
  },
  {
    id: 11,
    name: "Kymani Ortiz",
    jobTitle: "Sauce Chef",
    michelinStars: 0,
    trainingProgress: 0,
  },
  {
    id: 15,
    name: "Maria Reeves",
    jobTitle: "Sous Chef",
    michelinStars: 2,
    trainingProgress: 0.7,
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
    id: 14,
    name: "Nelson Davila",
    jobTitle: "Sauce Chef",
    michelinStars: 0,
    trainingProgress: 0.123,
  },
  {
    id: 9,
    name: "Owen Beasley",
    jobTitle: "Station Chef",
    michelinStars: 0,
    trainingProgress: 0.135,
  },
  {
    id: 5,
    name: "Raina Stark",
    jobTitle: "Sous Chef",
    michelinStars: 0,
    trainingProgress: 0.95,
  },
  {
    id: 10,
    name: "Raina Stark",
    jobTitle: "Pastry Chef",
    michelinStars: 3,
    trainingProgress: 0.95,
  },
  {
    id: 3,
    name: "Ricky Wu",
    jobTitle: "Station Chef",
    michelinStars: 0,
    trainingProgress: 0.3313,
  },
  {
    id: 1,
    name: "Sharon Quinn",
    jobTitle: "Pastry Chef",
    michelinStars: 1,
    trainingProgress: 0.75,
  },
];

export const ChefSelectionPage = () => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  return (
    <>
      <h1>Select Chefs</h1>
      <ChefsTable
        chefs={testChefs}
        buttonText={"Select"}
        onSelected={setSelectedIds}
      />
      {/* <ChefsTable chefs={testChefs} buttonText={"Deselect"} /> */}
    </>
  );
};
