import React, {useState} from 'react';
import {useEffect} from 'react';
import {Dimensions, Linking, StyleSheet, Text, View} from 'react-native';
import normalize from 'react-native-normalize';
import Video from 'react-native-video';
import {WebView} from 'react-native-webview';
import {HeaderBack, ItemMateri, Spacing} from '../../Components';
import {Firebase, getData, storeData} from '../../Config';
import YoutubePlayer from 'react-native-youtube-iframe';

const DetailMateri = ({navigation, route}) => {
  const idMapel = route.params;
  const [detail, setDetail] = useState({});
  useEffect(() => {
    Firebase.database()
      .ref(`Mapel/${idMapel.mapel}/${idMapel.id}/`)
      .once('value')
      .then((res) => {
        setDetail(res.val());
        storeData(`Mapel/${idMapel.mapel}/${idMapel.id}/`, res.val());
      });
  }, []);
  const Meeting = () => {
    Linking.openURL('https://meet.google.com/sux-bxqy-kaz');
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.wrapper}>
        <Spacing height={normalize(20)} />
        <View
          style={{
            width: Dimensions.get('window').width,
            height: normalize(200, 'height'),
            paddingHorizontal: 20,
          }}>
          <YoutubePlayer
            height={normalize(200, 'height')}
            play={true}
            videoId={detail.Video}
          />
        </View>
        <View style={{paddingHorizontal: 20}}>
          <ItemMateri
            title="Penjelasan Materi"
            onPress={() => navigation.navigate('PenjelasanMateri')}
          />
          <Spacing height={normalize(20, 'height')} />
          <ItemMateri
            title="Tatap muka online"
            subtitle="Jam 07.30 - 8.30"
            onPress={Meeting}
          />
          <Spacing height={normalize(20, 'height')} />
          <ItemMateri
            title="Quiz"
            subtitle={'Durasi ' + detail.durasiQuiz + ' menit'}
            onPress={() => navigation.navigate('QuizOpening', idMapel)}
          />
          <Spacing height={normalize(20, 'height')} />
          <ItemMateri title="Upload Tugas" />
        </View>
      </View>
      <View style={{position: 'absolute', zIndex: -1}}>
        <HeaderBack onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default DetailMateri;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 60,
  },
});
