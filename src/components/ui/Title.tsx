import Image from "next/image";
import styled from "styled-components";

export const TitleContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 320px;
  height: 160px;
`;

export const TitleText = styled.h1`
  font-family: var(--title-font);
  font-size: 2.5rem;
  letter-spacing: 1.6px;
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  background: transparent;
  color: var(--scratch-red);
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
    -webkit-text-stroke: 4px var(--background);
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
    -webkit-text-stroke: 6px var(--scratch-yellow);
    z-index: -2;
  }
`;


export interface TitleProps {
    title: string;
}

export const Title = ({title}: TitleProps) => {
    return (
        <TitleContainer>
            <Image
                src={'/images/scratch-logo.png'}
                width={320}
                height={139}
                placeholder="blur"
                blurDataURL="/images/scratch-logo.png"
                alt="Logo for Scratch 'n' Sniff open mic comedy"
                style={{position: 'absolute', top: 0, bottom: 0}}
            />
            <TitleText data-text={title}>{title}</TitleText>
        </TitleContainer>
    )
}