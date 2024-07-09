import { useState } from "react";
import { EmployeeSearch } from "./EmployeeSearch";
import { EmployeesTable } from "./EmployeesTable";
import { useEmployees } from "./useEmployees";

export const EmployeePageCustomHook = () => {
  const [searchText, setSearchText] = useState("");

  const { employees, isLoading } = useEmployees(searchText);

  return (
    <>
      <EmployeeSearch onSubmitSearch={setSearchText} />
      {isLoading ? (
        <div>Is Loading</div>
      ) : (
        <EmployeesTable employees={employees} />
      )}
    </>
  );
};
