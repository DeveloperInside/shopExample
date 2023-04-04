import { FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { Button, Input, Layout, Modal, Text } from '@ui-kitten/components'
import { FilterModal, Header, ProductItem } from 'components/componentList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from 'redux/slices/products/extraActions'
import {
  selectCart,
  selectCurrentPage,
  selectFavorites,
  selectProducts,
  selectQueryParams,
} from 'redux/slices/products/selectors'
import {
  addToCart,
  addToFavorites,
  fetchMore,
  flushProducts,
  pickProduct,
  removeFromCart,
  removeFromFavorites,
  updateQuery,
} from 'redux/slices/products/slice'
import screens from 'navigation/screenLinking'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Products = ({ navigation }) => {
  const dispatch = useDispatch()

  const productList = useSelector(selectProducts)
  const currentPage = useSelector(selectCurrentPage)
  const favorites = useSelector(selectFavorites)
  const cart = useSelector(selectCart)
  const queryParams = useSelector(selectQueryParams)

  const [searchTerm, setSearchTerm] = useState('')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (currentPage !== 1) {
      dispatch(fetchProducts({ ...queryParams, page: currentPage }))
    }
  }, [currentPage])

  useEffect(() => {
    // when queryParams changed, at first, flush the products list
    dispatch(flushProducts())
    dispatch(fetchProducts({ ...queryParams, page: currentPage }))
  }, [queryParams])

  const handleScrollEnd = () => {
    dispatch(fetchMore())
  }

  const handleSearch = () => {
    dispatch(updateQuery({ ...queryParams, name: searchTerm }))
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

  // handle filtering
  const handleBrandFilter = brand => {
    dispatch(updateQuery({ ...queryParams, brand: brand }))
  }

  const handleSort = sort => {
    dispatch(updateQuery({ ...queryParams, order: sort }))
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
        <Layout style={styles.searchContainer} level='3'>
          <Input
            style={styles.searchInput}
            placeholder="Search for products..."
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
          <Button style={styles.searchButton} onPress={handleSearch}>
            <Text>
              <Icon name="saved-search" size={25} />
            </Text>
          </Button>
          <Button style={styles.searchButton} onPress={() => setVisible(true)}>
            Filter
          </Button>
        </Layout>

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
        <FilterModal
          onBrandSelect={handleBrandFilter}
          onSortSelect={handleSort}
          selectedBrand={queryParams?.brand}
        />
      </Modal>
    </Layout>
  )
}

export default Products
