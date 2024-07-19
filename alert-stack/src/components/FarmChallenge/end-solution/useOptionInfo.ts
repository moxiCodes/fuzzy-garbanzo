import { useEffect, useState } from "react";
import { OptionInfo } from "./types";
import axios from "axios";

//This hook will handle any api endpoint that returns data of the value:
/*
{
  type: T;
  displayName: string;
}
*/
export const useOptionInfo = <T>(url: string) => {
  const [optionInfos, setOptionInfos] = useState<OptionInfo<T>[]>([]);

  useEffect(() => {
    const getOptionInfos = async () => {
      const { data } = await axios.get<OptionInfo<T>[]>(url);
      setOptionInfos(data);
    };

    getOptionInfos();
  }, [url]);
  // In reality the url won't change, but if it did, the fetch statement very much depends on it so it would be made again

  return optionInfos;
};
