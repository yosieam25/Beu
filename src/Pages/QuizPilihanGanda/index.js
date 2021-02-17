import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import normalize from 'react-native-normalize';
import {Button, Count, PilihanGanda, Spacing} from '../../Components';
import {Firebase, getData} from '../../Config';

const QuizPilihanGanda = ({navigation, route}) => {
  const Mapel = route.params;
  const [soal, setSoal] = useState([]);
  const [nomorSoal, setNomorSoal] = useState(0);
  const [choose, setChoosen] = useState();
  const [time, setTime] = useState(100);
  const [running, setRunning] = useState(true);
  const [nilai, setNilai] = useState(0);
  const [user, setUser] = useState();
  const [detail, setDetail] = useState({
    namaMateri: '',
  });
  const jumlahSoal = 100 / soal.length;
  const Next = () => {
    if (choose === soal[nomorSoal].data.jawabanBenar) {
      setNilai(nilai + 1);
    }
    setNomorSoal(nomorSoal + 1);
  };
  const Back = () => {
    setNomorSoal(nomorSoal - 1);
  };
  const Submit = () => {
    if (choose === soal[nomorSoal].data.jawabanBenar) {
      const A = nilai + 1;
      const total = A * jumlahSoal;
      const data = {
        id: user.uid + Mapel.id,
        score: total,
        nama: user.nama,
        namaMateri: detail.namaMateri,
        tanggal: new Date().toLocaleDateString(),
      };
      const data2 = {
        namaMateri: detail.namaMateri,
        score: total,
      };
      Firebase.database()
        .ref(`Score/${Mapel.mapel}/${user.uid}/${user.uid + Mapel.id}/`)
        .set(data);
      scoreBoard(data2);
      navigation.navigate('FinishQuiz', total);
    } else {
      const total = Math.round(nilai * jumlahSoal);
      const dataElse = {
        id: user.uid + Mapel.id,
        score: total,
        nama: user.nama,
        namaMateri: detail.namaMateri,
        tanggal: new Date().toLocaleDateString(),
      };
      const dataElse2 = {
        namaMateri: detail.namaMateri,
        score: total,
      };
      Firebase.database()
        .ref(`Score/${Mapel.mapel}/${user.uid}/${user.uid + Mapel.id}/`)
        .set(dataElse);
      scoreBoard(dataElse2);
      const totalElse = Math.round(nilai * jumlahSoal);
      navigation.navigate('FinishQuiz', totalElse);
    }
    setRunning(false);
  };
  const scoreBoard = (scoreBoard) => {
    Firebase.database().ref(`ScoreBoard/${user.uid}/`).set(scoreBoard);
  };
  const Point = () => {
    const soal = Array.from({length: 2});
    return (
      <View style={{flexDirection: 'row'}}>
        {soal.map((_, item) => {
          return <View key={item} style={styles.pointSoal} />;
        })}
      </View>
    );
  };
  useEffect(() => {
    Firebase.database()
      .ref(`Quiz/${Mapel.mapel}/${Mapel.id}`)
      .once('value')
      .then((res) => {
        const A = res.val();
        const B = [];
        Object.keys(A).map((data) => {
          B.push({
            nomor: Number(data) + 1,
            data: A[data],
          });
        });
        setSoal(B);
      });
    getData('Murid').then((res) => {
      setUser(res);
    });
    getData(`Mapel/${Mapel.mapel}/${Mapel.id}/`).then((res) => {
      setDetail(res);
    });
  }, []);
  return (
    <View style={{flex: 1}}>
      {soal.length != 0 ? (
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <View
            style={{
              paddingVertical: 10,
              backgroundColor: '#B9B8F1',
            }}>
            <Count time={time} onFinish={Submit} running={running} />
          </View>
          <Spacing height={normalize(20)} />
          <View style={{paddingHorizontal: 25}}>
            <Text
              style={{
                fontSize: normalize(18),
                fontWeight: 'bold',
                opacity: 0.5,
              }}>
              {detail.namaMateri}
            </Text>
            <Spacing height={normalize(20)} />
            <Text style={{fontSize: normalize(25), fontWeight: 'bold'}}>
              Question {soal[nomorSoal].nomor}/{soal.length}
            </Text>
            <Spacing height={normalize(20)} />
          </View>
          <View style={{alignItems: 'center'}}>
            <Point />
          </View>
          <Spacing height={normalize(20)} />
          <View style={{paddingHorizontal: 25, flex: 1}}>
            <Text style={{fontSize: normalize(17)}}>
              {soal[nomorSoal].data.soalPG}
            </Text>
            <Spacing height={normalize(20)} />
          </View>
          <View style={styles.wrapperPG}>
            <View style={{paddingHorizontal: 36}}>
              <Spacing height={normalize(20)} />
              <TouchableOpacity
                onPress={() => setChoosen(soal[nomorSoal].data.pilihanA)}>
                <View style={styles.wrapper}>
                  <View style={styles.point}>
                    {choose === soal[nomorSoal].data.pilihanA && (
                      <View style={styles.pointActive} />
                    )}
                  </View>
                  <View style={{justifyContent: 'center', paddingLeft: 15}}>
                    <Text>{soal[nomorSoal].data.pilihanA}</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <Spacing height={normalize(5, 'height')} />
              <TouchableOpacity
                onPress={() => setChoosen(soal[nomorSoal].data.pilihanB)}>
                <View style={styles.wrapper}>
                  <View style={styles.point}>
                    {choose === soal[nomorSoal].data.pilihanB && (
                      <View style={styles.pointActive} />
                    )}
                  </View>
                  <View style={{justifyContent: 'center', paddingLeft: 15}}>
                    <Text>{soal[nomorSoal].data.pilihanB}</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <Spacing height={normalize(5, 'height')} />
              <TouchableOpacity
                onPress={() => setChoosen(soal[nomorSoal].data.pilihanC)}>
                <View style={styles.wrapper}>
                  <View style={styles.point}>
                    {choose === soal[nomorSoal].data.pilihanC && (
                      <View style={styles.pointActive} />
                    )}
                  </View>
                  <View style={{justifyContent: 'center', paddingLeft: 15}}>
                    <Text>{soal[nomorSoal].data.pilihanC}</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <Spacing height={normalize(5, 'height')} />
              <TouchableOpacity
                onPress={() => setChoosen(soal[nomorSoal].data.pilihanD)}>
                <View style={styles.wrapper}>
                  <View style={styles.point}>
                    {choose === soal[nomorSoal].data.pilihanD && (
                      <View style={styles.pointActive} />
                    )}
                  </View>
                  <View style={{justifyContent: 'center', paddingLeft: 15}}>
                    <Text>{soal[nomorSoal].data.pilihanD}</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <Spacing height={normalize(5, 'height')} />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'flex-end',
                paddingBottom: 30,
              }}>
              {nomorSoal > 0 && <Button back onPress={Back} />}
              <Spacing width={normalize(15)} />
              {soal.length === nomorSoal + 1 ? (
                <Button quiz onPress={Submit} />
              ) : (
                <Button quiz onPress={Next} />
              )}
            </View>
          </View>
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default QuizPilihanGanda;

const styles = StyleSheet.create({
  pointSoal: {
    width: normalize(20),
    height: 5,
    borderRadius: 20 / 2,
    backgroundColor: '#B9B8F1',
    marginLeft: 10,
  },
  wrapperPG: {
    backgroundColor: '#B9B8F1',
    height: normalize(300, 'height'),
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  wrapper: {
    paddingVertical: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    paddingLeft: 20,
    marginBottom: 10,
  },
  point: {
    width: normalize(20),
    height: 20,
    borderRadius: 30 / 2,
    borderColor: 'pink',
    borderWidth: 2,
  },
  pointActive: {
    width: normalize(20),
    height: 20,
    borderRadius: 30 / 2,
    borderColor: 'pink',
    backgroundColor: 'pink',
    borderWidth: 2,
  },
});
