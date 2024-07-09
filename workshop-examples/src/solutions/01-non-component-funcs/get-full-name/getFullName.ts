export const getFullName = (
  firstName: string,
  lastName: string,
  middleName?: string
) => {
  return `${firstName} ${
    middleName?.trim() ? `${middleName.trim()} ` : ""
  }${lastName}`;
};

export const getFullNameOtherVersion = (
  firstName: string,
  lastName: string,
  middleName?: string
) => {
  return (
    middleName?.trim()
      ? [firstName, middleName, lastName]
      : [firstName, lastName]
  ).join(" ");
};

export const getFullNameObjectParam = ({
  firstName,
  lastName,
  middleName,
}: {
  firstName: string;
  lastName: string;
  middleName?: string;
}) => {
  return `${firstName} ${
    middleName?.trim() ? `${middleName.trim()} ` : ""
  }${lastName}`;
};
