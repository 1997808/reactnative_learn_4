import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'

const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam('categoryId')

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
  return (
    <View style={styles.screen}>
      <Text>The Category Meals Screen Screen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button title="Go to Deatails" onPress={() => {
        props.navigation.navigate({ routeName: 'MealDetail' })
      }} />
      <Button title="Go Back" onPress={() => {
        props.navigation.pop()
        // props.navigation.goBack()
      }} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CategoryMealsScreen