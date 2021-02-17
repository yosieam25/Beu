import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import normalize from 'react-native-normalize';
import Link from '../Link';

const width = Dimensions.get('window').width;
const LabelHome = ({onPress, title}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: width,
        paddingHorizontal: 30,
      }}>
      <View style={{flex: 1}}>
        <Text
          style={{
            fontSize: normalize(25),
            fontWeight: 'bold',
            opacity: 0.5,
          }}>
          {title}
        </Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
        <TouchableOpacity onPress={onPress}>
          <Text
            style={{
              textDecorationLine: 'underline',
              fontSize: normalize(15),
            }}>
            lihat semua
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LabelHome;

const styles = StyleSheet.create({});
