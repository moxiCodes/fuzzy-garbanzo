import { addTwoNumbersConstExplicit } from "./addTwoNumbers";

test("Add two numbers", () => {
  const result = addTwoNumbersConstExplicit(4, 7);

  expect(result).toBe(11);
});
