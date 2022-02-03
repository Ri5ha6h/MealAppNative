import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoritesScreen from './screens/FavoritesScreen';
import Colors from './constants/Colors';
import MealScreen from './screens/MealScreen';

const FavStack = createNativeStackNavigator();

const StackFavScreen = () => {
  return (
    <FavStack.Navigator
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
          fontWeight: 'bold',
        },
      }}
    >
      <FavStack.Screen
        name='Favorites'
        component={FavoritesScreen}
        options={{ title: 'Favorite Meals' }}
      />
      <FavStack.Screen
        name='Meal'
        component={MealScreen}
        options={({ route }) => ({
          title: route.params.mealTitle,
        })}
      />
    </FavStack.Navigator>
  );
};

export default StackFavScreen;
