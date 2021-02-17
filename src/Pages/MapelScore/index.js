import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import normalize from 'react-native-normalize';
import {Empty} from '../../Assets';
import {CardNilais, HeaderBack, Spacing} from '../../Components';
import {Firebase, getData} from '../../Config';

const MapelScore = ({navigation, route}) => {
  const {Mapel} = route.params;
  const {user} = route.params;
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    Firebase.database()
      .ref(`Score/${Mapel}/${user}`)
      .once('value')
      .then((res) => {
        if (res.val()) {
          const A = res.val();
          const B = [];
          Object.keys(A).map((data) => {
            B.push({
              id: data,
              data: A[data],
            });
          });
          setDetail(B);
        }
      });
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <Spacing height={20} />
        <Text style={{fontSize: normalize(25), fontWeight: 'bold'}}>
          {Mapel}
        </Text>
        <Spacing height={normalize(40)} />

        {detail.length === 0 ? (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={Empty}
              style={{width: normalize(80), height: normalize(100)}}
            />
            <Spacing height={normalize(20)} />
            <Text style={{fontSize: normalize(30), textAlign: 'center'}}>
              Belum ada nilai quiz
            </Text>
          </View>
        ) : (
          <View>
            {detail.map((items) => {
              return (
                <CardNilais
                  key={items.id}
                  namaMateri={items.data.namaMateri}
                  score={items.data.score}
                  tanggal={items.data.tanggal}
                />
              );
            })}
          </View>
        )}
      </ScrollView>
      <View style={{position: 'absolute', zIndex: -1}}>
        <HeaderBack onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default MapelScore;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 60,
    paddingHorizontal: 20,
  },
});
