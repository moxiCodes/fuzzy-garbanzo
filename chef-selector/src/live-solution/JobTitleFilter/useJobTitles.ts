import { useEffect, useState } from "react";
import { ChefJobTitle } from "../../types";
import axios from "axios";

export const useJobTitles = () => {
  const [jobTitles, setJobTitles] = useState<ChefJobTitle[]>([]);

  useEffect(() => {
    const getChefs = async () => {
      const { data } = await axios.get<ChefJobTitle[]>("/job-titles");
      setJobTitles(data);
    };
    getChefs();
  }, []);

  return jobTitles;
};
