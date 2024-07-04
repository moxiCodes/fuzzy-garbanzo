import { render, screen, within } from "@testing-library/react";
import { MessageAlert } from "../Alert/Alert";
import { AlertStack } from "./AlertStack";
import userEvent from "@testing-library/user-event";

const testAlerts: MessageAlert[] = [
  { message: "Test info alert" },
  { message: "test error alert", type: "error" },
  { message: "test error alert warning", type: "warning" },
  { message: "test error alert success", type: "success" },
];

test("alert stack with array of alerts", () => {
  const { container } = render(<AlertStack alerts={testAlerts} />);

  expect(container).toMatchSnapshot();
});

test("Closing an alert", async () => {
  const warningAlertIndex = 2;

  render(<AlertStack alerts={testAlerts} />);

  const alerts = screen.getAllByRole("alert");

  const alertButton = within(alerts[warningAlertIndex]).getByRole("button");
  await userEvent.click(alertButton);

  const afterClickAlerts = screen.getAllByRole("alert");
  expect(afterClickAlerts.length).toEqual(3);
  expect(screen.queryByText("test error alert warning")).toBeNull();
});
