import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/header/Header";
import { SessionProvider } from "next-auth/react";
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider>
      <Header></Header>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
