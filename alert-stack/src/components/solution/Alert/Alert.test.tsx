import userEvent from "@testing-library/user-event";
import { Alert, AlertType } from "./Alert";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";

test.each<AlertType | undefined>([
  "error",
  "warning",
  "info",
  "success",
  undefined,
])("render test %s", (alertType) => {
  const testMessage = "This is my message now";
  const { container } = render(
    <Alert id={1} message={testMessage} type={alertType} />
  );

  expect(container).toMatchSnapshot();
});

test("Onclosed is fired corectly", async () => {
  const closedMock = jest.fn();

  render(
    <Alert id={8} message={"Another test message"} onClosed={closedMock} />
  );

  const button = screen.getByRole("button");
  await userEvent.click(button);

  expect(closedMock).toHaveBeenCalledTimes(1);
  expect(closedMock).toHaveBeenNthCalledWith(1, 8);
});
