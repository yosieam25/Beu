import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import normalize from 'react-native-normalize';
import {AbsenJam, AbsenStatus, UserBlackIcon} from '../../Assets';
import {
  DailyAbsensi,
  HeaderAbsensi,
  HeaderBack,
  Spacing,
} from '../../Components';
import {Firebase, getData, storeData} from '../../Config';
import {getDay, getTime} from '../../Utills';

const Absensi = ({navigation, route}) => {
  const user = route.params;
  const [jam, setJam] = useState('-');
  const [status, setStatus] = useState('-');
  const [timeToday] = useState(new Date().getHours());
  useEffect(() => {
    const date = new Date();
    const today = getDay(date);
    getData(`Absensi/${today}`).then((res) => {
      if (res.date === today) {
        setJam(res.jam);
        setStatus(res.status);
      } else {
        setJam('-');
        setStatus('-');
      }
    });
    tidakHadir();
  }, []);
  const tidakHadir = () => {
    if (jam === '-' && status === '-') {
      if (timeToday >= 10) {
        const today = new Date();
        const day = getDay(today);
        const jamTelat = 'Telat';
        const nilai = 'Tidak Hadir';
        setJam('Telat');
        setStatus('Tidak Hadir');
        const data = {
          jam: jamTelat,
          status: nilai,
          date: day,
        };
        storeData(`Absensi/${day}`, data);
        Firebase.database().ref(`Absensi/${user.uid}/${day}`).set(data);
      }
    }
  };
  const TombolHadir = () => {
    if (jam === '-' && status === '-') {
      return (
        <TouchableOpacity onPress={getHadir}>
          <View
            style={{
              paddingVertical: 10,
              paddingHorizontal: 40,
              backgroundColor: '#E1E1FD',
              borderRadius: 20,
            }}>
            <Text style={{fontSize: normalize(25)}}>Hadir</Text>
          </View>
        </TouchableOpacity>
      );
    }
    if (jam != 'Telat' && status != 'Tidak Hadir') {
      return (
        <View>
          <View
            style={{
              paddingVertical: 10,
              paddingHorizontal: 40,
              backgroundColor: '#E1E1FD',
              borderRadius: 20,
            }}>
            <Text style={{fontSize: normalize(25)}}>Sudah melakukan Absen</Text>
          </View>
        </View>
      );
    }
    if (jam === 'Telat' && status === 'Tidak Hadir') {
      return (
        <View>
          <View
            style={{
              paddingVertical: 10,
              paddingHorizontal: 40,
              backgroundColor: 'red',
              borderRadius: 20,
            }}>
            <Text style={{fontSize: normalize(25), color: 'white'}}>
              Sudah melewati batas absen
            </Text>
          </View>
        </View>
      );
    }
    if (timeToday < 8) {
      return (
        <View>
          <View
            style={{
              paddingVertical: 10,
              paddingHorizontal: 40,
              backgroundColor: 'red',
              borderRadius: 20,
            }}>
            <Text style={{fontSize: normalize(25), color: 'white'}}>
              Jam absen pukul 08.00 AM
            </Text>
          </View>
        </View>
      );
    }

    return (
      <TouchableOpacity onPress={getHadir}>
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 40,
            backgroundColor: '#E1E1FD',
            borderRadius: 20,
          }}>
          <Text style={{fontSize: normalize(25)}}>Hadir</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const getHadir = () => {
    const today = new Date();
    const time = getTime(today);
    const day = getDay(today);
    const nilai = 'Hadir';
    setJam(time);
    setStatus('Hadir');
    const data = {
      jam: time,
      status: nilai,
      date: day,
    };
    storeData(`Absensi/${day}`, data);
    Firebase.database().ref(`Absensi/${user.uid}/${day}`).set(data);
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.wrapper}>
        <Spacing height={normalize(25)} />
        <View style={{alignItems: 'center', flex: 1}}>
          <Image
            source={user.photo}
            style={{width: normalize(130), height: normalize(130)}}
          />
          <Spacing height={normalize(20)} />
          <Text style={{fontSize: normalize(25)}}>{user.nama}</Text>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              paddingBottom: normalize(30, 'height'),
            }}>
            <TombolHadir />
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#B9B8F1',
            flex: 1,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 30,
            }}>
            <View>
              <Image
                source={AbsenJam}
                style={{
                  width: normalize(155, 'width'),
                  height: normalize(77, 'height'),
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  width: normalize(155, 'width'),
                  height: normalize(77, 'height'),
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  paddingBottom: 15,
                }}>
                <Text style={{fontSize: normalize(25), fontWeight: 'bold'}}>
                  {jam}
                </Text>
              </View>
            </View>
            <Spacing width={normalize(20)} />
            <View>
              <Image
                source={AbsenStatus}
                style={{
                  width: normalize(155, 'width'),
                  height: normalize(77, 'height'),
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  width: normalize(155, 'width'),
                  height: normalize(77, 'height'),
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  paddingBottom: 15,
                }}>
                <Text style={{fontSize: normalize(25), fontWeight: 'bold'}}>
                  {status}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('HistoryAbsensi')}>
              <View
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  backgroundColor: 'white',
                  borderRadius: 10,
                }}>
                <Text style={{fontSize: normalize(25)}}>History Absensi</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{position: 'absolute', zIndex: -1}}>
        <HeaderBack onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default Absensi;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 60,
    flex: 1,
  },
});
