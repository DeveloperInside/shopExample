import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Layout, Text, Toggle } from '@ui-kitten/components'
import { SafeAreaView } from 'react-native-safe-area-context'
import themedStyles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { selectTheme } from 'redux/slices/theme/selectors'
import { toggleTheme } from 'redux/slices/theme/slice'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Header = ({ title, backButton }) => {
  const styles = themedStyles()
  const dispatch = useDispatch()

  const theme = useSelector(selectTheme)

  const isDarkMode = theme === 'dark'

  const changeTheme = () => {
    dispatch(toggleTheme())
  }

  return (
    <Layout level="3" style={styles.container}>
      <SafeAreaView>
        <Layout style={styles.innerBox} level="3">
          {backButton ? (
            <TouchableOpacity onPress={backButton}>
              <Layout level="3" style={styles.switchContainer}>
                <Text>
                  <Icon name="arrow-left" size={24} />
                  {'   '}
                </Text>
                <Text style={styles.text}>{title}</Text>
              </Layout>
            </TouchableOpacity>
          ) : (
            <Text style={styles.text}>{title}</Text>
          )}
          <Layout level="3" style={styles.switchContainer}>
            <Text style={styles.label}>Dark side: </Text>
            <Toggle checked={isDarkMode} onChange={changeTheme} />
          </Layout>
        </Layout>
      </SafeAreaView>
    </Layout>
  )
}

export default Header
