import { render } from "@testing-library/react";
import { EmployeesTable } from "./EmployeesTable";
import { testEmployees } from "./testingUtils";

test("With no employee data", () => {
  const { container } = render(<EmployeesTable employees={[]} />);

  expect(container).toMatchSnapshot();
});

test("With some employee data", () => {
  const { container } = render(<EmployeesTable employees={testEmployees} />);

  expect(container).toMatchSnapshot();
});
