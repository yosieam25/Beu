import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ButtonBack = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>kembali</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonBack;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 59,
    paddingVertical: 9,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  text: {
    color: '#112340',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
