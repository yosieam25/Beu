import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import normalize from 'react-native-normalize';
import {Avatar2, CardKelas} from '../../../Assets';
import Spacing from '../Spacing';

const TodayClass = ({onPress, mapel, materi}) => {
  return (
    <View>
      <View style={styles.content}>
        <View style={{paddingTop: 10}}>
          <Image
            source={Avatar2}
            style={{width: normalize(40), height: normalize(70)}}
          />
        </View>
        <View style={styles.contents}>
          <Text
            style={{
              fontSize: normalize(18),
              fontWeight: 'bold',
            }}>
            {mapel}
          </Text>
          <Spacing height={5} />
          <Text style={{fontSize: normalize(15), opacity: 0.5}}>{materi}</Text>
        </View>
        <View style={{justifyContent: 'flex-end', paddingBottom: 25}}>
          <TouchableOpacity
            style={{alignSelf: 'flex-end', marginRight: 20}}
            onPress={onPress}>
            <Text style={styles.button}>lihat</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{position: 'absolute', zIndex: -1}}>
        <Image
          source={CardKelas}
          style={{
            width: normalize(320, 'width'),
            height: normalize(80, 'height'),
          }}
        />
      </View>
    </View>
  );
};

export default TodayClass;

const styles = StyleSheet.create({
  button: {
    fontSize: normalize(15),
    paddingHorizontal: 25,
    paddingVertical: 5,
    backgroundColor: 'white',
    borderRadius: 20,
    textAlign: 'center',
  },
  content: {
    paddingLeft: 26,
    flexDirection: 'row',
    width: normalize(320, 'width'),
    height: normalize(80, 'height'),
  },
  contents: {
    paddingLeft: 50,
    flex: 1,
    paddingTop: 20,
  },
});
