import { FlatList, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles'
import { Layout } from '@ui-kitten/components'
import { ProductItem } from 'components/componentList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from 'redux/slices/products/extraActions'
import { selectProducts } from 'redux/slices/products/selectors'

const Products = () => {
  const dispatch = useDispatch()
  const productList = useSelector(selectProducts)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  const renderProducts = ({ item }) => {
    return <ProductItem imageUri={item.image} name={item.name} price={item.price} />
  }

  return (
    <Layout style={styles.container}>
      <Text>Products</Text>
      <Layout style={styles.productsWrapper}>
        <FlatList
          numColumns={2}
          data={productList}
          renderItem={renderProducts}
        />
        {/* <ProductItem />
        <ProductItem /> */}
      </Layout>
    </Layout>
  )
}

export default Products
