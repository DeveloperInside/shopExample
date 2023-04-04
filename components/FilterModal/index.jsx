import { TouchableOpacity } from 'react-native'
import React from 'react'
import { Card, Layout, Text } from '@ui-kitten/components'
import themedStyles from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { theme } from 'theme/ThemeProvider'

const FilterModal = ({ onBrandSelect, onSortSelect, selectedBrand }) => {
  const styles = themedStyles()
  const colors = theme.colors()

  return (
    <Card disabled={true}>
      <Layout>
        <Text>Filter By Brand:</Text>
        <Layout style={styles.container}>
          <TouchableOpacity
            onPress={() => {
              onBrandSelect && onBrandSelect('Tesla')
            }}>
            <Layout level="3" style={styles.brandButton}>
              <Text
                style={[
                  styles.brandText,
                  selectedBrand === 'Tesla' && styles.brandTextSelected,
                ]}>
                Tesla
              </Text>
            </Layout>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onBrandSelect && onBrandSelect('Ford')
            }}>
            <Layout level="3" style={styles.brandButton}>
              <Text
                style={[
                  styles.brandText,
                  selectedBrand === 'Ford' && styles.brandTextSelected,
                ]}>
                Ford
              </Text>
            </Layout>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onBrandSelect && onBrandSelect('Ferrari')
            }}>
            <Layout level="3" style={styles.brandButton}>
              <Text
                style={[
                  styles.brandText,
                  selectedBrand === 'Ferrari' && styles.brandTextSelected,
                ]}>
                Ferrari
              </Text>
            </Layout>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onBrandSelect && onBrandSelect('')
            }}>
            <Layout level="3" style={styles.brandButton}>
              <Icon name="close" size={18} color={colors.danger} />
            </Layout>
          </TouchableOpacity>
        </Layout>
        <Text>Sort:</Text>
        <Layout>
          <Layout style={styles.container}>
            <TouchableOpacity
              style={styles.sortIcon}
              onPress={() => {
                onSortSelect && onSortSelect('asc')
              }}>
              <Text>
                <Icon name="order-alphabetical-ascending" size={24} />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sortIcon}
              onPress={() => {
                onSortSelect && onSortSelect('desc')
              }}>
              <Text>
                <Icon name="order-alphabetical-descending" size={24} />
              </Text>
            </TouchableOpacity>
          </Layout>
        </Layout>
      </Layout>
    </Card>
  )
}

export default FilterModal
