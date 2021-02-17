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
import DatePicker from 'react-native-date-picker';
import {TouchableOpacity} from 'react-native-gesture-handler';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const Tanggal = ({date, onDateChange, onPress}) => {
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
          borderRadius: 20,
        }}>
        <DatePicker date={date} onDateChange={onDateChange} mode="date" />
        <Spacing height={normalize(20)} />
        <TouchableOpacity style={{alignItems: 'center'}} onPress={onPress}>
          <Text
            style={{
              fontSize: normalize(20),
              backgroundColor: 'white',
              paddingVertical: 10,
              borderRadius: 20,
              width: normalize(100),
              textAlign: 'center',
            }}>
            simpan
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Tanggal;

const styles = StyleSheet.create({});
