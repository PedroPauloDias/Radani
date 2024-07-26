import type { AppProps } from "next/app";

import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react"

import { fontSans, fontMono } from "@/config/fonts";
import "@/styles/globals.css";

export default function App({ Component, pageProps:{session , ...pageProps} }: AppProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider attribute="class">
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>

      </NextThemesProvider>
    </NextUIProvider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};
