import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { ParallaxProvider } from 'react-scroll-parallax'
import theme from 'styles/theme'
import { GlobalStyles } from 'styles/global'

const Provider = ({ children }: ProviderTypes) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const body = (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ParallaxProvider>
        {children}
        </ParallaxProvider>
    </ThemeProvider>
  )
  return <div>{mounted && body}</div>
}

export default Provider
