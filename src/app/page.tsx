"use client";

import { useSearchParams } from "next/navigation";
import { Bingo } from "@/components";
import { LoadingSpinner, PageContainer } from "@/components/ui";
import { Title } from "@/components/ui/Title";
import { useEffect, useState, Suspense } from "react";
import { nightMap, NightTheme, NightType } from "@/utils";
import { useBingoStore } from "@/store/bingoStore";

export default function Home() {
  const searchParamsSuspense = (
    <Suspense fallback={<LoadingSpinner />}>
      <SearchParams />
    </Suspense>
  );

  return <PageContainer>{searchParamsSuspense}</PageContainer>;
}

function SearchParams() {
  const searchParams = useSearchParams();
  const nightId = searchParams.get("night") as NightType;
  const night: NightTheme = nightMap[nightId] || nightMap["scratch"];

  const [isLoading, setIsLoading] = useState(true);
  const { night: storedNight, setNight } = useBingoStore();

  useEffect(() => {
    if (night.night !== storedNight.night) {
      setNight(night);
    }
  }, [night, setNight, storedNight]);

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
      <Title />
      <Bingo />
    </PageContainer>
  );
}
