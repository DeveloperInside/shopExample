import { Text, View } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles'
import { Layout } from '@ui-kitten/components'
import { ProductItem } from 'components/componentList'
import { useDispatch } from 'react-redux'
import { fetchProducts } from 'redux/slices/products/extraActions'

const Products = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  

  return (
    <Layout style={styles.container}>
      <Text>Products</Text>
      <Layout style={styles.productsWrapper}>
        <ProductItem />
        <ProductItem />
      </Layout>
    </Layout>
  )
}

export default Products
