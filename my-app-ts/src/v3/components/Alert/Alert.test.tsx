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
  const { container } = render(
    <Alert id={1} message={testMessage} type={alertType} />
  );

  expect(container).toMatchSnapshot();
});
