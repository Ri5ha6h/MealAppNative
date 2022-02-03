import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

const CategoryGridTile = (props) => {
  let TouchableComp = TouchableOpacity;
  if (
    Platform.OS === 'android' &&
    Platform.Version >= 21
  ) {
    TouchableComp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridCont}>
      <TouchableComp
        style={{ flex: 1 }}
        activeOpacity={0.6}
        onPress={props.onSelect}
      >
        <View
          style={{
            ...styles.container,
            ...{ backgroundColor: props.color },
          }}
        >
          <Text style={styles.gridText}>
            {props.title}
          </Text>
        </View>
      </TouchableComp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridCont: {
    flex: 1,
    margin: 12,
    paddingTop: 10,
    height: 120,
    borderRadius: 10,
    elevation: 4,
    overflow:
      Platform.OS === 'android' &&
      Platform.Version >= 21
        ? 'hidden'
        : 'visible',
  },
  container: {
    flex: 1,
    padding: 12,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  gridText: {
    fontSize: 18,
    fontFamily: 'open-sans-bold',
  },
});

export default CategoryGridTile;
