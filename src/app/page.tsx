"use client";
import { Bingo } from "@/components";
import { PageContainer } from "@/components/ui";
import { Title } from "@/components/ui/Title";

export default function Home() {
  return (
    <PageContainer>
      <Title title="OPEN MIC BINGO"/>
      <Bingo />
    </PageContainer>
  );
}
