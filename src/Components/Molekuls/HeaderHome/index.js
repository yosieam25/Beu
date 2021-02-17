import React, {useEffect, useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import normalize from 'react-native-normalize';

const HeaderHome = ({nama, photo}) => {
  return (
    <View style={styles.wrapper}>
      <View>
        <Text
          style={{
            fontSize: normalize(20),
            fontWeight: 'bold',
            color: 'white',
          }}>
          Hi,
        </Text>
        <Text style={styles.name}>{nama}</Text>
      </View>
      <View style={{flex: 1, alignItems: 'flex-end', paddingRight: 25}}>
        <Image
          source={photo}
          style={{
            width: normalize(60),
            height: normalize(60),
            borderRadius: normalize(60) / 2,
          }}
        />
      </View>
    </View>
  );
};

export default HeaderHome;

const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: 36,
    paddingTop: 25,
    flexDirection: 'row',
    width: Dimensions.get('window').width,
  },
  name: {
    fontSize: normalize(20),
    fontWeight: 'bold',
    color: 'white',
    maxWidth: 129,
  },
});
