import { renderHook, waitFor } from "@testing-library/react";
import { useAnimals } from "./useAnimals";
import { Animal } from "./types";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

const testAnimals: Animal[] = [
  {
    _id: "6690e34e7be438f9841d2aa1",
    isAlive: true,
    worth: 13.07,
    age: 4,
    name: "Kidd Macdonald",
    gender: "male",
    animalType: "goat",
  },
  {
    _id: "6690e34eb81d830c932a726d",
    isAlive: false,
    worth: 43.9,
    age: 6,
    name: "Tina Delgado",
    gender: "female",
    animalType: "pig",
  },
  {
    _id: "6690e34ec5e044735b487bbd",
    isAlive: false,
    worth: 10.92,
    age: 1,
    name: "Beulah Terrell",
    gender: "female",
    animalType: "chicken",
  },
];

describe("useAnimals with Axios mocked", () => {
  it("with all search fields populates it should return animals and call API correctly", async () => {
    const testName = "Dunc";
    const testOrder = "age";
    const testAnimalType = "pig";

    const axiosMock = new MockAdapter(axios);
    axiosMock.onGet("/animals").reply(200, testAnimals);

    const { result } = renderHook(() =>
      useAnimals({ name: testName, order: testOrder, type: testAnimalType })
    );

    await waitFor(() => expect(result.current).toStrictEqual(testAnimals));
    expect(axiosMock.history.get.length).toEqual(1);
    expect(axiosMock.history.get[0].params).toStrictEqual({
      name: testName,
      order: testOrder,
      type: testAnimalType,
    });
  });

  it("with no search fields populates it should return animals and call API correctly", async () => {
    const axiosMock = new MockAdapter(axios);
    axiosMock.onGet("/animals").reply(200, testAnimals);

    const { result } = renderHook(() => useAnimals({}));

    await waitFor(() => expect(result.current).toStrictEqual(testAnimals));
    expect(axiosMock.history.get.length).toEqual(1);
    expect(axiosMock.history.get[0].params).toStrictEqual({
      name: undefined,
      order: undefined,
      type: undefined,
    });
  });
});
