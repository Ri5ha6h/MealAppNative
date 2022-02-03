import React from 'react';
import { Platform } from 'react-native';
import Colors from './constants/Colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import StackMealScreen from './StackMealScreen';
import { Ionicons } from '@expo/vector-icons';
import StackFavScreen from './StackFavScreen';

// const Tab =
//   Platform.OS === 'ios'
//     ? createBottomTabNavigator()
//     : createMaterialBottomTabNavigator();

const Tab = createBottomTabNavigator();

const TabsScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName='All'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === 'All') {
            iconName = 'ios-restaurant';
          } else if (route.name === 'Fav') {
            iconName = 'ios-star';
          }
          return (
            <Ionicons
              name={iconName}
              size={24}
              color={color}
            />
          );
        },
        tabBarActiveTintColor: Colors.accent,
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen
        name='All'
        component={StackMealScreen}
        options={() => ({
          tabBarLabel: 'Meals',
        })}
      />
      <Tab.Screen
        name='Fav'
        component={StackFavScreen}
        options={() => ({
          tabBarLabel: 'Favorites!',
        })}
      />
    </Tab.Navigator>
  );
};

export default TabsScreen;
