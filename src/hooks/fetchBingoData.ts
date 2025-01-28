export const fetchBingoData = async () => {
  const gameUrl = `${process.env.GAMES_API}/bingo`;
  const gameFetch = await fetch(gameUrl);
  const gameData = gameFetch.json();
  return gameData;
};
