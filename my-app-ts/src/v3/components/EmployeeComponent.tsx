type Employee = {
  firstName: string;
  middleName?: string;
  surname: string;
  isManager: boolean;
  comment: string;
  level?: number;
  location: {
    name: string;
    postcode: string;
  };
};

export const EmployeeComponent = () => {
  const staffMember: Employee = {
    firstName: "Duncan",
    surname: "Edwards",
    isManager: true,
    comment: "THis is internal and not displayed",
    location: {
      name: "Bristol",
      postcode: "BS1 3IE",
    },
  };

  const {
    firstName,
    isManager,
    level,
    surname: lastName,
    location: { name: locationName, postcode },
  } = staffMember;

  return (
    <>
      <div>
        `{firstName} {lastName}`
      </div>
      <div>{level ?? "-"}</div>
      <div>{isManager}</div>
      <div>{locationName}</div>
      <div>{postcode}</div>
    </>
  );
};
