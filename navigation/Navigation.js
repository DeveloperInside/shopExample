import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import screens from './screenLinking'
import { TouchableOpacity, View } from 'react-native'
import { Divider, Layout, Text } from '@ui-kitten/components'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { theme } from 'theme/ThemeProvider'
import Badge from 'components/Badge'
import themedStyles from './styles'
import { useSelector } from 'react-redux'
import { selectCart, selectFavorites } from 'redux/slices/products/selectors'

const TabBar = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options

  const styles = themedStyles()

  if (focusedOptions.tabBarVisible === false) {
    return null
  }
  const colors = theme.colors()

  return (
    <Layout style={{ flexDirection: 'row' }} level="3">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]

        // Check tab bar label, if not turn route name
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index

        const icon = options.tabBarIcon ? options.tabBarIcon : 'home'
        const color = isFocused ? colors.tabBarIcon_x : colors.tabBarIcon
        const badge = options.tabBarBadge

        const navigate = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        return (
          <TouchableOpacity
            key={route.key}
            onPress={navigate}
            style={styles.navigationItem}>
            <Badge number={badge}/>
            <Icon name={icon} color={color} size={20} />
            <Text style={[styles.text, { color: color }]}>{label}</Text>
          </TouchableOpacity>
        )
      })}
    </Layout>
  )
}

const Tab = createBottomTabNavigator()

const Navigation = () => {

  const cartBadge = useSelector(selectCart).length
  const favoritesBadge = useSelector(selectFavorites).length

  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={props => <TabBar {...props} />}>
        <Tab.Screen
          name={screens.Products.name}
          component={screens.Products.component}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: 'home',
          }}
        />
        <Tab.Screen
          name={screens.Cart.name}
          component={screens.Cart.component}
          options={{
            tabBarLabel: 'Cart',
            tabBarIcon: 'cart',
            tabBarBadge: cartBadge,
          }}
        />
        <Tab.Screen
          name={screens.Favorites.name}
          component={screens.Favorites.component}
          options={{
            tabBarLabel: 'Favorites',
            tabBarIcon: 'heart',
            tabBarBadge: favoritesBadge,
          }}
        />
        <Tab.Screen
          name={screens.Profile.name}
          component={screens.Profile.component}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: 'account',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
