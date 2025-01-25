export type NightType = "scratch" | "sfc" | "matesfest";

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
export interface ThemeStyles {
  titleBtm?: string;
  titleLeft?: string;
}
export interface NightTheme {
  night: NightType;
  title: string;
  img: string;
  colours: ThemeColours;
  styles?: ThemeStyles;
}
export type NightMapType = {
  scratch: NightTheme;
  sfc: NightTheme;
  matesfest: NightTheme;
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
    styles: {
      titleBtm: "10px",
      titleLeft: "0px",
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
    styles: {
      titleBtm: "0px",
      titleLeft: "0px",
    },
  },
  matesfest: {
    night: "matesfest",
    title: "ALL DAYER BINGO",
    img: "/images/mates-logo.svg",
    colours: {
      bg: "var(--mates-red)",
      text: "var(--mates-black)",
      bingoText: "var(--mates-black)",
      headerText: "var(--mates-orange)",
      headerStroke: "var(--mates-white)",
      bingoSelect: "var(--mates-orange)",
      bingoBg: "var(--mates-white)",
      buttonBg: "var(--mates-blue)",
      buttonStroke: "var(--mates-green)",
    },
    styles: {
      titleBtm: "20px",
      titleLeft: "15px",
    },
  },
};

export const getNightTheme = (night: NightType) => {
  return nightMap[night];
};
