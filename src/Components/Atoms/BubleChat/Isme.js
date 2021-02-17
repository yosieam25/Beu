import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import normalize from 'react-native-normalize';
import Spacing from '../Spacing';

const Isme = ({chat, time}) => {
  return (
    <View style={{alignItems: 'flex-end', paddingTop: 15}}>
      <View
        style={{
          backgroundColor: '#626278',
          borderRadius: 10,
          borderBottomRightRadius: 0,
          paddingHorizontal: 16,
          paddingVertical: 11,
        }}>
        <Text style={{color: 'white', fontSize: normalize(15)}}>{chat}</Text>
      </View>
      <Spacing height={normalize(10)} />
      <Text>{time}</Text>
    </View>
  );
};

export default Isme;

const styles = StyleSheet.create({});
