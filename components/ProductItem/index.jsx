import React from 'react'
import { Layout, Text } from '@ui-kitten/components'
import { Alert, ImageBackground, TouchableOpacity, View } from 'react-native'
import themedStyles from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { theme } from 'theme/ThemeProvider'

const ProductItem = ({
  imageUri,
  price,
  name,
  onHeartPress,
  isFavorite,
  onCartPress,
  inCart,
}) => {
  // IOS don't allow unsecure http requests. Replace http with https.
  const secureConn = imageUri.replace(/^http:/, 'https:')

  const styles = themedStyles()
  const colors = theme.colors()

  const favoriteIcon = isFavorite
    ? { icon: 'heart', color: colors.heart }
    : { icon: 'heart-outline', color: colors.heart_x }

  const cartIcon = inCart
    ? { icon: 'cart-remove', color: colors.cart_x }
    : { icon: 'cart-outline', color: colors.cart }

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
          <Text style={styles.price}>
            {price} ₺
          </Text>
          <Text numberOfLines={2}>{name}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={onCartPress}>
          <Icon name={cartIcon.icon} color={cartIcon.color} size={18} />
        </TouchableOpacity>
      </Layout>
    </Layout>
  )
}

export default ProductItem
