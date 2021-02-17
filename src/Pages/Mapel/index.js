import React, {useEffect, useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {BGHeader, CardMapel, MapelIcon} from '../../Assets';
import {CardMapels, HeaderMain, Spacing} from '../../Components';
import {Firebase} from '../../Config';

const width = Dimensions.get('window').width;
const Mapel = ({navigation}) => {
  const [mapel, setMapel] = useState([]);
  useEffect(() => {
    Firebase.database()
      .ref(`DaftarMapel/`)
      .once('value')
      .then((res) => {
        setMapel(res.val());
      });
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <HeaderMain title="Mata Pelajaran" type="mapel" />
      <Spacing height={33} />
      <ScrollView showsVerticalScrollIndicator={false}>
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
      </ScrollView>
    </View>
  );
};

export default Mapel;

const styles = StyleSheet.create({
  MapelWrapper: {
    width: width,
    paddingHorizontal: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
