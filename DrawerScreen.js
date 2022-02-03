import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabsScreen from './TabsScreen';
import StackFilterScreen from './StackFilterScreen';
import Colors from './constants/Colors';

const Draw = createDrawerNavigator();

const DrawerScreen = () => {
  return (
    <Draw.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: Colors.accent,
        drawerInactiveTintColor: '#ccc',
        drawerLabelStyle: {
          fontSize: 18,
          fontFamily: 'open-sans-bold',
        },
      }}
    >
      <Draw.Screen
        name='Tabs'
        component={TabsScreen}
        options={{ title: 'Meals' }}
      />
      <Draw.Screen
        name='Filter'
        component={StackFilterScreen}
      />
    </Draw.Navigator>
  );
};

export default DrawerScreen;
