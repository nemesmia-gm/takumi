import { ReactNode } from "react";

import App from "next/app";
import type { AppLayoutProps } from "next/app";

import { wrapper } from "../redux/store";
import { getConfig } from "../redux/slices/config";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./globalStyles";

import "bootstrap/dist/css/bootstrap-grid.min.css";

MyApp.getInitialProps = wrapper.getInitialAppProps(
  (store) => async (context) => {
    const globalConfig = await store.dispatch(getConfig());

    return {
      pageProps: {
        ...(await App.getInitialProps(context)).pageProps,
        config: globalConfig,
      },
    };
  }
);

export const theme = (color: string) => ({
  colors: {
    primary: color,
  },
});

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  const { Color } = pageProps.config.payload;

  return getLayout(
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme(Color)}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
