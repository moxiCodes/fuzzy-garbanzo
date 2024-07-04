import { getFullName } from "../Player/getFullName";

type Name = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type MyComponentProps = {
  name: Name;
  location: string;
  isEmployed: boolean;
};

export function MyComponent({ name, location, isEmployed }: MyComponentProps) {
  return (
    <>
      <div>{getFullName(name.firstName, name.lastName)}</div>
      <div>Location: {location}</div>
      <div>IsEmployed?: {isEmployed ? "Yes!" : "No"}</div>
    </>
  );
}
