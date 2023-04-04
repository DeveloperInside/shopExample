import { StyleSheet } from 'react-native'
import { sizes } from 'styles/commonStyles'
import fonts from 'styles/fonts'
import { theme } from 'theme/ThemeProvider'

const styles = () => {
  const colors = theme.colors()

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
    },
    brandButton: {
      margin: sizes.general.sm,
      borderRadius: 20,
      paddingVertical: 2,
      paddingHorizontal: 8,
    },
    brandText: {
      ...fonts.label,
    },
    brandTextSelected: {
      color: colors.price,
    },
    sortIcon: {
      margin: sizes.general.ms,
    },
  })
}

export default styles
