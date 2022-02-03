import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import MealItem from './MealItem';

const MealList = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        affordability={
          itemData.item.affordability
        }
        complexity={itemData.item.complexity}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          props.navigation.navigate('Meal', {
            mealId: itemData.item.id,
            mealTitle: itemData.item.title,
          });
        }}
      />
    );
  };
  return (
    <View
      style={{
        ...styles.mainCont,
        ...props.style,
      }}
    >
      <FlatList
        data={props.meals}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainCont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
  },
});

export default MealList;
