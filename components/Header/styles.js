import { StyleSheet } from 'react-native'
import commonStyles, { sizes } from 'styles/commonStyles'
import fonts from 'styles/fonts'
import { theme } from 'theme/ThemeProvider'

const styles = () => {
  const colors = theme.colors()

  return StyleSheet.create({
    container: {
        ...commonStyles.paddingCommon,
    },
    innerBox: {
        justifyContent: 'space-between',
        ...commonStyles.rowCenter
    },
    switchContainer: {
        ...commonStyles.rowCenter
    },
    label: {
        ...fonts.label
    },
    text: {
      ...fonts.header,
    },
  })
}

export default styles
