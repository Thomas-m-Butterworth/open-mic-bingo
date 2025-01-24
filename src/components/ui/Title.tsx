import { useBingoStore } from "@/store/bingoStore";
import { NightTheme, NightType } from "@/utils";
import Image from "next/image";
import styled from "styled-components";

export interface TitleTextProps {
  night: NightType;
}

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin-top: 16px;
  margin-bottom: 8px;
  width: 320px;
  height: 180px;
`;

export const TitleText = styled.h1<{ night: NightType }>`
  font-family: var(--title-font);
  font-size: 2.5rem;
  letter-spacing: 1.6px;
  position: absolute;
  bottom: ${({ theme }) => (theme.night === "scratch" ? "16px" : 0)};
  background: transparent;
  color: ${({ theme }) => theme.colours.headerText};
  z-index: 0;
  text-align: center;
  width: 100%;

  &::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    color: transparent;
    -webkit-text-stroke: 4px #000;
    z-index: -1;
  }

  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    color: transparent;
    -webkit-text-stroke: 6px
      ${(props) =>
        props.night == "scratch"
          ? "var(--scratch-yellow)"
          : "var(--scratch-black)"};
    z-index: -2;
  }
`;

export interface TitleProps {
  night: NightTheme;
}

export const Title = () => {
  const { night } = useBingoStore();
  return (
    <TitleContainer>
      <Image
        src={night.img}
        width={320}
        height={139}
        placeholder="blur"
        blurDataURL={night.img}
        alt="Logo for Scratch 'n' Sniff open mic comedy"
      />
      <TitleText data-text={night.title} night={night.night}>
        {night.title}
      </TitleText>
    </TitleContainer>
  );
};
