/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react";
import { MyComponent, MyComponentProps } from "./MyComponent";

const employees: MyComponentProps[] = [
  {
    name: { firstName: "Duncan", lastName: "Edwards" },
    isEmployed: true,
    location: "Bristol",
  },
  {
    name: { firstName: "Jane", lastName: "Smith" },
    isEmployed: false,
    location: "London",
  },
];

test.each<MyComponentProps>(employees)(
  "Render a basic my component",
  (employee) => {
    const { container } = render(<MyComponent {...employee} />);

    expect(container).toMatchSnapshot();
  }
);
