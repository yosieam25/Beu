import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import normalize from 'react-native-normalize';
import {Hadir, NoHadir} from '../../../Assets';
import {Spacing} from '../../Atoms';

const DailyAbsensi = ({title, date, result}) => {
  const Icon = () => {
    if (result === 'Hadir') {
      return (
        <Image
          source={Hadir}
          style={{width: normalize(23), height: normalize(23)}}
        />
      );
    }
    if (result === 'NoHadir') {
      return (
        <Image
          source={NoHadir}
          style={{width: normalize(23), height: normalize(23)}}
        />
      );
    }
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
      }}>
      <View>
        <Text style={{fontSize: normalize(20), fontWeight: 'bold'}}>
          {title}
        </Text>
        <Spacing height={5} />
        <Text style={{fontSize: normalize(15), opacity: 0.5}}>
          {title}, {date}
        </Text>
      </View>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <Icon />
      </View>
    </View>
  );
};

export default DailyAbsensi;

const styles = StyleSheet.create({});
