import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import normalize from 'react-native-normalize';
import {UserBlackIcon} from '../../../Assets';
import Spacing from '../Spacing';

const BestStudent = ({nama, score}) => {
  return (
    <View style={styles.wrapper}>
      <Image
        source={UserBlackIcon}
        style={{width: normalize(40), height: normalize(40)}}
      />
      <Spacing height={12} />
      <Text style={styles.name}>{nama}</Text>
      <Spacing height={19} />
      <Text style={styles.name}>{score}/100</Text>
    </View>
  );
};

export default BestStudent;

const styles = StyleSheet.create({
  wrapper: {
    width: normalize(100),
    height: normalize(200),
    backgroundColor: '#B9B8F1',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    maxWidth: normalize(80),
    fontSize: normalize(20),
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
