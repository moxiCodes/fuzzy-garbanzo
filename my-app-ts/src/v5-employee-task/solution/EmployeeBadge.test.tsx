/* eslint-disable testing-library/no-debugging-utils */
import { render } from "@testing-library/react";
import { EmployeeBadge } from "./EmployeeBadge";
import { Employee } from "../Employee";

const testEmployees: Employee[] = [
  {
    details: {
      firstName: "Duncan",
      middleName: "Andrews",
      lastName: "Edwards",
    },
    imagePath: "images/duncan.jpg",
    jobTitle: "Junior Developer",
    email: "duncan.edwards@lloydsbanking.com",
    cohort: 12,
    team: "Client Servicing and Engagement",
  },
  {
    details: {
      firstName: "Joan",
      lastName: "Smith",
    },
    imagePath: "images/joan.jpg",
    jobTitle: "Seniror Developer",
    email: "joan.smith@lloydsbanking.com",
    team: "Commercial Lending Platform",
  },
];

test.each<Employee>(testEmployees)("Renders an employee badge", (employee) => {
  const { container } = render(<EmployeeBadge {...employee} />);

  expect(container).toMatchSnapshot();
});
