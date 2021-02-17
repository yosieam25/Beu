import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import normalize from 'react-native-normalize';
import {BG_Chat} from '../../Assets';
import {HeaderMain, Spacing} from '../../Components';
import {Firebase} from '../../Config';

const Chat = ({navigation}) => {
  const [Mapel, setMapel] = useState([]);
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
      <HeaderMain title="Chatting Kelas" type="chat" />
      <Spacing height={normalize(40)} />
      <View style={{alignItems: 'center'}}>
        {Mapel.map((items) => {
          return (
            <View key={items.id}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Chatting', items.namaMapel)
                }>
                <Image
                  source={BG_Chat}
                  style={{width: normalize(300), height: normalize(60)}}
                />
                <View
                  style={{
                    position: 'absolute',
                    paddingLeft: 90,
                    paddingTop: 20,
                  }}>
                  <Text style={{fontSize: normalize(20), fontWeight: 'bold'}}>
                    {items.namaMapel}
                  </Text>
                </View>
              </TouchableOpacity>
              <Spacing height={normalize(20)} />
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({});
