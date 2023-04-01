import { StyleSheet } from 'react-native'
import commonStyles, { sizes } from 'styles/commonStyles'

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    flexGrow: 1,
    borderWidth: 1,
    borderColor: 'rgb(238, 238, 238)',
    borderRadius: 16,
    ...commonStyles.marginCommon,
    ...commonStyles.paddingCommon,
  },
  header: {
    height: 120,
  },
  footer: {
    padding: sizes.general.ms,
    marginTop: sizes.general.ms,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8
  },
  infoBox: {
    flex: 1,
    flexGrow:1,
    marginRight: 6,
  },
  productImage: {
    alignItems:'flex-end',
    ...commonStyles.cover,
  },
  price: {
    marginVertical: sizes.general.sm,
    fontSize: 13.5,
    color: '#00B383',
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#3366FF',
    paddingHorizontal: sizes.general.md,
    borderRadius: 8,
    ...commonStyles.center
  },
  cartIcon: {
    color: '#f5f5f5',
  },
  heart:{
    padding: sizes.general.ms,
  }
})

export default styles
