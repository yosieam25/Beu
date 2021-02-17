import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {NoHadir, UserBlackIcon} from '../../Assets';
import {HeaderBack, ItemMateri, Spacing} from '../../Components';

const HistoryAbsensi = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.wrapper}>
        <Spacing height={50} />
        <View style={{paddingHorizontal: 20}}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>
            History Absensi
          </Text>
          <Spacing height={20} />
          <View style={{alignItems: 'center'}}>
            <Image source={UserBlackIcon} />
          </View>
          <Spacing height={60} />
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 25}}>Jumat</Text>
              <Text>12/17/20</Text>
            </View>
            <Image source={NoHadir} style={{width: 30, height: 30}} />
          </View>
        </View>
      </View>
      <View style={{position: 'absolute', zIndex: -1}}>
        <HeaderBack onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default HistoryAbsensi;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 60,
    flex: 1,
  },
});
