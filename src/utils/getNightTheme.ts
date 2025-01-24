export type NightType = "scratch" | "sfc";

export interface ThemeColours {
  bg: string;
  text: string;
  bingoText: string;
  headerText: string;
  headerStroke: string;
  bingoSelect: string;
  bingoBg: string;
  buttonBg: string;
  buttonStroke: string;
}
export interface NightTheme {
  night: NightType;
  title: string;
  img: string;
  colours: ThemeColours;
}
export type NightMapType = {
  scratch: NightTheme;
  sfc: NightTheme;
};
export const nightMap: NightMapType = {
  scratch: {
    night: "scratch",
    title: "OPEN MIC BINGO",
    img: "/images/scratch-logo.svg",
    colours: {
      bg: "var(--scratch-black)",
      text: "var(--scratch-black)",
      bingoText: "var(--scratch-pink)",
      headerText: "var(--scratch-red)",
      headerStroke: "var(--scratch-yellow)",
      bingoSelect: "var(--scratch-pink)",
      bingoBg: "var(--scratch-white)",
      buttonBg: "var(--scratch-black)",
      buttonStroke: "var(--sfc-white)",
    },
  },
  sfc: {
    night: "sfc",
    title: "FRUITY DOG BINGO",
    img: "/images/sfc-logo.svg",
    colours: {
      bg: "var(--sfc-deep-purple)",
      text: "var(--sfc-black)",
      bingoText: "var(--sfc-black)",
      headerText: "var(--sfc-white)",
      headerStroke: "var(--sfc-black)",
      bingoSelect: "var(--sfc-light-purple)",
      bingoBg: "var(--sfc-white)",
      buttonBg: "var(--sfc-med-purple)",
      buttonStroke: "var(--sfc-white)",
    },
  },
};

export const getNightTheme = (night: NightType) => {
  return nightMap[night];
};
