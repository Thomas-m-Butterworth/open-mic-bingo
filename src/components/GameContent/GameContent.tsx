"use client";

import { useBingoStore } from "@/store/bingoStore";
import { getNightTheme, NightTheme, NightType } from "@/utils";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { LoadingSpinner, ThemedPage, Title } from "../ui";
import { Bingo } from "../Bingo";
import { GameControls } from "../GameControls";
import Head from "next/head";

const BingoGame: React.FC = () => (
  <>
    <Title />
    <Bingo />
    <GameControls />
  </>
);

export const ThemedHead = ({ night }: { night: NightTheme }) => {
  const { title, promoter, night: nightId } = night;
  const metaTitle = `${promoter.name}'s ${title}`;
  const metaDescription = `${metaTitle} for ${night.promoter.night}`;
  const imagesSrc = `/images/${nightId}`;

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="icon" href={`${imagesSrc}/icon.png`} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={`${imagesSrc}/og-image.png`} />
        <meta property="og:url" content={promoter.website} />
        <meta property="og:site_name" content="Bingo Game" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={`${imagesSrc}/og-image.png`} />
      </Head>
    </>
  );
};

export const GameContent = () => {
  const searchParams = useSearchParams();
  const nightId = searchParams.get("night") as NightType;
  const night: NightTheme = getNightTheme(nightId) || getNightTheme("scratch");
  const { night: storedNight, setNight, bingoLoading } = useBingoStore();
  const [pageLoading, setPageLoading] = useState(true);
  const isLoading = bingoLoading || pageLoading;

  useEffect(() => {
    if (night.night !== storedNight.night) {
      setNight(night);
    }
  }, [night, setNight, storedNight]);

  useEffect(() => {
    const handleInitialLoad = async () => {
      try {
        await Promise.all([
          new Promise((resolve) => {
            const image = new Image();
            image.src = `/images/${night.night}/icon.png`;
            image.onload = resolve;
            image.onerror = resolve;
          }),
        ]);
      } finally {
        setPageLoading(false);
      }
    };

    handleInitialLoad();
  }, [night.night]);

  return (
    <>
      <ThemedPage theme={night}>
        {isLoading ? (
          <LoadingSpinner $imageSrc={`/images/${night.night}/icon.png`} />
        ) : (
          <BingoGame />
        )}
      </ThemedPage>
    </>
  );
};
