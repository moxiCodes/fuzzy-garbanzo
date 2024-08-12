import express from "express";
import employees from "./employees.json";
import cors from "cors";
import { addAnimalsEndpoint } from "./farm-challenge/farmChallenge";
import { addChefsEndpoints } from "./chefs/chefs";
import bodyParser from "body-parser";
import { addAccountsEndpoints } from "./account/account";

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());

app.get("/players", async (req, res) => {
  await sleep(1000);
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

app.get("/employees", async (req, res) => {
  await sleep(20);
  const search = req.query.search as string | undefined;

  const employeesWithId = employees.map((employee, index) => ({
    id: index + 1,
    ...employee,
  }));

  const finalEmployees = search
    ? employeesWithId
        .filter(
          (e) =>
            e.firstName.includes(search) ||
            e.surName.includes(search) ||
            e.address.includes(search)
        )
        .slice(0, 10)
    : employeesWithId.slice(0, 10);

  res.send(finalEmployees);
});

addAnimalsEndpoint(app);
addChefsEndpoints(app);
addAccountsEndpoints(app);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

const sleep = (milliseconds: number) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));
