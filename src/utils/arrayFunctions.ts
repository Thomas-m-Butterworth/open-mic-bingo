import { BingoType } from "@/store/types";
import { NightType } from "./getNightTheme";

export const shuffleArr = <T>(array: T[]): T[] =>
  array.sort(() => 0.5 - Math.random());

export const parseBingo = (night: NightType, bingo: BingoType[]) => {
  const parsedBingo = bingo.filter((bingo) => bingo.night.includes(night));
  return parsedBingo;
};
