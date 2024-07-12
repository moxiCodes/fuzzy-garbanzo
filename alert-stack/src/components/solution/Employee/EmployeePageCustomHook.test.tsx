import { render, screen } from "@testing-library/react";
import * as hooks from "./useEmployees";
import { EmployeePageCustomHook } from "./EmployeePageCustomHook";
import { testEmployees } from "./testingUtils";
import userEvent from "@testing-library/user-event";

describe("handle useEMployee hook data", () => {
  test("Employee page correctly handles empty array of employees and isLoading=false", async () => {
    jest
      .spyOn(hooks, "useEmployees")
      .mockReturnValue({ isLoading: true, employees: [] });
    const { container } = render(<EmployeePageCustomHook />);

    expect(await screen.findByText("Is Loading")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test("Employee page correctly handles array of employees and isLoading=true", async () => {
    jest
      .spyOn(hooks, "useEmployees")
      .mockReturnValue({ isLoading: false, employees: testEmployees });
    const { container } = render(<EmployeePageCustomHook />);

    expect(await screen.findByRole("table")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});

test("Employee page allows user to change search string", async () => {
  jest
    .spyOn(hooks, "useEmployees")
    .mockReturnValue({ isLoading: false, employees: testEmployees });
  render(<EmployeePageCustomHook />);

  expect(await screen.findByRole("table")).toBeInTheDocument();

  jest.clearAllMocks();

  const useEmployeeMock = jest
    .spyOn(hooks, "useEmployees")
    .mockReturnValue({ isLoading: true, employees: [] });

  userEvent.type(screen.getByRole("textbox"), "searchString{Enter}");

  expect(await screen.findByText("Is Loading")).toBeInTheDocument();
  expect(useEmployeeMock).toHaveBeenCalledTimes(1);
  expect(useEmployeeMock).toHaveBeenCalledWith("searchString");
});
