import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import screens, { stacks } from './screenLinking'

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={stacks.Tab.name} component={stacks.Tab.component} />
        <Stack.Screen
          name={screens.Details.name}
          component={screens.Details.component}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
