import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import normalize from 'react-native-normalize';
import Spacing from '../Spacing';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const Loading = () => {
  return (
    <View
      style={{
        width: width,
        height: height,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(240, 248, 254,0.5)',
      }}>
      <View
        style={{
          backgroundColor: 'rgb(230, 230, 250)',
          paddingVertical: normalize(30),
          width: normalize(200),
          borderRadius: 20,
        }}>
        <ActivityIndicator size={normalize(40)} color="black" />
        <Spacing height={normalize(30)} />
        <Text
          style={{
            fontSize: normalize(30),
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Menunggu...
        </Text>
      </View>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({});
