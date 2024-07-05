import axios from "axios";
import { useEffect, useState } from "react";
import { Player } from "./PlayerBadge";

export const usePlayers = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [isInProgress, setInProgress] = useState(true);

  useEffect(() => {
    const getPlayers = async () => {
      const { data } = await axios.get<Player[]>("/players");
      setPlayers(data);
      setInProgress(false);
    };
    getPlayers();
  }, []);

  return { isInProgress, players };
};
