import { Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { Layout } from '@ui-kitten/components'
import { ProductItem } from 'components/componentList'

const Products = () => {
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
