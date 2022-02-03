import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';
import Colors from '../constants/Colors';

const CategoryMealScreen = (props) => {
  const { categoryId } = props.route.params;
  const availableMeals = useSelector(
    (state) => state.meals.filteredMeals
  );
  const displayMeals = availableMeals.filter(
    (meal) =>
      meal.categoryIds.indexOf(categoryId) >= 0
  );

  if (displayMeals.length === 0) {
    return (
      <View style={styles.cont}>
        <Text style={styles.text}>
          No meals found. Check your filters!!
        </Text>
      </View>
    );
  }

  return (
    <MealList
      meals={displayMeals}
      navigation={props.navigation}
    />
  );
};

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 12,
  },
  text: {
    fontSize: 18,
    fontFamily: 'open-sans-bold',
    color: Colors.primary,
    textAlign: 'center',
  },
});

export default CategoryMealScreen;
