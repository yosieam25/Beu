import React, {useEffect, useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import normalize from 'react-native-normalize';
import {HelpIcon, UserBlackIcon} from '../../Assets';
import {Button, ProfilAction, Spacing} from '../../Components';
import {Firebase, getData} from '../../Config';

const width = Dimensions.get('window').width;
const User = ({navigation}) => {
  const [user, setUser] = useState({
    nama: '',
    photo: UserBlackIcon,
    uid: '',
  });
  useEffect(() => {
    getData('Murid').then((res) => {
      const data = res;
      data.photo = {uri: res.photo};
      setUser(data);
    });
  }, []);
  const signOut = () => {
    Firebase.auth()
      .signOut()
      .then(() => {
        navigation.replace('SignIn');
      });
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              paddingLeft: 20,
              paddingTop: 17,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: normalize(25),
                color: 'white',
                fontWeight: 'bold',
              }}>
              Profil
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
              paddingRight: 20,
              paddingTop: 17,
            }}>
            <Image
              source={HelpIcon}
              style={{width: normalize(20), height: normalize(20)}}
            />
          </View>
        </View>
        <View style={{alignItems: 'center', marginTop: normalize(20)}}>
          <Image
            source={user.photo}
            style={{
              width: normalize(100, 'width'),
              height: normalize(87, 'height'),
              borderRadius: normalize(100, 'width') / 2,
            }}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <Spacing height={normalize(20)} />
          <Text style={{fontSize: normalize(25), fontWeight: 'bold'}}>
            {user.nama}
          </Text>
        </View>
        {/* isi content */}
        <View style={{justifyContent: 'center', flex: 1}}>
          <ProfilAction
            title="Nilai quiz"
            onPress={() => navigation.navigate('QuizScore')}
          />
          <ProfilAction
            onPress={() => navigation.navigate('Absensi', user)}
            title="Absensi"
          />
          <ProfilAction title="Papan Peringkat" />
          <ProfilAction
            title="Ubah Profil"
            onPress={() => navigation.navigate('EditUser')}
          />
        </View>
        <View style={{marginHorizontal: 30, paddingBottom: 30}}>
          <Button title="Sign out" onPress={signOut} />
        </View>
      </View>
      <View
        style={{
          width: Dimensions.get('window').width,
          height: 130,
          backgroundColor: '#B9B8F1',
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          position: 'absolute',
          zIndex: -1,
        }}
      />
    </View>
  );
};

export default User;

const styles = StyleSheet.create({});
