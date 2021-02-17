import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ButtonQuiz = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>next</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonQuiz;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 59,
    paddingVertical: 9,
    backgroundColor: '#112340',
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
