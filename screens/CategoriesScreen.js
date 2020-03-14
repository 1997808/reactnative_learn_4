import React from 'react'
import { View, Text, FlatList, Button, StyleSheet } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'

const renderGridItem = (itemData) => {
  return (
    <View style={styles.gridItem}>
      <Text>{itemData.item.title}</Text>
    </View>
  )
}

const CategoriesScreen = props => {
  // console.log(props)
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
    // <View style={styles.screen}>
    //   <Text>The Categories Screen</Text>
    //   <Button title="Go to Meal" onPress={() => {
    //     props.navigation.navigate({ routeName: 'CategoryMeals' })
    //     // props.navigation.push('CategoryMeals') for the same screen with different data
    //     // props.navigation.replace('CategoryMeals') for login 
    //   }} />
    // </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
})

export default CategoriesScreen