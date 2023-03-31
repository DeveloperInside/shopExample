import { Text } from 'react-native'
import React from 'react'
import { ProductItem } from '../../components/componentList'
import { Layout } from '@ui-kitten/components'

const Products = () => {
  return (
    <Layout>
      <Text>Products</Text>
      <ProductItem />
    </Layout>
  )
}

export default Products
