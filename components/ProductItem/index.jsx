import React from 'react'
import { Layout, Text } from '@ui-kitten/components'
import { Image } from 'react-native'
import styles from './styles'

const ProductItem = () => {
  return (
    <Layout style={styles.layout}>
        <Image />
      <Text>ProductItem</Text>
    </Layout>
  )
}

export default ProductItem