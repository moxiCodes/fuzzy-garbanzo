import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { AnimalType, OptionInfo } from "./types";
import { AnimalTypeSelect } from "./AnimalTypeSelect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as hooks from "./useOptionInfo";

const testAnimalTypes: OptionInfo<AnimalType>[] = [
  {
    type: "chicken",
    displayName: "Chicken",
  },
  {
    type: "cow",
    displayName: "Cow",
  },
  {
    type: "goat",
    displayName: "Goat",
  },
  {
    type: "pig",
    displayName: "Pig",
  },
  {
    type: "sheep",
    displayName: "Sheep",
  },
];

/// Helper function that makes sure that the select box contains the exact list
/// that I'm looking for (including the None option)
const expectOptionsToMatchTestData = (options: HTMLElement[]) => {
  const actualOptions = options.map((option) => ({
    type: option.attributes.getNamedItem("data-value")?.value,
    displayName: option.textContent,
  }));

  expect(actualOptions).toStrictEqual([
    { type: "", displayName: "None" },
    ...testAnimalTypes,
  ]);
};

describe("Test AnimalTypeSelect with Axios data", () => {
  beforeAll(() => {
    // We use this in all of the Axios tests so we just do this once per test grouping
    var axiosMock = new MockAdapter(axios);
    axiosMock.onGet("/animal-types").reply(200, testAnimalTypes);
  });

  it("should show animal type list from REST API", async () => {
    render(
      <AnimalTypeSelect animalType={""} onAnimalTypeChanged={() => null} />
    );

    const animalTypeSelect = await screen.findByLabelText("Animal Type");
    await userEvent.click(animalTypeSelect);

    expectOptionsToMatchTestData(await screen.findAllByRole("option"));
  });

  it("Should call the onAnimalTypeChanged callback on selection", async () => {
    const onAnimalTypeChangedMock = jest.fn();
    render(
      <AnimalTypeSelect
        animalType={""}
        onAnimalTypeChanged={onAnimalTypeChangedMock}
      />
    );

    await userEvent.click(await screen.findByLabelText("Animal Type"));
    await userEvent.click(screen.getByRole("option", { name: "Pig" }));

    expect(onAnimalTypeChangedMock).toHaveBeenCalledTimes(1);
    expect(onAnimalTypeChangedMock).toHaveBeenNthCalledWith(1, "pig");
  });
});

describe("Test AnimalTypeSelect by mocking useOptionInfo", () => {
  it("should show animal type list from mocked hook", async () => {
    // Because we mock the hook we don't need to mock Axios
    jest.spyOn(hooks, "useOptionInfo").mockReturnValue(testAnimalTypes);

    render(
      <AnimalTypeSelect animalType={""} onAnimalTypeChanged={() => null} />
    );
    const animalTypeSelect = await screen.findByLabelText("Animal Type");
    await userEvent.click(animalTypeSelect);
    expectOptionsToMatchTestData(await screen.findAllByRole("option"));
  });
});
