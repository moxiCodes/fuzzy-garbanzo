import { getFullName } from "./getFullName";

export type Player = {
  id: number;
  firstName: string;
  lastName: string;
  team: string;
  battingAverage: number;
  bowlingAverage: number;
};

export function PlayerBadge({
  battingAverage,
  firstName,
  lastName,
  team,
}: Player) {
  return (
    <div style={{ backgroundColor: "purple", marginTop: 20 }}>
      <div>{getFullName(firstName, lastName)}</div>
      <div>{team}</div>
      <div>Batting Average: {battingAverage}</div>
    </div>
  );
}
