import React from 'react'
import { Layout, Text } from '@ui-kitten/components'
import {
  Alert,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const ProductItem = ({ imageUri, price, name, onHeartPress, isFavorite }) => {
  // IOS don't allow unsecure http requests. Replace http with https.
  const secureConn = imageUri.replace(/^http:/, 'https:')

  const favoriteIcon = isFavorite
    ? { icon: 'heart', color: 'red' }
    : { icon: 'heart', color: 'white' }

  return (
    <Layout style={styles.layout} level="2">
      <Layout style={styles.header} level="4">
        <ImageBackground
          source={{ uri: secureConn }}
          resizeMode="cover"
          style={styles.productImage}
          imageStyle={{ borderRadius: 6 }}
          onError={error => {
            console.warn('Image Error: ' + error.nativeEvent)
            Alert.alert(
              'Image Error: ',
              'An error occurred while fetching images. Try to reopen the app. If it persists, connect with the developer.'
            )
          }}>
          <TouchableOpacity onPress={onHeartPress}>
            <Icon
              name={favoriteIcon.icon}
              size={24}
              color={favoriteIcon.color}
              style={styles.heart}
            />
          </TouchableOpacity>
        </ImageBackground>
      </Layout>
      <Layout style={styles.footer} level="3">
        <View style={styles.infoBox}>
          <Text style={styles.price} status="success">
            {price} ₺
          </Text>
          <Text numberOfLines={2}>{name}</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Icon name="cart-outline" size={18} style={styles.cartIcon} />
        </TouchableOpacity>
      </Layout>
    </Layout>
  )
}

export default ProductItem
