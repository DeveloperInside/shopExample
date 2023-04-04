import { Layout, Text } from '@ui-kitten/components'
import React from 'react'
import { View } from 'react-native'
import styles from './styles'


const Profile = () => {
  return (
    <Layout style={styles.container}>
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.email}>john.doe@example.com</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Location:</Text>
        <Text style={styles.info}>New York City, NY</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Phone:</Text>
        <Text style={styles.info}>(123) 456-7890</Text>
      </View>
    </Layout>
  )
}

export default Profile
