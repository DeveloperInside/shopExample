import { StyleSheet } from 'react-native'
import commonStyles, { sizes } from 'styles/commonStyles'
import fonts from 'styles/fonts'
import { theme } from 'theme/ThemeProvider'

const styles = () => {
  const colors = theme.colors()

  return StyleSheet.create({
    container: {
      ...commonStyles.container,
    },
    details: {
      ...commonStyles.marginCommon,
      ...commonStyles.paddingCommon,
    },
    header: {
        justifyContent: 'space-between',
        ...commonStyles.flexRow
    },
    footer: {
        marginVertical: sizes.general.lg
    },
    name: {
        marginBottom: sizes.general.sm,
        ...fonts.productName
    },
    brand: {
        ...fonts.brand
    },
    price: {
        color: colors.price,
        ...fonts.totalPrice
    },
    addToCartButton: {
        marginTop: sizes.general.md
    }
  })
}

export default styles
