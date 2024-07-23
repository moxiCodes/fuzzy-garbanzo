import { render, screen } from "@testing-library/react";
import { NameSearch } from "./NameSearch";
import userEvent from "@testing-library/user-event";

describe("NameSearch", () => {
  it("should respond to passed in name value", async () => {
    const nameTest = "test";

    //If I'm not using a mock I can pass in a null function for the callback
    render(<NameSearch name={nameTest} onChange={() => null} />);

    //Expect value to be what I passed in
    expect(
      screen.getByLabelText("Name").attributes.getNamedItem("value")?.value
    ).toEqual(nameTest);
  });

  it("should reflect typed characters", async () => {
    const mockOnChange = jest.fn();
    const typedValue = "test";

    render(<NameSearch name={""} onChange={mockOnChange} />);

    await userEvent.type(screen.getByLabelText("Name"), typedValue);

    //As state is externally managed, the name is never updated and each letter is seperate
    expect(mockOnChange).toHaveBeenCalledTimes(4);
    expect(mockOnChange).toHaveBeenNthCalledWith(1, "t");
    expect(mockOnChange).toHaveBeenNthCalledWith(2, "e");
    expect(mockOnChange).toHaveBeenNthCalledWith(3, "s");
    expect(mockOnChange).toHaveBeenNthCalledWith(4, "t");
  });
});
