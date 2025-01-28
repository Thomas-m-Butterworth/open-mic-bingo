export const fetchBingoData = async () => {
  const gameUrl = "https://nmitb-games-api.vercel.app/api/games/bingo";
  const gameFetch = await fetch(gameUrl);
  const gameData = gameFetch.json();
  return gameData;
};
