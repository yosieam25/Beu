import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Spacing from '../Spacing';
import {UserIcon} from '../../../Assets';
import normalize from 'react-native-normalize';

const Other = ({chat, time, nama}) => {
  return (
    <View style={{paddingTop: 15}}>
      <View style={{flexDirection: 'row'}}>
        <View style={{width: normalize(40)}}></View>
        <View>
          <Text
            style={{
              fontSize: normalize(15),
              marginBottom: 5,
              color: '#817FFA',
              fontWeight: 'bold',
            }}>
            {nama}
          </Text>
          <View
            style={{
              backgroundColor: '#817FFA',
              borderRadius: 10,
              borderBottomLeftRadius: 0,
              paddingHorizontal: 16,
              paddingVertical: 11,
            }}>
            <Text style={{color: 'white', fontSize: normalize(15)}}>
              {chat}
            </Text>
          </View>
        </View>
      </View>
      <Spacing height={normalize(10)} />
      <Text style={{paddingLeft: 50}}>{time}</Text>
      <View style={{position: 'absolute', top: 50}}>
        <Image
          source={UserIcon}
          style={{width: normalize(30), height: normalize(30)}}
        />
      </View>
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({});
