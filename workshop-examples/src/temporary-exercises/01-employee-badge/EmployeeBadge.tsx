import { getFullName } from "../../solutions/01-non-component-funcs/get-full-name/getFullName";
import { Employee } from "./Employee";

export const EmployeeBadge = ({
  details: { firstName, middleName, lastName },
  email,
  imagePath,
  jobTitle,
  team,
}: Employee) => {
  const fullName = getFullName(firstName, lastName, middleName);
  return (
    <>
      <img width={50} alt={fullName} src={imagePath} />
      <h2>{fullName}</h2>
      <a href={`mailto:${email}`}>{email}</a>
      <div>{jobTitle}</div>
      <div>{team}</div>
    </>
  );
};
