import { GlobalStyles } from "@/app/GlobalStyles";
import { NightTheme } from "@/utils";
import React from "react";
import { ThemeProvider } from "styled-components";
import { PageContainer } from "./PageContainer";

export const ThemedPage: React.FC<{
  theme: NightTheme;
  children: React.ReactNode;
}> = ({ theme, children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <PageContainer>{children}</PageContainer>
  </ThemeProvider>
);
