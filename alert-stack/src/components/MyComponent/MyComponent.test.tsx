/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react";
import { MyComponent } from "./MyComponent";

test("Render a basic my component", () => {
  const { container } = render(
    <MyComponent
      isEmployed={true}
      location="Bristol"
      name={{ firstName: "Duncan", lastName: "Edwards" }}
    />
  );

  expect(container).toMatchSnapshot();

  //   expect(screen.getByText("Duncan Edwards")).toBeInTheDocument();
  //   expect(screen.getByText("Location: Bristol")).toBeInTheDocument();
  //   expect(screen.getByText("IsEmployed: Yes!")).toBeInTheDocument();
});
