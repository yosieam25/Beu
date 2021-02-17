import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {LogoBeu, LogoBeuBlack} from '../../Assets';
import {Firebase} from '../../Config';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const loginSession = Firebase.auth().onAuthStateChanged((user) => {
      setTimeout(() => {
        if (user) {
          navigation.replace('MainApp');
        } else {
          navigation.replace('GetStarted');
        }
      }, 3000);
    });

    return () => loginSession();
  }, [navigation]);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
        <Image source={LogoBeu} style={{width: 300, height: 300}} />
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
        <Text style={{fontSize: 24, fontWeight: 'bold', paddingBottom: 41}}>
          Belajar Yuk
        </Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
