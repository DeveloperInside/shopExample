import { FlatList } from 'react-native'
import React from 'react'
import styles from './styles'
import { Button, Layout } from '@ui-kitten/components'
import { ProductItem } from 'components/componentList'
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

const Favorites = () => {
  const dispatch = useDispatch()

  const favorites = useSelector(selectFavorites)
  const cart = useSelector(selectCart)

  const handleTheme = () => {
    dispatch(toggleTheme())
  }

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
      <ProductItem
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

  return (
    <Layout style={styles.container}>
      <Button onPress={handleTheme}>SwitchTheme</Button>
      <Layout style={styles.productsWrapper}>
        <FlatList
          numColumns={2}
          data={favorites}
          renderItem={renderProducts}
        />
      </Layout>
    </Layout>
  )
}

export default Favorites
