import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import normalize from 'react-native-normalize';
import {BadScore} from '../../Assets';
import {Button, Spacing} from '../../Components';

const FinishQuiz2 = ({total, pindah}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#817FFA'}}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={BadScore}
            style={{width: normalize(100), height: normalize(130)}}
          />
          <Spacing height={26} />
          <Text
            style={{
              fontSize: normalize(30),
              color: 'white',
              fontWeight: 'bold',
            }}>
            Tingkatkan belajar mu ya
          </Text>
          <Spacing height={12} />
          <Text
            style={{
              fontSize: normalize(30),
              color: 'white',
              fontWeight: 'bold',
            }}>
            Nilai kamu
          </Text>
          <Text
            style={{
              fontSize: normalize(50),
              color: 'white',
              fontWeight: 'bold',
            }}>
            {total}/100
          </Text>
          <Spacing height={normalize(40)} />
          <Button finish onPress={pindah} />
        </View>
      </View>
    </View>
  );
};

export default FinishQuiz2;

const styles = StyleSheet.create({});
