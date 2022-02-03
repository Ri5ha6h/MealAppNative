import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const TextDefault = (props) => {
  return (
    <Text style={styles.text}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.accent,
    fontFamily: 'open-sans',
  },
});

export default TextDefault;
