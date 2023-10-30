import AppShell from "@/components/layout/AppShell";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const hasNoLayout = Component.hasOwnProperty("noLayout");

  return (
    <>
      {hasNoLayout ? (
        <Component {...pageProps} />
      ) : (
        <AppShell>
          <Component {...pageProps} />
        </AppShell>
      )}
    </>
  );
}
