import { FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { Button, Card, Input, Layout, Modal, Text } from '@ui-kitten/components'
import { FilterModal, Header, ProductItem } from 'components/componentList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from 'redux/slices/products/extraActions'
import {
  selectCart,
  selectCurrentPage,
  selectFavorites,
  selectFetchLimit,
  selectProducts,
  selectQueryParams,
} from 'redux/slices/products/selectors'
import {
  addToCart,
  addToFavorites,
  fetchMore,
  pickProduct,
  removeFromCart,
  removeFromFavorites,
} from 'redux/slices/products/slice'
import screens from 'navigation/screenLinking'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Products = ({ navigation }) => {
  const dispatch = useDispatch()

  const productList = useSelector(selectProducts)
  const currentPage = useSelector(selectCurrentPage)
  const fetchLimit = useSelector(selectFetchLimit)
  const favorites = useSelector(selectFavorites)
  const cart = useSelector(selectCart)
  const queryParams = useSelector(selectQueryParams)

  const [searchTerm, setSearchTerm] = useState('')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    dispatch(fetchProducts(queryParams))
  }, [currentPage, fetchLimit, queryParams])

  const handleSearch = () => {
    const fetchQuery =
      'page=' + currentPage + '&limit=' + fetchLimit + '&name=' + searchTerm
    dispatch(fetchProducts(queryParams))
  }

  const handleScrollEnd = () => {
    dispatch(fetchMore())
  }

  const handleProductPress = item => {
    dispatch(pickProduct(item))
    navigation.navigate(screens.Details.name)
  }

  const handleHeartPress = (item, isFavorite) => {
    if (isFavorite) {
      dispatch(removeFromFavorites(item))
      return
    }
    dispatch(addToFavorites(item))
  }

  const handleCartPress = (item, inCart) => {
    if (inCart) {
      dispatch(removeFromCart(item))
      return
    }
    dispatch(addToCart(item))
  }

  const renderProducts = ({ item }) => {
    const isFavorite = favorites.some(product => product.id === item.id)
    const inCart = cart.some(product => product.id === item.id)

    return (
      <ProductItem
        imageUri={item.image}
        name={item.name}
        price={item.price}
        isFavorite={isFavorite}
        inCart={inCart}
        onPress={() => handleProductPress(item)}
        onCartPress={() => handleCartPress(item, inCart)}
        onHeartPress={() => handleHeartPress(item, isFavorite)}
      />
    )
  }

  return (
    <Layout style={styles.container}>
      <Header title="Products" />
      <Layout style={styles.productsWrapper}>
        <Input
          placeholder="Search for products..."
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
        <Button
          style={{
            paddingTop: 5,
            paddingBottom: 5,
          }}
          onPress={handleSearch}>
          <Text>
            <Icon name="saved-search" size={25} />
          </Text>
        </Button>
        <Button onPress={() => setVisible(true)}>TOGGLE MODAL</Button>
        <FlatList
          numColumns={2}
          data={productList}
          renderItem={renderProducts}
          onEndReached={handleScrollEnd}
        />
      </Layout>
      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}>
          <FilterModal />
      </Modal>
    </Layout>
  )
}

export default Products
