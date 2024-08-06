import { render, screen, within } from "@testing-library/react";
import { Chef } from "../../types";
import { ChefsTable } from "./ChefsTable";
import userEvent from "@testing-library/user-event";

const testChefs: Chef[] = [
  {
    id: 4,
    name: "Bella Bryant",
    jobTitle: "Head Chef",
    michelinStars: 2,
    trainingProgress: 0.45,
  },
  {
    id: 12,
    name: "Cade Stark",
    jobTitle: "Head Chef",
    michelinStars: 2,
    trainingProgress: 1,
  },
  {
    id: 13,
    name: "Easton McConnell",
    jobTitle: "Head Chef",
    michelinStars: 0,
    trainingProgress: 0.3,
  },
  {
    id: 8,
    name: "Hadley Farrell",
    jobTitle: "Pastry Chef",
    michelinStars: 0,
    trainingProgress: 0.25,
  },
  {
    id: 2,
    name: "Houston Dixon",
    jobTitle: "Executive Chef",
    michelinStars: 0,
    trainingProgress: 0.2,
  },
];

const clickCheckbox = async (nameRegEx: RegExp) => {
  const bellaBryantRow = screen.getByRole("row", { name: nameRegEx });
  const checkBox = within(bellaBryantRow).getByRole("checkbox");
  await userEvent.click(checkBox);
};

describe("ChefsTable", () => {
  it("should support different renders with disabled Button", () => {
    const { container } = render(
      <ChefsTable
        chefs={testChefs}
        buttonText={"Test me"}
        onSelected={() => undefined}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("should allow the user to click multiple check boxes", async () => {
    const chefsSelectMock = jest.fn();

    render(
      <ChefsTable
        buttonText={"Test"}
        chefs={testChefs}
        onSelected={chefsSelectMock}
      />
    );

    await clickCheckbox(/Bella Bryant/);
    await clickCheckbox(/Cade Stark/);

    const selectButton = screen.getByRole("button");
    await userEvent.click(selectButton);

    expect(chefsSelectMock).toHaveBeenCalledTimes(1);
    expect(chefsSelectMock).toHaveBeenCalledWith([4, 12]);
  });

  it("should allow the user to click snd unclick check boxes", async () => {
    const chefsSelectMock = jest.fn();

    render(
      <ChefsTable
        buttonText={"Test"}
        chefs={testChefs}
        onSelected={chefsSelectMock}
      />
    );

    await clickCheckbox(/Bella Bryant/);
    await clickCheckbox(/Cade Stark/);
    await clickCheckbox(/Easton McConnell/);
    await clickCheckbox(/Cade Stark/);

    const selectButton = screen.getByRole("button");
    await userEvent.click(selectButton);

    expect(chefsSelectMock).toHaveBeenCalledTimes(1);
    expect(chefsSelectMock).toHaveBeenCalledWith([4, 13]);
  });
});
