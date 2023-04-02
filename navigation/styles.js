import { StyleSheet } from 'react-native'
import commonStyles, { sizes } from 'styles/commonStyles'
import fonts from 'styles/fonts'
import { theme } from 'theme/ThemeProvider'

const styles = () => {
  const colors = theme.colors()

  return StyleSheet.create({
    navigationItem: {
      flex: 1,
      alignItems: 'center',
      paddingVertical: 12
    },
    text: {
      ...fonts.badge,
    },
  })
}

export default styles
