import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import normalize from 'react-native-normalize';
import {BG_FinishQuiz, Confeti1, Confeti2, Cup} from '../../Assets';
import {Button, Spacing} from '../../Components';
import FinishQuiz2 from './FinishQuiz2';

const FinishQuiz = ({navigation, route}) => {
  const total = route.params;
  const navi = () => navigation.navigate('MainApp');
  return (
    <>
      {total > 50 ? (
        <View style={{flex: 1}}>
          <View style={{flex: 1}}>
            <View style={{alignItems: 'flex-end'}}>
              <Image
                source={Confeti1}
                style={{width: normalize(100), height: normalize(100)}}
              />
            </View>
            <View style={{alignItems: 'center'}}>
              <Image
                source={Cup}
                style={{width: normalize(100), height: normalize(130)}}
              />
              <Spacing height={26} />
              <Text
                style={{
                  fontSize: normalize(30),
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                Congratulation
              </Text>
              <Spacing height={12} />
              <Text
                style={{
                  fontSize: normalize(30),
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                Nilai kamu
              </Text>
              <Text
                style={{
                  fontSize: normalize(50),
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                {total}/100
              </Text>
              <Spacing height={normalize(40)} />
              <Button finish onPress={() => navigation.replace('MainApp')} />
            </View>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <Image
                source={Confeti2}
                style={{width: normalize(100), height: normalize(100)}}
              />
            </View>
          </View>
          <View style={{position: 'absolute', zIndex: -1}}>
            <Image
              source={BG_FinishQuiz}
              style={{
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height,
              }}
            />
          </View>
        </View>
      ) : (
        <View style={{flex: 1}}>
          <FinishQuiz2 total={total} pindah={navi} />
        </View>
      )}
    </>
  );
};

export default FinishQuiz;

const styles = StyleSheet.create({});
