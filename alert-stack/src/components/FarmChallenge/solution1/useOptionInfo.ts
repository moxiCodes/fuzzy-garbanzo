import { useEffect, useState } from "react";
import { OptionInfo } from "./types";
import axios from "axios";

export const useOptionInfo = <T>(url: string) => {
  const [optionInfos, setOptionInfos] = useState<OptionInfo<T>[]>([]);

  useEffect(() => {
    const getOptionInfos = async () => {
      const { data } = await axios.get<OptionInfo<T>[]>(url);
      setOptionInfos(data);
    };

    getOptionInfos();
  }, [url]);

  return optionInfos;
};
