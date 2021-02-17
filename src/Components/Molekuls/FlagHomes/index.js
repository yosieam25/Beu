import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import normalize from 'react-native-normalize';
import {FlagHome} from '../../../Assets';
import {Spacing} from '../../Atoms';

const FlagHomes = () => {
  return (
    <View style={{width: Dimensions.get('window').width}}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={FlagHome}
          style={{width: normalize(300), height: normalize(150)}}
        />
      </View>
      <View style={{position: 'absolute', left: 67, top: 22}}>
        <Text
          style={{
            fontSize: normalize(20),
            fontWeight: 'bold',
            maxWidth: 180,
          }}>
          Belajar jadi lebih mudah
        </Text>
        <Spacing height={15} />
        <View style={{alignItems: 'center', marginRight: 60}}>
          <Text
            style={{
              paddingVertical: 6,
              paddingHorizontal: 28,
              backgroundColor: 'white',
              borderRadius: 20,
              color: '#8981FA',
            }}>
            lihat kelas
          </Text>
        </View>
      </View>
    </View>
  );
};

export default FlagHomes;

const styles = StyleSheet.create({});
