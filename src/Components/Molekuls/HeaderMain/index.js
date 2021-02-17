import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import normalize from 'react-native-normalize';
import {BGHeader, ChatIcon, MapelIcon} from '../../../Assets';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const HeaderMain = ({type, title}) => {
  const Icon = () => {
    if (type === 'mapel') {
      return (
        <Image
          source={MapelIcon}
          style={{width: normalize(60), height: normalize(60)}}
        />
      );
    }
    if (type === 'chat') {
      return (
        <Image
          source={ChatIcon}
          style={{width: normalize(60), height: normalize(59)}}
        />
      );
    }
    return (
      <Image
        source={MapelIcon}
        style={{width: normalize(60), height: normalize(60)}}
      />
    );
  };
  return (
    <View>
      <Image source={BGHeader} style={{width: width, height: normalize(100)}} />
      <View
        style={{
          position: 'absolute',
          flexDirection: 'row',
        }}>
        <Text style={styles.title}>{title}</Text>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
            paddingRight: 40,
            paddingTop: 20,
          }}>
          <Icon />
        </View>
      </View>
    </View>
  );
};

export default HeaderMain;

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: normalize(25),
    fontWeight: 'bold',
    maxWidth: 156,
    marginLeft: 20,
    marginTop: 20,
  },
});
