import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import normalize from 'react-native-normalize';
import ImagePicker from 'react-native-image-picker';
import {useState} from 'react/cjs/react.development';
import {BG_InUp, CameraIcon, LogoBeuWhite} from '../../Assets';
import {Button, Input, Link, Spacing} from '../../Components';
import {Firebase, useForm} from '../../Config';
import {showMessage} from 'react-native-flash-message';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const SignUp = ({navigation}) => {
  const [form, setForm] = useForm({
    nama: '',
    email: '',
    password: '',
  });
  const [photo, setPhoto] = useState(CameraIcon);
  const [photoDB, setPhotoDB] = useState();
  const pilihPhoto = () => {
    ImagePicker.launchImageLibrary({}, (res) => {
      if (res.didCancel || res.error) {
        showMessage({
          message: 'Anda belum mengupload photo anda!',
          backgroundColor: 'red',
          color: 'white',
        });
      } else {
        setPhoto({uri: res.uri});
        setPhotoDB(`data:${res.type};base64,${res.data}`);
      }
    });
  };
  const signUp = () => {
    Firebase.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((success) => {
        const data = {
          uid: success.user.uid,
          nama: form.nama,
          email: form.email,
          photo: photoDB,
        };
        setForm('reset');
        Firebase.database().ref(`Murid/${success.user.uid}/`).set(data);
        navigation.replace('SignIn');
      })
      .catch((err) => {
        console.log(err);
        if (err.message === 'The email address is badly formatted.') {
          const errorMessage = 'Email tidak valid';
          showMessage({
            message: errorMessage,
            backgroundColor: 'red',
            color: 'white',
          });
        }
        if (err.message === 'The password must be 6 characters long or more.') {
          const errorMessage = 'Password harus lebih dari 6 karakter';
          showMessage({
            message: errorMessage,
            backgroundColor: 'red',
            color: 'white',
          });
        }
        if (
          err.message ===
          'The email address is already in use by another account.'
        ) {
          const errorMessage = 'Email sudah digunakan oleh murid lain';
          showMessage({
            message: errorMessage,
            backgroundColor: 'red',
            color: 'white',
          });
        }
      });
  };
  return (
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
                Daftar akun murid
              </Text>
              <View
                style={{
                  flex: 1,
                  alignItems: 'flex-end',
                  paddingRight: 48,
                }}>
                <TouchableOpacity onPress={pilihPhoto}>
                  <Image
                    source={photo}
                    style={{
                      width: normalize(55, 'width'),
                      height: normalize(50, 'height'),
                      marginRight: 10,
                      borderRadius: normalize(55, 'width') / 2,
                    }}
                  />
                </TouchableOpacity>
                <Text style={{fontSize: normalize(15)}}>Upload photo</Text>
              </View>
            </View>
            <Spacing height={normalize(20)} />
            <View style={{paddingHorizontal: normalize(40, 'width')}}>
              <Input
                value={form.nama}
                onChangeText={(value) => setForm('nama', value)}
                title="Nama Lengkap"
              />
              <Spacing height={normalize(15)} />
              <Input
                value={form.email}
                onChangeText={(value) => setForm('email', value)}
                title="Email"
              />
              <Spacing height={normalize(15)} />
              <Input
                value={form.password}
                onChangeText={(value) => setForm('password', value)}
                title="Password"
                secure
              />
              <Spacing height={normalize(35, 'height')} />
              <Button title="Sign up" onPress={signUp} />
              <Spacing height={normalize(20)} />
              <View style={{alignItems: 'center'}}>
                <Link
                  title="Sign in"
                  onPress={() => navigation.navigate('SignIn')}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
