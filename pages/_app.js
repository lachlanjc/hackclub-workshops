import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import NextApp from 'next/app'
import Head from 'next/head'

import Meta from '@hackclub/meta'
import '@hackclub/theme/fonts/reg-ital-bold.css'
import theme from '../lib/theme'
import NProgress from '../components/nprogress'
import { ThemeProvider } from 'theme-ui'

const App = ({ Component, pageProps }) => {
  const router = useRouter()

  return (
    <ThemeProvider theme={theme}>
      <NProgress color={theme.colors.primary} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
