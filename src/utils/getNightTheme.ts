export type NightType = "scratch" | "sfc" | "matesfest" | "swamp" | "danpowell";

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

export interface Promoter {
  name: string;
  night: string;
  website: string;
}
export interface NightTheme {
  night: NightType;
  title: string;
  img: string;
  promoter: Promoter;
  colours: ThemeColours;
  styles: ThemeStyles;
}
export type NightMapType = {
  scratch: NightTheme;
  sfc: NightTheme;
  matesfest: NightTheme;
  swamp: NightTheme;
  danpowell: NightTheme;
};
export const nightMap: NightMapType = {
  scratch: {
    night: "scratch",
    title: "Open Mic Bingo",
    img: "/images/scratch/scratch-logo.svg",
    promoter: {
      name: "(No) Money in the Bank",
      night: "Scratch 'n' Sniff",
      website: "https://nomoneyinthebank.com",
    },
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
    title: "Fruity Dog Bingo",
    promoter: {
      name: "Short For Change",
      night: "Fruity Dog",
      website: "https://instagram.com/shortforchange",
    },
    img: "/images/sfc/sfc-logo.svg",
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
    title: "All Dayer Bingo",
    promoter: {
      name: "(No) Money in the Bank",
      night: "Mates Fest",
      website: "https://nomoneyinthebank.com",
    },
    img: "/images/matesfest/mates-logo.svg",
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
  danpowell: {
    night: "danpowell",
    title: "Dan Powell Set Bingo",
    promoter: {
      name: "(No) Money in the Bank",
      night: "Scratch 'n' sniff",
      website: "https://nomoneyinthebank.com",
    },
    img: "/images/danpowell/danpowell-logo.svg",
    colours: {
      bg: "var(--danpowell-grey)",
      text: "var(--danpowell-black)",
      bingoText: "var(--danpowell-black)",
      headerText: "var(--danpowell-orange)",
      headerStroke: "var(--danpowell-yellow)",
      bingoSelect: "var(--danpowell-orange)",
      bingoBg: "var(--danpowell-white)",
      buttonBg: "var(--danpowell-orange)",
      buttonStroke: "var(--danpowell-yellow)",
    },
    styles: {
      titleBtm: "0px",
      titleLeft: "0px",
    },
  },
  swamp: {
    night: "swamp",
    title: "Open Mic Bingo",
    promoter: {
      name: "Phat Baroque",
      night: "Swamp",
      website: "https://nomoneyinthebank.com",
    },
    img: "/images/swamp/swamp-logo.svg",
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
