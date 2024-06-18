import express from "express";

const app = express();
const port = 4000;

app.get("/players", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send([
    {
      firstName: "Sean",
      lastName: "Abbott",
      team: "Australia",
      battingAverage: 24.6,
      bowlingAverage: 30.93,
    },
    {
      firstName: "Pat",
      lastName: "Cummins",
      team: "Australia",
      battingAverage: 19.16,
      bowlingAverage: 23.22,
    },
    {
      firstName: "Moeen",
      lastName: "Ali",
      team: "England",
      battingAverage: 28.12,
      bowlingAverage: 37.31,
    },
  ]);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
