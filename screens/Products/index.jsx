import { FlatList } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles'
import { Button, Layout } from '@ui-kitten/components'
import { Header, ProductItem } from 'components/componentList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from 'redux/slices/products/extraActions'
import {
  selectCart,
  selectCurrentPage,
  selectFavorites,
  selectFetchLimit,
  selectProducts,
} from 'redux/slices/products/selectors'
import {
  addToCart,
  addToFavorites,
  fetchMore,
  pickProduct,
  removeFromCart,
  removeFromFavorites,
} from 'redux/slices/products/slice'
import { toggleTheme } from 'redux/slices/theme/slice'
import screens from 'navigation/screenLinking'

const Products = ({navigation}) => {
  const dispatch = useDispatch()
  const productList = useSelector(selectProducts)
  const currentPage = useSelector(selectCurrentPage)
  const fetchLimit = useSelector(selectFetchLimit)
  const favorites = useSelector(selectFavorites)
  const cart = useSelector(selectCart)

  useEffect(() => {
    const fetchQuery = 'page=' + currentPage + '&limit=' + fetchLimit
    dispatch(fetchProducts(fetchQuery))
  }, [currentPage, fetchLimit])

  const handleProductPress = (item) => {
    dispatch(pickProduct(item))
    navigation.navigate(screens.Details.name)
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
        onPress={()=> handleProductPress(item)}
        onCartPress={() => handleCartPress(item, inCart)}
        onHeartPress={() => handleHeartPress(item, isFavorite)}
      />
    )
  }

  const handleScrollEnd = () => {
    dispatch(fetchMore())
  }

  const handleTheme = () => {
    dispatch(toggleTheme())
  }

  return (
    <Layout style={styles.container}>
      <Header title='Products' />
      <Layout style={styles.productsWrapper}>
        <FlatList
          numColumns={2}
          data={productList}
          renderItem={renderProducts}
          onEndReached={handleScrollEnd}
        />
      </Layout>
    </Layout>
  )
}

export default Products
