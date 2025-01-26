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
  console.log(
    "%c themed head",
    "color: lime",
    { metaTitle },
    { metaDescription },
    { imagesSrc }
  );

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="icon" href={`${imagesSrc}/icon.png`} />
        {/* Open Graph metadata */}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={`${imagesSrc}/og-image.png`} />
        <meta property="og:url" content={promoter.website} />
        <meta property="og:site_name" content="Bingo Game" />
        {/* Twitter metadata */}
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
