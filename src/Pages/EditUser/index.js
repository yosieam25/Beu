import React, {useEffect, useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import normalize from 'react-native-normalize';
import {AddPhoto, CancelPhoto, UserBlackIcon} from '../../Assets';
import {
  Button,
  HeaderBack,
  Input,
  Loading,
  Spacing,
  Tanggal,
} from '../../Components';
import {Firebase, getData, storeData, useForm} from '../../Config';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const EditUser = ({navigation}) => {
  const [form, setForm] = useState({
    nama: '',
    Email: '',
  });
  const [form2, setForm2] = useState({
    kelas: '',
    jenisKelamin: '',
    tempatLahir: '',
  });
  const [password, setPassword] = useState();
  const [pilihtanggal, setPilihTanggal] = useState(false);
  const [tanggal, setTanggal] = useState(new Date());
  const [today] = useState(new Date());
  const [photo, setPhoto] = useState();
  const [photoDB, setPhotoDB] = useState();
  useEffect(() => {
    getData('Murid').then((res) => {
      setForm(res);
      setPhoto(res.photo);
    });
  }, []);

  const getPhoto = () => {
    ImagePicker.launchImageLibrary({}, (res) => {
      if (res.didCancel || res.error) {
        showMessage({
          message: 'Anda belum mengupload photo anda!',
          backgroundColor: 'red',
          color: 'white',
        });
      } else {
        setPhoto(res.uri);
        setPhotoDB(`data:${res.type};base64,${res.data}`);
      }
    });
  };
  const Photo = () => {
    if (photo != null) {
      return (
        <View>
          <Image
            source={{uri: photo}}
            style={{
              width: normalize(100, 'width'),
              height: normalize(87, 'height'),
              borderRadius: normalize(100, 'width') / 2,
            }}
          />
          <Image
            source={CancelPhoto}
            style={{
              width: normalize(40),
              height: normalize(40),
              position: 'absolute',
              right: 0,
              bottom: 0,
            }}
          />
        </View>
      );
    }
    return (
      <View>
        <Image
          source={UserBlackIcon}
          style={{
            width: normalize(100, 'width'),
            height: normalize(87, 'height'),
          }}
        />
        <Image
          source={AddPhoto}
          style={{
            width: normalize(40),
            height: normalize(40),
            position: 'absolute',
            right: 0,
            bottom: 0,
          }}
        />
      </View>
    );
  };
  const EditForm = (type, value) => {
    setForm({...form, [type]: value});
    setForm2({...form2, [type]: value});
  };
  const pilihTanggal = () => {
    setPilihTanggal(true);
  };
  const simpanTanggal = () => {
    setPilihTanggal(false);
  };
  const simpanData = () => {
    if (password.length > 0) {
      if (password.length < 6) {
        showMessage({
          message: 'Password harus lebih dari 6',
          backgroundColor: 'red',
          color: 'white',
        });
      } else {
        submitPassword();
        submitData();
        navigation.replace('MainApp');
      }
    } else {
      submitData();
      navigation.replace('MainApp');
    }
  };
  const submitPassword = () => {
    Firebase.auth().onAuthStateChanged((user) => {
      user.updatePassword(password);
    });
  };
  const submitData = () => {
    const data = {
      nama: form.nama,
      kelas: form2.kelas,
      jenisKelamin: form2.jenisKelamin,
      tempatLahir: form2.tempatLahir,
      tanggalLahir: tanggal.toLocaleDateString(),
      photo: photoDB,
      email: form.email,
      uid: form.uid,
    };
    Firebase.database()
      .ref(`Murid/${form.uid}/`)
      .update(data)
      .then(() => {
        storeData('Murid', data);
      });
  };
  return (
    <>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
          <Spacing height={20} />
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={getPhoto}>
              <Photo />
            </TouchableOpacity>
            <Spacing height={normalize(60)} />
          </View>
          <Input
            value={form.nama}
            onChangeText={(value) => EditForm('nama', value)}
            title="Nama Lengkap"
          />
          <Spacing height={normalize(20)} />
          <Input
            value={form2.kelas}
            onChangeText={(value) => EditForm('kelas', value)}
            title="Kelas"
          />
          <Spacing height={normalize(20)} />
          <Input
            value={form2.jenisKelamin}
            onChangeText={(value) => EditForm('jenisKelamin', value)}
            title="Jenis Kelamin"
          />
          <Spacing height={normalize(20)} />
          <Input
            value={form2.tempatLahir}
            onChangeText={(value) => EditForm('tempatLahir', value)}
            title="Tempat Lahir"
          />
          <Spacing height={normalize(20)} />
          <Input
            value={
              tanggal.toLocaleDateString() === today.toLocaleDateString()
                ? 'Pilih Tanggal'
                : tanggal.toLocaleDateString()
            }
            onPress={pilihTanggal}
            title="Tanggal Lahir"
          />
          <Spacing height={normalize(20)} />
          <Input
            value={form.email}
            onChangeText={(value) => EditForm('email', value)}
            title="Email"
            editable={false}
          />
          <Spacing height={normalize(20)} />
          <Input
            value={password}
            onChangeText={(value) => setPassword(value)}
            title="Password"
            secure
          />
          <Spacing height={normalize(20)} />
          <Button title="Simpan" onPress={simpanData} />
          <Spacing height={normalize(20)} />
        </ScrollView>
        <View style={{position: 'absolute', zIndex: -1}}>
          <HeaderBack onPress={() => navigation.goBack()} />
        </View>
      </View>
      {pilihtanggal && (
        <Tanggal
          date={tanggal}
          onDateChange={setTanggal}
          onPress={simpanTanggal}
        />
      )}
    </>
  );
};

export default EditUser;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 60,
    paddingHorizontal: 20,
  },
});
