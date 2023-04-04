import { FlatList } from 'react-native'
import React from 'react'
import themedStyles from './styles'
import { Layout, Text } from '@ui-kitten/components'
import { CartItem, Header } from 'components/componentList'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectCart,
  selectFavorites,
} from 'redux/slices/products/selectors'
import {
  addToCart,
  addToFavorites,
  removeFromCart,
  removeFromFavorites,
} from 'redux/slices/products/slice'
import { toggleTheme } from 'redux/slices/theme/slice'

const Cart = () => {
  const styles = themedStyles()

  const dispatch = useDispatch()

  const favorites = useSelector(selectFavorites)
  const cart = useSelector(selectCart)

  const totalPrice = cart.reduce(
    (acc, product) => acc + parseFloat(product.price),
    0
  )

  const handleHeartPress = (item, isFavorite) => {
    if (isFavorite) {
      dispatch(removeFromFavorites(item))
      return
    }
    dispatch(addToFavorites(item))
  }

  const handleCartPress = (item, inCart) => {
    if (inCart) {
      dispatch(removeFromCart(item))
      return
    }
    dispatch(addToCart(item))
  }

  const renderProducts = ({ item }) => {
    const isFavorite = favorites.some(product => product.id === item.id)
    const inCart = cart.some(product => product.id === item.id)

    return (
      <CartItem
        imageUri={item.image}
        name={item.name}
        price={item.price}
        isFavorite={isFavorite}
        inCart={inCart}
        onCartPress={() => handleCartPress(item, inCart)}
        onHeartPress={() => handleHeartPress(item, isFavorite)}
      />
    )
  }

  const handleTheme = () => {
    dispatch(toggleTheme())
  }

  return (
    <Layout style={styles.container}>
      <Header title="Cart" />
      <Layout style={styles.productsWrapper}>
        <FlatList
          data={cart}
          renderItem={renderProducts}
          contentContainerStyle={styles.productsContainer}
        />
      </Layout>
      <Layout level="4" style={styles.sumContainer}>
        <Text style={styles.sumText}>Total Sum: </Text>
        <Text style={styles.sumCount}>{totalPrice}.00 ₺</Text>
      </Layout>
    </Layout>
  )
}

export default Cart
