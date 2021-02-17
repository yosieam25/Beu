import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';
import {HeaderBack, Spacing} from '../../Components';

const PenjelasanMateri = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.wrapper}>
        <View
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }}>
          <WebView
            source={{
              uri:
                'https://drive.google.com/drive/folders/1ivP7oZi4FasAhalfP0UI_GZYTjw9ieCq',
            }}
          />
        </View>
        <Spacing height={500} />
      </View>
      <View style={{position: 'absolute', zIndex: -1}}>
        <HeaderBack onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default PenjelasanMateri;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 60,
  },
});
