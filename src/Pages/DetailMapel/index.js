import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import normalize from 'react-native-normalize';
import {Empty} from '../../Assets';
import {HeaderBack, ItemMateri, Spacing} from '../../Components';
import {Firebase} from '../../Config';

const DetailMapel = ({navigation, route}) => {
  const namaMapel = route.params;
  const [detailMapel, setDetailMapel] = useState([]);
  useEffect(() => {
    Firebase.database()
      .ref(`Mapel/${namaMapel}/`)
      .on('value', (snapShot) => {
        if (snapShot.val()) {
          const A = snapShot.val();
          const B = [];
          Object.keys(A).map((data) => {
            B.push({
              id: data,
              data: A[data],
            });
          });
          setDetailMapel(B);
        }
      });
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView style={styles.wrapper}>
        <Spacing height={normalize(20, 'height')} />
        <Text style={{fontSize: normalize(30), fontWeight: 'bold'}}>
          Materi
        </Text>
        <Spacing height={normalize(30)} />
        {detailMapel.length === 0 ? (
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
              Belum ada materi yang diupload
            </Text>
          </View>
        ) : (
          <View>
            {detailMapel.map((items) => {
              return (
                <ItemMateri
                  key={items.id}
                  title={items.data.namaMateri}
                  subtitle={items.data.TanggalMateri}
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
      <View style={{position: 'absolute', zIndex: -1}}>
        <HeaderBack onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default DetailMapel;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 60,
    paddingHorizontal: 20,
  },
});
