import { StyleSheet } from 'react-native'
import commonStyles, { sizes } from 'styles/commonStyles'
import fonts from 'styles/fonts'
import { theme } from 'theme/ThemeProvider'

const styles = () => {
  const colors = theme.colors()

  return StyleSheet.create({
    container: {
      justifyContent: 'space-between',
      ...commonStyles.container,
    },
    productsWrapper: {
      flex: 1,
    },
    productsContainer:{
        paddingBottom: sizes.general.hg
    },
    sumContainer: {
      padding: sizes.general.lg,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    sumText: {
      ...fonts.label,
    },
    sumCount: {
      ...fonts.totalPrice,
      color: colors.price,
    },
  })
}

export default styles
