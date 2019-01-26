import Head from 'next/head'
import * as React from "react"

import { LayoutProps } from "./types"

import { ThemeProvider } from "../theme/styled-components"
import { defaultTheme } from "../theme/theme"

export const Layout: React.SFC<LayoutProps> = ({
  children,
  title = "Next.js Boilerplate",
  theme = defaultTheme
}) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>

    {children}
    </React.Fragment>

  </ThemeProvider>
);
