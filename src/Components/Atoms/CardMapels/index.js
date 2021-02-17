import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import normalize from 'react-native-normalize';
import {CardMapel} from '../../../Assets';

const CardMapels = ({lesson, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{marginBottom: 22, marginHorizontal: normalize(10)}}>
      <Image
        source={CardMapel}
        style={{
          width: normalize(140, 'width'),
          height: normalize(80, 'height'),
        }}
      />
      <View
        style={{
          width: normalize(140, 'width'),
          height: normalize(80, 'height'),
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: normalize(15),
            fontWeight: 'bold',
            maxWidth: 97,
            textAlign: 'center',
          }}>
          {lesson}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardMapels;

const styles = StyleSheet.create({});
