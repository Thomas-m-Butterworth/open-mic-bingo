"use client";

import { useSearchParams } from "next/navigation";
import { Bingo } from "@/components";
import { LoadingSpinner, PageContainer } from "@/components/ui";
import { Title } from "@/components/ui/Title";
import { Suspense, useEffect, useState } from "react";
import { nightMap, NightTheme, NightType } from "@/utils";
import { useBingoStore } from "@/store/bingoStore";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "@/app/GlobalStyles";

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

const GameContent = () => {
  const searchParams = useSearchParams();
  const nightId = searchParams.get("night") as NightType;
  const night: NightTheme = nightMap[nightId] || nightMap["scratch"];
  const { night: storedNight, setNight } = useBingoStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (night.night !== storedNight.night) {
      setNight(night);
    }
  }, [night, setNight, storedNight]);

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

const Home: React.FC = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <GameContent />
  </Suspense>
);

export default Home;
