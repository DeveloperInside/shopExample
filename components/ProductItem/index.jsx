import React from 'react'
import { Button, Divider, Layout, Text } from '@ui-kitten/components'
import { Image, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const ProductItem = () => {
  return (
    <Layout style={styles.layout} level="1">
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://picsum.photos/200/250' }}
          style={styles.productImage}
        />
      </View>
      <Layout style={styles.footer}>
        <Layout style={styles.infoBox}>
          <Text style={styles.price} status='success' >20.000 tl</Text>
          <Text>Product devicesss is on the way long</Text>
        </Layout>
        <TouchableOpacity style={styles.button}>
          <Icon name="cart-outline" size={18} style={styles.cartIcon}/>
        </TouchableOpacity>
      </Layout>
    </Layout>
  )
}

export default ProductItem
