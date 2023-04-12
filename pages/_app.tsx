import { useEffect } from "react";
import NProgress from "nprogress";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";

import { Header } from "@/common/Layout/Header";
import { Footer } from "@/common/Layout/Footer";
import { Transition } from "@/common/Transition";

import { GlobalStyle } from "@/styles/globalStyles";
import "styles/nprogress.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  NProgress.configure({ showSpinner: false });

  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Transition location={router.pathname}>
        <Component {...pageProps} />
      </Transition>
      <Footer />
    </>
  );
}
