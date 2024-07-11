import { render, screen } from "@testing-library/react";
import { EmployeeSearch } from "./EmployeeSearch";
import userEvent from "@testing-library/user-event";

test("User enters search and clicks Search button", async () => {
  const onSubmitSearchMock = jest.fn();

  render(<EmployeeSearch onSubmitSearch={onSubmitSearchMock} />);

  const textBox = screen.getByRole("textbox");
  await userEvent.type(textBox, "hello");

  await userEvent.click(screen.getByRole("button"));

  expect(onSubmitSearchMock).toHaveBeenCalledTimes(1);
  expect(onSubmitSearchMock).toHaveBeenCalledWith("hello");
});

test("User enters search and clicks Enter key", async () => {
  const onSubmitSearchMock = jest.fn();

  render(<EmployeeSearch onSubmitSearch={onSubmitSearchMock} />);

  const textBox = screen.getByRole("textbox");
  await userEvent.type(textBox, "goodbye{enter}");

  expect(onSubmitSearchMock).toHaveBeenCalledTimes(1);
  expect(onSubmitSearchMock).toHaveBeenCalledWith("goodbye");
});
