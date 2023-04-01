import { Text } from 'react-native'
import React from 'react'
import { ProductItem } from '../../components/componentList'
import { Layout } from '@ui-kitten/components'
import styles from './styles'

const Products = () => {
  return (
    <Layout>
      <Text>Products</Text>
      <Layout style={styles.productsWrapper}>
        <ProductItem />
        <ProductItem />
      </Layout>
    </Layout>
  )
}

export default Products
