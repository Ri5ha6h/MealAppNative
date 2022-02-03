import React, {
  useCallback,
  useLayoutEffect,
} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import {
  useSelector,
  useDispatch,
} from 'react-redux';
import {
  HeaderButtons,
  Item,
} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import TextDefault from '../components/TextDefault';
import Colors from '../constants/Colors';
import { toggleFavorite } from '../store/actions/meals';

const MealScreen = ({ route, navigation }) => {
  const { mealId } = route.params;
  const availableMeals = useSelector(
    (state) => state.meals.meals
  );
  const selectedMeal = availableMeals.find(
    (meal) => meal.id === mealId
  );
  const currentFavMeal = useSelector((state) =>
    state.meals.favoriteMeals.some(
      (meal) => meal.id === mealId
    )
  );

  const dispatch = useDispatch();

  const favHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons
          HeaderButtonComponent={
            CustomHeaderButton
          }
        >
          <Item
            title='Favorite'
            iconName={
              currentFavMeal
                ? 'ios-star'
                : 'ios-star-outline'
            }
            onPress={favHandler}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation, currentFavMeal]);

  return (
    <ScrollView>
      <Image
        style={styles.image}
        source={{ uri: selectedMeal.imageUrl }}
      />
      <View style={styles.details}>
        <TextDefault>
          {selectedMeal.duration}m
        </TextDefault>
        <TextDefault>
          {selectedMeal.complexity.toUpperCase()}
        </TextDefault>
        <TextDefault>
          {selectedMeal.affordability.toUpperCase()}
        </TextDefault>
      </View>
      {/* Ingredients */}
      <View style={styles.cont}>
        <Text style={styles.title}>
          Ingredients
        </Text>
        {selectedMeal.ingredients.map(
          (ingre, i) => (
            <View key={i} style={styles.list}>
              <Text style={styles.listText}>
                {ingre}
              </Text>
            </View>
          )
        )}
      </View>
      {/* Steps */}
      <View style={styles.cont}>
        <Text style={styles.title}>Steps</Text>
        {selectedMeal.steps.map((step, i) => (
          <View key={i} style={styles.list}>
            <Text style={styles.listText}>
              {step}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 12,
    justifyContent: 'space-around',
  },
  cont: {
    marginVertical: 12,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    textAlign: 'center',
    color: Colors.primary,
  },
  list: {
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#DDD6FE',
    borderRadius: 10,
  },
  listText: {
    fontFamily: 'open-sans',
    fontSize: 16,
  },
});

export default MealScreen;
