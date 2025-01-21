"use client";

import { useSearchParams } from "next/navigation";
import { Bingo } from "@/components";
import { PageContainer } from "@/components/ui";
import { Title } from "@/components/ui/Title";
import { useEffect, useState } from "react";
import styled from "styled-components";

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

export const LoadingSpinner = styled.div`
  position: fixed;
  top: 40%;
  width: 150px;
  height: 150px;
  transform: translate(-50%, -50%);
  animation: spin 3s ease-in-out infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-image: url("/icon.png");
  background-size: cover;
  background-position: center;
  box-sizing: border-box;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();
  const nightId = (searchParams.get("night") as NightType) || "scratch";
  const night: NightTheme = nightMap[nightId] || nightMap["scratch"];

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return (
      <PageContainer>
        <LoadingSpinner />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Title night={night} />
      <Bingo />
    </PageContainer>
  );
}
