import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Button, Card, Layout, Text } from '@ui-kitten/components'
import themedStyles from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { theme } from 'theme/ThemeProvider'

const FilterModal = ({ onBrandSelect, onSortSelect, selectedItem }) => {
  const styles = themedStyles()
  const colors = theme.colors()

  return (
    <Card disabled={true}>
      <Layout>
        <Text>Filter By Brand:</Text>
        <Layout style={styles.brandContainer}>
          <TouchableOpacity
            onPress={() => {
              onBrandSelect && onBrandSelect('Tesla')
            }}>
            <Layout level="3" style={styles.brandButton}>
              <Text
                style={[
                  styles.brandText,
                  selectedItem === 'Tesla' && styles.brandTextSelected,
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
                  selectedItem === 'Ford' && styles.brandTextSelected,
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
                  selectedItem === 'Ferrari' && styles.brandTextSelected,
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
          <Text>ascending</Text>
          <Text>descending</Text>
        </Layout>
      </Layout>
      <Button onPress={() => setVisible(false)}>DISMISS</Button>
    </Card>
  )
}

export default FilterModal
