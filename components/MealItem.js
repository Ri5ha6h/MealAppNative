import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import TextDefault from './TextDefault';

const MealItem = (props) => {
  return (
    <View style={styles.mealCont}>
      <TouchableOpacity
        onPress={props.onSelectMeal}
      >
        <View>
          <View
            style={{
              ...styles.mealRow,
              ...styles.mealHeader,
            }}
          >
            <ImageBackground
              style={styles.bgImage}
              source={{ uri: props.image }}
            >
              <View style={styles.titleCont}>
                <Text
                  style={styles.title}
                  numberOfLines={1}
                >
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View
            style={{
              ...styles.mealRow,
              ...styles.mealDetail,
            }}
          >
            <TextDefault>
              {props.duration}m
            </TextDefault>
            <TextDefault>
              {props.complexity.toUpperCase()}
            </TextDefault>
            <TextDefault>
              {props.affordability.toUpperCase()}
            </TextDefault>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealCont: {
    height: 200,
    width: '100%',
    backgroundColor: '#E5E7EB',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 12,
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '85%',
  },
  mealDetail: {
    height: '15%',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  titleCont: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});

export default MealItem;
