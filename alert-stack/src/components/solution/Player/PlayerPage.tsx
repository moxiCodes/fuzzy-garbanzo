import { PlayerBadge } from "./PlayerBadge";
import { usePlayers } from "./usePlayer";

export const PlayerPage = () => {
  const { isInProgress, players } = usePlayers();

  return (
    <>
      {isInProgress ? (
        <div>In Progress</div>
      ) : (
        players.map((player) => <PlayerBadge key={player.id} {...player} />)
      )}
    </>
  );
};
