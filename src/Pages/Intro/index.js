import React, {useEffect} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Intro1, Intro3, RightIcon} from '../../Assets';
import {Spacing} from '../../Components';
import normalize from 'react-native-normalize';

const Intro = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <Text style={{fontSize: normalize(25, 'width'), fontWeight: 'bold'}}>
          Video Belajar
        </Text>
      </View>
      <View
        style={{
          flex: 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={Intro1}
          style={{
            height: normalize(200, 'height'),
            width: normalize(350, 'width'),
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
          Materi disampaikan dalam bentuk video, sehingga materi dapat mudah
          untuk dimengerti
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
          <TouchableOpacity onPress={() => navigation.replace('IntroDua')}>
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

export default Intro;

const styles = StyleSheet.create({});
