import axios from "axios";
import { useEffect, useState } from "react";
import { Chef } from "../../types";

export const useChefs = () => {
  const [chefs, setChefs] = useState<Chef[]>([]);
  useEffect(() => {
    const getChefs = async () => {
      const { data: chefs } = await axios.get<Chef[]>("/available");
      setChefs(chefs);
    };

    getChefs();
  }, []);

  return chefs;
};
