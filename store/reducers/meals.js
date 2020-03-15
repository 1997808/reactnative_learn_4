import { MEALS } from '../../data/dummy-data'
import { TOGGLE_FAVORITE } from '../actions/meals'

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const exitstingIndex = state.favoriteMeals.findIndex(
        meal => meal.id === action.mealId
      )
      if (exitstingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals]
        updatedFavMeals.splice(exitstingIndex, 1)
        return { ...state, favoriteMeals: updatedFavMeals }
      } else {
        const meal = state.meals.find(meal => meal.id === action.mealId)
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) }
      }

    default:
      return state
  }
}

export default mealsReducer