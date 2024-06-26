import { Alert, AlertType } from "./Alert";
import { render, screen } from "@testing-library/react";

test.each<AlertType | undefined>([
  "error",
  "warning",
  "info",
  "success",
  undefined,
])("render test %s", (alertType) => {
  const testMessage = "This is my message now";
  render(<Alert message={testMessage} type={alertType} />);

  const alert = screen.getByText(testMessage);
  expect(alert).toMatchSnapshot();
});
