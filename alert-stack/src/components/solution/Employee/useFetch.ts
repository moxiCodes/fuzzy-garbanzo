import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = <T>(url: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<T[]>([]);

  useEffect(() => {
    const getItems = async () => {
      setIsLoading(true);
      const { data } = await axios.get<T[]>(url);
      setItems(data);
      setIsLoading(false);
    };
    getItems();
  }, [url]);

  return { isLoading, items };
};
