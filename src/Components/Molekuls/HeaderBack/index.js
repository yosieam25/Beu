import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import normalize from 'react-native-normalize';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {BackIcon} from '../../../Assets';

const HeaderBack = ({onPress}) => {
  return (
    <View
      style={{
        width: Dimensions.get('window').width,
        height: normalize(100, 'height'),
        backgroundColor: '#B9B8F1',
        flexDirection: 'row',
      }}>
      <View style={{paddingTop: 10, paddingLeft: 25}}>
        <TouchableOpacity onPress={onPress}>
          <Image
            source={BackIcon}
            style={{width: normalize(30), height: normalize(30)}}
          />
        </TouchableOpacity>
      </View>
      <View style={{paddingTop: 15, paddingLeft: 12}}>
        <Text style={{fontSize: normalize(20), fontWeight: 'bold'}}>
          Kembali
        </Text>
      </View>
    </View>
  );
};

export default HeaderBack;

const styles = StyleSheet.create({});
