export type NightType = "scratch" | "sfc";
export interface NightTheme {
  night: NightType;
  title: string;
  img: string;
}
export type NightMapType = {
  scratch: NightTheme;
  sfc: NightTheme;
};
export const nightMap: NightMapType = {
  scratch: {
    night: "scratch",
    title: "OPEN MIC BINGO",
    img: "/images/scratch-logo.png",
  },
  sfc: {
    night: "sfc",
    title: "FRUITY DOG BINGO",
    img: "/images/sfc-logo.png",
  },
};

export const getNightTheme = (night: NightType) => {
  return nightMap[night];
};
