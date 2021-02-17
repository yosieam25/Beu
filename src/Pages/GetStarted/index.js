import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {BG_GS, LogoBeuWhite} from '../../Assets';
import {Button, Spacing} from '../../Components';
import normalize from 'react-native-normalize';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const GetStarted = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Image source={BG_GS} style={{width: width, height: height}} />
      <View style={{position: 'absolute', height: height}}>
        <View style={{flex: 1, paddingLeft: 36, paddingTop: 57}}>
          <Image
            source={LogoBeuWhite}
            style={{
              width: normalize(55, 'width'),
              height: normalize(50, 'height'),
            }}
          />
          <Text
            style={{
              fontSize: normalize(30),
              fontWeight: 'bold',
              color: 'white',
            }}>
            Akses materi jadi lebih mudah
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 60,
            justifyContent: 'flex-end',
            paddingBottom: 80,
          }}>
          <Button
            title="Sign up"
            onPress={() => {
              navigation.replace('SignUp');
            }}
          />
          <Spacing height={30} />
          <Button
            title="Sign in"
            type="Sign in"
            onPress={() => navigation.replace('SignIn')}
          />
        </View>
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({});
