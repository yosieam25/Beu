import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import normalize from 'react-native-normalize';
import {CardScores, HeaderBack, Spacing} from '../../Components';
import {Firebase, getData} from '../../Config';

const QuizScore = ({navigation}) => {
  const [mapel, setMapel] = useState([]);
  const [user, setUser] = useState();
  useEffect(() => {
    Firebase.database()
      .ref(`DaftarMapel/`)
      .once('value')
      .then((res) => {
        setMapel(res.val());
      });
    getData('Murid').then((res) => {
      setUser(res);
    });
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <Spacing height={normalize(20)} />
        <Text
          style={{
            fontSize: normalize(25),
            fontWeight: 'bold',
            paddingLeft: 20,
          }}>
          Nilai Quiz
        </Text>
        <Spacing height={normalize(30)} />
        <View style={styles.cards}>
          {mapel.map((items) => {
            return (
              <CardScores
                key={items.id}
                score={100}
                mapel={items.namaMapel}
                onPress={() =>
                  navigation.navigate('MapelScore', {
                    Mapel: items.namaMapel,
                    user: user.uid,
                  })
                }
              />
            );
          })}
        </View>
      </ScrollView>
      <View style={{position: 'absolute', zIndex: -1}}>
        <HeaderBack onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default QuizScore;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 60,
  },
  cards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
