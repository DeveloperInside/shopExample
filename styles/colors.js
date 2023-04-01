import { StyleSheet } from "react-native"

const colors = {
  light: {
    shade1: '#5fd32e',
  },
  dark: {
    shade1: '#2e4cd3',
  },
}

var activeTheme = 'dark'

const theme = () => {
  if (activeTheme === 'dark') return colors.dark
}

export default theme