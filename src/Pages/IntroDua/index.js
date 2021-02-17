import React, {useEffect} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import normalize from 'react-native-normalize';
import {Intro2, RightIcon} from '../../Assets';
import {Spacing} from '../../Components';

const width = Dimensions.get('window').width;
const IntroDua = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <Text style={{fontSize: normalize(25, 'width'), fontWeight: 'bold'}}>
          Pengingat Notifikasi
        </Text>
      </View>
      <View
        style={{
          flex: 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={Intro2}
          style={{
            height: normalize(150, 'height'),
            width: normalize(300, 'width'),
          }}
        />
        <Spacing height={normalize(30)} />
        <Text
          style={{
            fontSize: normalize(20),
            fontWeight: 'bold',
            opacity: 0.5,
            textAlign: 'center',
            width: normalize(300, 'width'),
          }}>
          Dapatkan pengingat notifikasi untuk setiap materi dan quiz sudah
          diupload oleh guru
        </Text>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 1, justifyContent: 'center', paddingLeft: 34}}>
          <TouchableOpacity onPress={() => navigation.replace('GetStarted')}>
            <Text style={{fontSize: normalize(20)}}>lewati</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            paddingRight: 34,
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity onPress={() => navigation.replace('IntroTiga')}>
            <Image
              source={RightIcon}
              style={{width: normalize(30), height: normalize(30)}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default IntroDua;

const styles = StyleSheet.create({});
