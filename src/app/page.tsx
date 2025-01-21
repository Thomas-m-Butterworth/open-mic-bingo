"use client";

import { useSearchParams } from "next/navigation";
import { Bingo } from "@/components";
import { LoadingSpinner, PageContainer } from "@/components/ui";
import { Title } from "@/components/ui/Title";
import { useEffect, useState } from "react";
import { nightMap, NightTheme, NightType } from "@/utils";

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
