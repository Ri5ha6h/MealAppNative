import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen';
import CategoryMealScreen from './screens/CategoryMealScreen';
import MealScreen from './screens/MealScreen';
import Colors from './constants/Colors';

const MealStack = createNativeStackNavigator();

const StackMealScreen = () => {
  return (
    <MealStack.Navigator
      initialRouteName='Categories'
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS === 'ios'
              ? 'white'
              : Colors.primary,
        },
        headerTintColor:
          Platform.OS === 'ios'
            ? Colors.primary
            : 'white',
        headerTitleStyle: {
          fontFamily: 'open-sans-bold',
        },
      }}
    >
      <MealStack.Screen
        name='Categories'
        component={CategoriesScreen}
        options={{ title: 'Meal Categories' }}
      />
      <MealStack.Screen
        name='CategoryMeal'
        component={CategoryMealScreen}
        options={({ route }) => ({
          title: route.params.categoryTitle,
        })}
      />
      <MealStack.Screen
        name='Meal'
        component={MealScreen}
        options={({ route }) => ({
          title: route.params.mealTitle,
        })}
      />
    </MealStack.Navigator>
  );
};

export default StackMealScreen;
