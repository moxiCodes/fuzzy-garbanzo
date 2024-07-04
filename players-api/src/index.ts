import express from "express";

const app = express();
const port = 4000;

app.get("/players", async (req, res) => {
  await sleep(1500);
  res.header("Access-Control-Allow-Origin", "*");
  res.send([
    {
      id: 1,
      firstName: "Sean",
      lastName: "Abbott",
      team: "Australia",
      battingAverage: 24.6,
      bowlingAverage: 30.93,
    },
    {
      id: 2,
      firstName: "Pat",
      lastName: "Cummins",
      team: "Australia",
      battingAverage: 19.16,
      bowlingAverage: 23.22,
    },
    {
      id: 3,
      firstName: "Moeen",
      lastName: "Ali",
      team: "England",
      battingAverage: 28.12,
      bowlingAverage: 37.31,
    },
    {
      id: 4,
      firstName: "Mitchell",
      lastName: "Marsh",
      team: "Australia",
      battingAverage: 28.12,
      bowlingAverage: 37.31,
    },
  ]);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

const sleep = (milliseconds: number) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));
