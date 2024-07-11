import { render, screen } from "@testing-library/react";
import { MyFirstComponent } from "./MyFirstComponent-part2";
import { MyFirstComponentFunction } from "./MyFirstComponent-part2";

describe("non snapshot testing", () => {
  // 2 tests, less efficient

  test("with hello world message", () => {
    const testMessage = "hello world!";

    render(<MyFirstComponent message={testMessage} />);

    const headerElement = screen.getByRole("heading", {
      level: 2,
      name: testMessage,
    });
    expect(headerElement).toBeInTheDocument();
  });

  test("with different message", () => {
    const testMessage = "different!";

    render(<MyFirstComponent message={testMessage} />);

    const headerElement = screen.getByRole("heading", {
      level: 2,
      name: testMessage,
    });
    expect(headerElement).toBeInTheDocument();
  });

  // The same thing in one test

  test.each(["hello world!", "different!"])(
    "test with multiple messages (message=%s)",
    (testMessage) => {
      render(<MyFirstComponentFunction message={testMessage} />);

      const headerElement = screen.getByRole("heading", {
        level: 2,
        name: testMessage,
      });
      expect(headerElement).toBeInTheDocument();
    }
  );
});

describe("snapshot testing", () => {
  test.each(["hello world!", "different!"])(
    "test with multiple messages (message=%s)",
    (testMessage) => {
      const { container } = render(
        <MyFirstComponentFunction message={testMessage} />
      );

      expect(container).toMatchSnapshot();
    }
  );
});
