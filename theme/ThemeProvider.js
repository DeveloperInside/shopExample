import React from 'react'
import { ApplicationProvider } from '@ui-kitten/components'
import * as eva from '@eva-design/eva'
import Navigation from 'navigation/Navigation'
import { useSelector } from 'react-redux'
import { selectTheme } from 'redux/slices/theme/selectors'
import colors from 'styles/colors'

const ThemeProvider = () => {
  const activeTheme = useSelector(selectTheme)

  return (
    <ApplicationProvider {...eva} theme={eva[activeTheme]}>
      <Navigation />
    </ApplicationProvider>
  )
}

export const theme = {
  colors: () => {
    const activeTheme = useSelector(selectTheme)
    
    if (activeTheme === 'dark') return colors.dark

    return colors.light
  },
}

export default ThemeProvider
