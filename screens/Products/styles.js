import { StyleSheet } from 'react-native'
import commonStyles, { sizes } from 'styles/commonStyles'

const styles = StyleSheet.create({
  container: {
    ...commonStyles.container,
  },
  productsWrapper: {
    ...commonStyles.container,
  },
  searchContainer: {
    flexDirection: 'row',
    padding: sizes.general.ms
  },
  searchInput: {
    flexGrow: 1,
    marginRight: sizes.general.md
  },
  searchButton: {
    paddingVertical: sizes.general.sm,
    marginHorizontal: sizes.general.xs
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
})

export default styles
