import React, { useLayoutEffect } from 'react';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  HeaderButtons,
  Item,
} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';

const FavoritesScreen = ({ navigation }) => {
  const favMeal = useSelector(
    (state) => state.meals.favoriteMeals
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons
          HeaderButtonComponent={
            CustomHeaderButton
          }
        >
          <Item
            title='Menu'
            iconName='ios-menu'
            onPress={() => {
              navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  if (favMeal.length === 0 || !favMeal) {
    return (
      <View style={styles.cont}>
        <Text style={styles.text}>
          No favorite meals found. Start adding
          some!!{' '}
        </Text>
      </View>
    );
  }

  return (
    <MealList
      navigation={navigation}
      meals={favMeal}
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

export default FavoritesScreen;
