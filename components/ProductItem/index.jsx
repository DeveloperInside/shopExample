import React from 'react'
import { Button, Divider, Layout, Text } from '@ui-kitten/components'
import { Image, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const ProductItem = ({imageUri, price, name}) => {
  const secureConn = imageUri.replace(/^http:/, "https:")
  return (
    <Layout style={styles.layout} level="1">
      <View style={styles.header}>
        <Image
          source={{ uri: secureConn }}
          style={styles.productImage}
          onError={(error)=>{console.log(error)}}
        />
      </View>
      <Layout style={styles.footer}>
        <Layout style={styles.infoBox}>
          <Text style={styles.price} status='success' >{price} ₺</Text>
          <Text>{name}</Text>
        </Layout>
        <TouchableOpacity style={styles.button}>
          <Icon name="cart-outline" size={18} style={styles.cartIcon}/>
        </TouchableOpacity>
      </Layout>
    </Layout>
  )
}

export default ProductItem
