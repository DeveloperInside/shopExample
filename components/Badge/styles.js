import { StyleSheet } from 'react-native'
import commonStyles, { sizes } from 'styles/commonStyles'
import fonts from 'styles/fonts'
import { theme } from 'theme/ThemeProvider'

const styles = () => {
  const colors = theme.colors()

  return StyleSheet.create({
    bagde: {
      position: 'absolute',
      right:sizes.general.hg,
      width: sizes.general.lg,
      height: sizes.general.lg,
      backgroundColor: colors.price,
      borderRadius: sizes.maxi.hg,
      ...commonStyles.center,
    },
    text: {
      color: colors.badgeText,
      ...fonts.badge,
    },
  })
}

export default styles
