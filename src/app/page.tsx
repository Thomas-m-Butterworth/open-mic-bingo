"use client";

import { useSearchParams } from "next/navigation";
import { Bingo } from "@/components";
import { LoadingSpinner, PageContainer } from "@/components/ui";
import { Title } from "@/components/ui/Title";
import { useEffect, useState } from "react";
import { nightMap, NightTheme, NightType } from "@/utils";
import { useBingoStore } from "@/store/bingoStore";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "@/app/GlobalStyles"; // Adjust path if needed

const ThemedPage: React.FC<{
  theme: NightTheme;
  children: React.ReactNode;
}> = ({ theme, children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <PageContainer>{children}</PageContainer>
  </ThemeProvider>
);

const BingoGame: React.FC = () => (
  <>
    <Title />
    <Bingo />
  </>
);

const useNightTheme = (): NightTheme => {
  const searchParams = useSearchParams();
  const nightId = searchParams.get("night") as NightType;
  const night: NightTheme = nightMap[nightId] || nightMap["scratch"];
  const { night: storedNight, setNight } = useBingoStore();

  useEffect(() => {
    if (night.night !== storedNight.night) {
      setNight(night);
    }
  }, [night, setNight, storedNight]);

  return night;
};

const Home: React.FC = () => {
  const night = useNightTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <ThemedPage theme={night}>
      {isLoading ? <LoadingSpinner /> : <BingoGame />}
    </ThemedPage>
  );
};

export default Home;
