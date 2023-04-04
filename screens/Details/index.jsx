import { View, Image, ScrollView } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectCart,
  selectPickedProduct,
} from 'redux/slices/products/selectors'
import { Button, Layout, Text } from '@ui-kitten/components'
import themedStyles from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import screens, { stacks } from 'navigation/screenLinking'
import { addToCart } from 'redux/slices/products/slice'
import Header from 'components/Header'

const Details = ({ navigation }) => {
  const styles = themedStyles()

  const dispatch = useDispatch()

  const cart = useSelector(selectCart)
  const pickedProduct = useSelector(selectPickedProduct)

  const secureImage = pickedProduct?.image.replace(/^http:/, 'https:')

  const { name, description, price, model, brand } = pickedProduct

  const handleAddtoCartPress = () => {
    const inCart = cart.some(product => product.id === pickedProduct.id)

    if (!inCart) {
      dispatch(addToCart(pickedProduct))
    }

    navigation.navigate(stacks.Tab.name, { screen: screens.Cart.name })
  }

  const handleBackPressed = () => {
    navigation.goBack()
  }

  console.log(secureImage)
  return (
    <Layout style={styles.container}>
      <Header title="Details" backButton={handleBackPressed} />
      <Image
        source={{ uri: secureImage }}
        style={{ width: '100%', aspectRatio: 4 / 3 }}
      />
      <ScrollView>
        <Layout style={styles.details}>
          <Layout style={styles.header}>
            <View>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.brand}>
                {brand} {model}
              </Text>
            </View>
            <Text style={styles.price}>{price} ₺</Text>
          </Layout>
          <Layout style={styles.footer}>
            <Text>{description}</Text>
            <Button
              style={styles.addToCartButton}
              onPress={handleAddtoCartPress}>
              <Icon name={'cart'} size={16} />
              {'  Add to Cart'}
            </Button>
          </Layout>
        </Layout>
      </ScrollView>
    </Layout>
  )
}

export default Details
