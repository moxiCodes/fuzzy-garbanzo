import { useState } from "react";
import { EmployeeSearch } from "./EmployeeSearch";
import { EmployeesTable } from "./EmployeesTable";
import { useFetch } from "./useFetch";
import { Employee } from "./Employee";

export const EmployeePage = () => {
  const [searchText, setSearchText] = useState("");

  const { isLoading, items } = useFetch<Employee>(
    `/employees?search=${searchText}`
  );

  return (
    <>
      <EmployeeSearch onSubmitSearch={setSearchText} />
      {isLoading ? <div>Is Loading</div> : <EmployeesTable employees={items} />}
    </>
  );
};
