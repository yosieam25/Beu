import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import normalize from 'react-native-normalize';
import {QuizImage} from '../../Assets';
import {Button, HeaderBack, Spacing} from '../../Components';
import {Firebase, getData, storeData} from '../../Config';

const QuizOpening = ({navigation, route}) => {
  const Mapel = route.params;
  console.log(Mapel);
  const [soal, setSoal] = useState({});
  useEffect(() => {
    Firebase.database()
      .ref(`Quiz/${Mapel.mapel}/${Mapel.id}`)
      .once('value')
      .then((res) => {
        if (res.val()) {
          const A = res.val();
          const B = [];
          Object.keys(A).map((data) => {
            B.push({
              nomor: Number(data) + 1,
              data: A[data],
            });
          });
          setSoal(B);
        }
      });
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.wrapper}>
        <Spacing height={normalize(30)} />
        <Text style={{fontSize: normalize(25), fontWeight: 'bold'}}>
          Penjumlahan Desimal
        </Text>
        <View style={{alignItems: 'center'}}>
          <Image
            source={QuizImage}
            style={{
              width: normalize(200, 'width'),
              height: normalize(200, 'height'),
            }}
          />
          <Text style={styles.text}>Soal Pilihan Ganda</Text>
          <Text style={styles.text}>Pilihlah jawaban yang benar!</Text>
          <Text style={styles.text}> {soal.length} soal</Text>
          <Spacing height={50} />
        </View>
        <View style={{paddingHorizontal: 30}}>
          <Button
            title="Kerjakan"
            onPress={() => navigation.navigate('QuizPilihanGanda', Mapel)}
          />
        </View>
      </View>
      <View style={{position: 'absolute', zIndex: -1}}>
        <HeaderBack onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default QuizOpening;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 60,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: normalize(25),
    fontWeight: 'bold',
    textAlign: 'center',
    width: normalize(300, 'width'),
  },
});
