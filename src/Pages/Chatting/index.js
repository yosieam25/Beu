import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import normalize from 'react-native-normalize';
import {BubleChat, HeaderBack, Input, Spacing} from '../../Components';
import {Firebase, getData} from '../../Config';
import {getDay, getTime} from '../../Utills';

const Chatting = ({navigation, route}) => {
  const [user, setUser] = useState({});
  const [valueChat, setValueChat] = useState('');
  const [allChat, setAllChat] = useState([]);
  const Mapel = route.params;
  useEffect(() => {
    getData('Murid').then((res) => {
      setUser(res);
    });
    Firebase.database()
      .ref(`Chatting/${Mapel}/allChat`)
      .on('value', (snapshot) => {
        if (snapshot.val()) {
          const A = snapshot.val();
          const B = [];
          Object.keys(A).map((key) => {
            const C = A[key];
            const dataChat = [];
            Object.keys(C).map((data) => {
              dataChat.push({
                id: data,
                data: C[data],
              });
            });
            B.push({
              id: key,
              data: dataChat,
            });
          });
          setAllChat(B);
        }
      });
  }, []);
  console.log(allChat);
  const submitChat = () => {
    const today = new Date();
    const day = getDay(today);
    const urlRef = `Chatting/${Mapel}/allChat/${day}`;
    const data = {
      sentBy: user.uid,
      chatDate: new Date().getTime(),
      chatTime: getTime(today),
      chatContent: valueChat,
      namaSend: user.nama,
    };
    const historyChat = {
      lastContentChat: valueChat,
      chatDate: new Date().getTime(),
      date: new Date().getDate(),
      mapel: Mapel,
    };
    const urlRefHistory = `Message/${Mapel}/`;
    Firebase.database()
      .ref(urlRef)
      .push(data)
      .then(() => {
        setValueChat('');
        Firebase.database().ref(urlRefHistory).set(historyChat);
      });
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView style={styles.wrapper}>
        <Spacing height={normalize(30)} />
        {allChat.map((items) => {
          return (
            <View key={items.id}>
              <Text style={{alignSelf: 'center'}}> {items.id} </Text>
              <Spacing height={normalize(20)} />
              {items.data.map((chat) => {
                const isme = chat.data.sentBy === user.uid;
                return (
                  <BubleChat
                    key={chat.id}
                    isme={isme}
                    chat={chat.data.chatContent}
                    time={chat.data.chatTime}
                    nama={chat.data.namaSend}
                  />
                );
              })}
            </View>
          );
        })}
      </ScrollView>
      <Input
        type="chat"
        placeholder="Ketikan pesan..."
        value={valueChat}
        onChangeText={(value) => setValueChat(value)}
        onPress={submitChat}
      />
      <View style={{position: 'absolute', zIndex: -1}}>
        <HeaderBack onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 60,
    paddingHorizontal: 20,
  },
});
