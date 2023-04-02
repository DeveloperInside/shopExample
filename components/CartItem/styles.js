import { StyleSheet } from 'react-native'
import commonStyles, { sizes } from 'styles/commonStyles'
import fonts from 'styles/fonts'
import { theme } from 'theme/ThemeProvider'

const styles = () => {
  const colors = theme.colors()

  return StyleSheet.create({
    layout: {
      flex: 1,
      flexGrow: 1,
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: colors.borderColor,
      borderRadius: sizes.general.lg,
      marginBottom: sizes.general.sm,
      ...commonStyles.marginCommon,
      ...commonStyles.paddingCommon,
    },
    header: {
      height: 80,
      width: 80,
    },
    footer: {
      flex: 1,
      flexGrow: 1,
      padding: sizes.general.ms,
      margin: sizes.general.ms,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderRadius: sizes.general.md,
    },
    infoBox: {
      flex: 1,
      flexGrow: 1,
      marginRight: sizes.general.ms,
    },
    productImage: {
      alignItems: 'flex-end',
      ...commonStyles.cover,
    },
    price: {
      marginVertical: sizes.general.sm,
      color: colors.price,
      ...fonts.price,
    },
    button: {
      backgroundColor: colors.button,
      paddingHorizontal: sizes.general.md,
      borderRadius: sizes.general.md,
      ...commonStyles.center,
    },
    cartIcon: {
      color: colors.buttonText,
    },
    heart: {
      padding: sizes.general.ms,
    },
  })
}

export default styles
