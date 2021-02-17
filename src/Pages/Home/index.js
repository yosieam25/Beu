import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import normalize from 'react-native-normalize';
import {TopHeader, UserBlackIcon} from '../../Assets';
import {
  BestStudent,
  CardMapels,
  FlagHomes,
  HeaderHome,
  LabelHome,
  Spacing,
  TodayClass,
} from '../../Components';
import {Firebase, getData} from '../../Config';

const width = Dimensions.get('window').width;
const Home = ({navigation}) => {
  const [mapel, setMapel] = useState([]);
  const [user, setUser] = useState({
    nama: '',
    photo: UserBlackIcon,
  });
  const [kelas, setKelas] = useState([]);
  useEffect(() => {
    getData('Murid').then((res) => {
      const data = res;
      data.photo = {uri: res.photo};
      setUser(data);
    });
    Firebase.database()
      .ref(`DaftarMapel/`)
      .once('value')
      .then((res) => {
        setMapel(res.val());
      });
    const date = new Date();
    Firebase.database()
      .ref(`KelasHariIni/${date.toLocaleDateString()}/`)
      .once('value')
      .then((res) => {
        if (res.val()) {
          const A = res.val();
          const B = [];
          Object.keys(A).map((items) => {
            B.push({
              id: items,
              data: A[items],
            });
          });
          setKelas(B);
        }
      });
  }, [user]);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.main}>
        <HeaderHome nama={user.nama} photo={user.photo} />
        <Spacing height={normalize(60)} />
        <View style={styles.content}>
          {/* Mapel */}
          <View>
            <LabelHome title="Mapel" />
            <Spacing height={normalize(20)} />
            <View style={styles.MapelWrapper}>
              {mapel.length === 0 ? (
                <View style={styles.MapelWrapper}>
                  <CardMapels />
                  <Spacing width={normalize(20)} />
                  <CardMapels />
                  <CardMapels />
                  <Spacing width={normalize(20)} />
                  <CardMapels />
                </View>
              ) : (
                <View style={styles.MapelWrapper}>
                  {mapel.map((items) => {
                    return (
                      <CardMapels
                        key={items.id}
                        lesson={items.namaMapel}
                        onPress={() =>
                          navigation.navigate('DetailMapel', items.namaMapel)
                        }
                      />
                    );
                  })}
                </View>
              )}
            </View>
          </View>
          {/* kelas hari ini */}
          <View>
            <LabelHome title="Kelas hari ini" />
            <Spacing height={normalize(20)} />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {kelas.length === 0 ? (
                <View style={{flexDirection: 'row', paddingHorizontal: 30}}>
                  <TodayClass />
                </View>
              ) : (
                <View style={{flexDirection: 'row', paddingHorizontal: 30}}>
                  {kelas.map((items) => {
                    return (
                      <TodayClass
                        key={items.id}
                        materi={items.data.namaMateri}
                        mapel={items.data.Mapel}
                        onPress={() =>
                          navigation.navigate('DetailMateri', {
                            id: items.id,
                            mapel: items.data.Mapel,
                          })
                        }
                      />
                    );
                  })}
                </View>
              )}
            </ScrollView>
          </View>
          {/* murid terbaik */}
          <View>
            <LabelHome title="Murid Terbaik" />
            <Spacing height={normalize(20)} />
            <View style={{flexDirection: 'row', paddingHorizontal: 20}}>
              <BestStudent nama="Yosie Abdul Muzanil" score="95" />
              <Spacing width={30} />
              <BestStudent nama="Reza Renaldi" score="90" />
              <Spacing width={30} />
              <BestStudent nama="Selamet Nuryanto" score="85" />
            </View>
          </View>
        </View>
        <View style={{position: 'absolute', zIndex: -1}}>
          <Image
            source={TopHeader}
            style={{width: width, height: normalize(200, 'height')}}
          />
        </View>
        <View style={styles.flag}>
          <FlagHomes />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    flex: 1,
  },
  flag: {
    position: 'absolute',
    top: normalize(110, 'height'),
  },
  content: {
    backgroundColor: 'white',
    borderTopLeftRadius: 70,
    paddingTop: normalize(130, 'height'),
  },
  MapelWrapper: {
    width: width,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  main: {
    paddingBottom: 20,
  },
});
