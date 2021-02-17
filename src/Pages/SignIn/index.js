import React, {useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Avatar1, BG_InUp, LogoBeuWhite} from '../../Assets';
import {Button, Input, Link, Loading, Spacing} from '../../Components';
import normalize from 'react-native-normalize';
import {Firebase, getData, storeData, useForm} from '../../Config';
import {showMessage} from 'react-native-flash-message';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const SignIn = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const signIn = () => {
    setLoading(true);
    Firebase.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((success) => {
        setForm('reset');
        Firebase.database()
          .ref(`Murid/${success.user.uid}/`)
          .once('value')
          .then((res) => {
            if (res.val()) {
              const data = res.val();
              storeData('Murid', data);
            }
          });
        setLoading(false);
        navigation.replace('MainApp');
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        if (err.message === 'The email address is badly formatted.') {
          const errorMessage = 'Email tidak valid';
          showMessage({
            message: errorMessage,
            backgroundColor: 'red',
            color: 'white',
          });
        }
        if (
          err.message ===
          'The password is invalid or the user does not have a password.'
        ) {
          const errorMessage = 'Email atau password salah';
          showMessage({
            message: errorMessage,
            backgroundColor: 'red',
            color: 'white',
          });
        }
      });
  };
  return (
    <>
      <View style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image source={BG_InUp} style={{width: width, height: height}} />
          <View style={{position: 'absolute', height: height}}>
            <View style={{paddingTop: 55, paddingLeft: 36, flex: 1}}>
              <Image
                source={LogoBeuWhite}
                style={{
                  width: normalize(55, 'width'),
                  height: normalize(50, 'height'),
                }}
              />
              <Text
                style={{
                  fontSize: normalize(25),
                  color: 'white',
                  fontWeight: 'bold',
                  width: normalize(200),
                }}>
                Akses materi jadi lebih mudah
              </Text>
            </View>
            <View style={{flex: 2}}>
              <View style={{flexDirection: 'row', width: width}}>
                <Text
                  style={{
                    width: normalize(150, 'width'),
                    fontSize: normalize(25),
                    fontWeight: 'bold',
                    marginLeft: 48,
                  }}>
                  Masuk akun murid
                </Text>
                <View
                  style={{alignItems: 'flex-end', flex: 1, marginRight: 48}}>
                  <Image
                    source={Avatar1}
                    style={{
                      width: normalize(40),
                      height: normalize(80),
                    }}
                  />
                </View>
              </View>
              <Spacing height={normalize(25, 'height')} />
              <View style={{paddingHorizontal: 50, flex: 1}}>
                <Input
                  value={form.email}
                  onChangeText={(value) => setForm('email', value)}
                  title="Email"
                />
                <Spacing height={normalize(20)} />
                <Input
                  value={form.password}
                  onChangeText={(value) => setForm('password', value)}
                  title="Password"
                  secure
                />
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    paddingBottom: normalize(30, 'height'),
                  }}>
                  <Button title="Sign in" onPress={signIn} />
                  <Spacing height={normalize(30)} />
                  <View style={{alignItems: 'center'}}>
                    <Link
                      title="Daftar akun"
                      onPress={() => navigation.navigate('SignUp')}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
