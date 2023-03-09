import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailsScreen = ({route}) => {
  const {itemName, itemDesc} = route.params
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Project Name :</Text>
      <Text style={styles.bubble}>{itemName}</Text>
      <Text style={styles.title}>Description : </Text>
      <Text style={styles.bubble}>{itemDesc}</Text>
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1
  },

  title: {
    fontSize: 18,
    // color: 'black'
  },

  bubble:{
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    fontSize: 18,
    color: 'black'
  } 
})