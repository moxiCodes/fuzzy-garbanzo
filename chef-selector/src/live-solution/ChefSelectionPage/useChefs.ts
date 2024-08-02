import axios from "axios";
import { useEffect, useState } from "react";
import { Chef } from "../../types";
import sortBy from "lodash.sortby";

export const useChefs = () => {
  const [chefs, setChefs] = useState<Chef[]>([]);
  useEffect(() => {
    const getChefs = async () => {
      const { data: chefs } = await axios.get<Chef[]>("/available");
      setChefs(sortBy(chefs, ["michelinStars"], ["desc"]).reverse());
    };

    getChefs();
  }, []);

  return chefs;
};
