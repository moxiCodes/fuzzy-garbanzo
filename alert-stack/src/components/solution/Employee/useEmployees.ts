import axios from "axios";
import { useEffect, useState } from "react";
import { Employee } from "./Employee";

export const useEmployees = (searchText: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const getEmployees = async () => {
      setIsLoading(true);
      const { data } = await axios.get<Employee[]>(
        `/employees?search=${searchText}`
      );
      setEmployees(data);
      setIsLoading(false);
    };
    getEmployees();
  }, [searchText]);

  return { isLoading, employees };
};
