import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import normalize from 'react-native-normalize';
import {CardNilai} from '../../../Assets';

const width = Dimensions.get('window').width;
const CardNilais = ({namaMateri, tanggal, score}) => {
  return (
    <View>
      <Image
        source={CardNilai}
        style={{
          width: normalize(340, 'width'),
          height: normalize(93, 'height'),
        }}
      />
      <View style={styles.wrapper}>
        <View style={{flex: 3, paddingLeft: 34, paddingTop: normalize(20)}}>
          <Text style={{fontSize: normalize(20), color: 'white'}}>
            {namaMateri}
          </Text>
          <Text style={{opacity: 0.5, marginTop: normalize(10)}}>
            {tanggal}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
            paddingRight: 33,
            paddingTop: 15,
          }}>
          <Text
            style={{
              fontSize: normalize(40),
              fontWeight: 'bold',
              color: '#112340',
            }}>
            {score}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CardNilais;

const styles = StyleSheet.create({
  wrapper: {
    width: normalize(340, 'width'),
    height: normalize(93, 'height'),
    position: 'absolute',
    flexDirection: 'row',
  },
});
