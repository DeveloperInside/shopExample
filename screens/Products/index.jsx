import { FlatList, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles'
import { Layout } from '@ui-kitten/components'
import { ProductItem } from 'components/componentList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from 'redux/slices/products/extraActions'
import { selectCurrentPage, selectFetchLimit, selectProducts } from 'redux/slices/products/selectors'
import { fetchMore } from 'redux/slices/products/slice'

const Products = () => {
  const dispatch = useDispatch()
  const productList = useSelector(selectProducts)
  const currentPage = useSelector(selectCurrentPage)
  const fetchLimit = useSelector(selectFetchLimit)

  useEffect(() => {
    const fetchQuery = 'page='+currentPage+'&limit='+fetchLimit
    dispatch(fetchProducts(fetchQuery))
  }, [currentPage, fetchLimit])

  const renderProducts = ({ item }) => {
    return <ProductItem imageUri={item.image} name={item.name} price={item.price} />
  }

  const handleScrollEnd = () => {
    dispatch(fetchMore())
  }

  return (
    <Layout style={styles.container}>
      <Text>Products</Text>
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
