import { StyleSheet } from 'react-native'
import commonStyles from '../../styles/commonStyles'

const styles = StyleSheet.create({
  container: {
    ...commonStyles.container,
  },
  productsWrapper: {
    flex: 1
  },
  text: {
    textAlign: 'center',
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
})

export default styles
