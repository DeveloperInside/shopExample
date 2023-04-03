import { View } from 'react-native'
import React from 'react'
import themedStyles from './styles'
import { Text } from '@ui-kitten/components'

const Badge = ({ number }) => {
  if (!number) return

  const styles = themedStyles()

  return (
    <View style={styles.bagde} testID="badge-component">
      <Text style={styles.text}>{number}</Text>
    </View>
  )
}

export default Badge
