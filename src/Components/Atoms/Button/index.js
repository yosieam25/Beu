import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ButtonBack from './ButtonBack';
import ButtonQuiz from './ButtonQuiz';
import ButtonFinish from './ButtonFinish';
import normalize from 'react-native-normalize';

const Button = ({title, type, onPress, quiz, back, finish}) => {
  if (quiz) {
    return <ButtonQuiz onPress={onPress} />;
  }
  if (back) {
    return <ButtonBack onPress={onPress} />;
  }
  if (finish) {
    return <ButtonFinish onPress={onPress} />;
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.wrapper(type)}>
        <Text style={styles.title(type)}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  title: (type) => ({
    color: type === 'Sign in' ? '#B9B8F1' : 'white',
    fontSize: normalize(20),
  }),
  wrapper: (type) => ({
    paddingVertical: normalize(15),
    backgroundColor: type === 'Sign in' ? 'white' : '#B9B8F1',
    alignItems: 'center',
    borderRadius: 30,
  }),
});
