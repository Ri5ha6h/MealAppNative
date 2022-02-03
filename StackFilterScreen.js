import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from './constants/Colors';
import FilterScreen from './screens/FilterScreen';

const FilStack = createNativeStackNavigator();

const StackFilterScreen = () => {
  return (
    <FilStack.Navigator
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
      <FilStack.Screen
        name='Find'
        component={FilterScreen}
        options={{ title: 'Filter Meals' }}
      />
    </FilStack.Navigator>
  );
};

export default StackFilterScreen;
