import { getFullName, getFullNameOtherVersion } from "./getFullName";

//This is the basic way to test (see below for the more advanced/compact way)

test("Get full name with no middle name", () => {
  const result = getFullName("Donald", "Duck");

  expect(result).toBe("Donald Duck");
});

test("Get full name with a middle name", () => {
  const result = getFullName("Donald", "Duck", "Arnold");

  expect(result).toBe("Donald Arnold Duck");
});

test("Get full name with a middle name of spaces", () => {
  const result = getFullName("Donald", "Duck", "    ");

  expect(result).toBe("Donald Duck");
});

//This is  more compact way to test the above
test.each<{
  firstName: string;
  lastName: string;
  middleName?: string;
  expected: string;
}>([
  { firstName: "Donald", lastName: "Duck", expected: "Donald Duck" },
  {
    firstName: "Donald",
    lastName: "Duck",
    middleName: "Arnold",
    expected: "Donald Arnold Duck",
  },
  {
    firstName: "Donald",
    lastName: "Duck",
    middleName: "   ",
    expected: "Donald Duck",
  },
])(
  "Test all cases of getFullName ($firstName, $middleName, $lastName)",
  ({ firstName, lastName, middleName, expected }) => {
    const result = getFullNameOtherVersion(firstName, lastName, middleName);

    expect(result).toBe(expected);
  }
);
