import App, { Container } from 'next/app'
import * as React from 'react'

import { Layout } from "../src/components/Layout"

export default class MyApp extends App {
  public render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}
