import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ButtonFinish = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>home</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonFinish;

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
