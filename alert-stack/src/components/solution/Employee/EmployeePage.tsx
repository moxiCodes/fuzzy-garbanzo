import { useState } from "react";
import { EmployeeSearch } from "./EmployeeSearch";
import { EmployeesTable } from "./EmployeesTable";
import { Employee } from "./Employee";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const EmployeePage = () => {
  const [searchText, setSearchText] = useState("");

  const {
    isLoading,
    isSuccess,
    data: result,
  } = useQuery({
    queryKey: ["employees", searchText],
    queryFn: () => axios.get<Employee[]>(`/employees?search=${searchText}`),
  });

  return (
    <>
      <EmployeeSearch onSubmitSearch={setSearchText} />
      {isLoading ? (
        <div>Is Loading</div>
      ) : (
        isSuccess && <EmployeesTable employees={result.data} />
      )}
    </>
  );
};
