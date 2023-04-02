import { FlatList, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles'
import { Button, Layout } from '@ui-kitten/components'
import { ProductItem } from 'components/componentList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from 'redux/slices/products/extraActions'
import {
  selectCurrentPage,
  selectFavorites,
  selectFetchLimit,
  selectProducts,
} from 'redux/slices/products/selectors'
import {
  addToFavorites,
  fetchMore,
  removeFromFavorites,
} from 'redux/slices/products/slice'
import { toggleTheme } from 'redux/slices/theme/slice'

const Products = () => {
  const dispatch = useDispatch()
  const productList = useSelector(selectProducts)
  const currentPage = useSelector(selectCurrentPage)
  const fetchLimit = useSelector(selectFetchLimit)
  const favorites = useSelector(selectFavorites)

  useEffect(() => {
    const fetchQuery = 'page=' + currentPage + '&limit=' + fetchLimit
    dispatch(fetchProducts(fetchQuery))
  }, [currentPage, fetchLimit])

  const renderProducts = ({ item }) => {
    const isFavorite = favorites.some(product => product.id === item.id)
    const handleHeartPress = () => {
      if (isFavorite) {
        dispatch(removeFromFavorites(item))
        return
      }
      dispatch(addToFavorites(item))
    }

    return (
      <ProductItem
        imageUri={item.image}
        name={item.name}
        price={item.price}
        isFavorite={isFavorite}
        onHeartPress={() => handleHeartPress(item)}
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
      <Button onPress={handleTheme}>SwitchTheme</Button>
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
