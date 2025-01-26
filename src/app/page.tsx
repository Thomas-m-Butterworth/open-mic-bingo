"use client";

import { GameContent } from "@/components";
import { LoadingSpinner } from "@/components/ui";
import { Suspense } from "react";

const Home: React.FC = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <GameContent />
  </Suspense>
);

export default Home;
