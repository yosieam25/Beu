import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import normalize from 'react-native-normalize';
import {BG_Absensi, UserBlackIcon} from '../../../Assets';

const HeaderAbsensi = () => {
  return (
    <View>
      <View style={{alignItems: 'center'}}>
        <Image
          source={BG_Absensi}
          style={{
            width: normalize(300, 'width'),
            height: normalize(80, 'height'),
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          top: 15,
          paddingLeft: 10,
        }}>
        <Image
          source={UserBlackIcon}
          style={{width: normalize(80), height: normalize(80)}}
        />
        <View style={{flexDirection: 'row', paddingLeft: 40}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: normalize(20),
              maxWidth: 100,
              marginTop: 10,
            }}>
            ABSEN HARI INI
          </Text>
          <View style={{justifyContent: 'flex-end', margin: 20}}>
            <Text
              style={{
                paddingHorizontal: 30,
                paddingVertical: 6,
                backgroundColor: 'white',
                borderRadius: 20,
                fontSize: normalize(15),
              }}>
              klik
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HeaderAbsensi;

const styles = StyleSheet.create({});
