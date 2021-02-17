import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import normalize from 'react-native-normalize';
import {CardScore, Star} from '../../../Assets';

const CardScores = ({score, mapel, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{marginBottom: 30, marginHorizontal: 15}}>
        <Image source={CardScore} style={styles.card} />
        <View style={styles.content}>
          <Text
            style={{
              fontSize: normalize(20),
              fontWeight: 'bold',
              color: 'white',
            }}>
            {mapel}
          </Text>
          <View style={styles.score}>
            <Image
              source={Star}
              style={{width: normalize(20), height: normalize(20)}}
            />
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: normalize(25),
                maxWidth: 130,
              }}>
              {score}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardScores;

const styles = StyleSheet.create({
  card: {
    width: normalize(160, 'width'),
    height: normalize(173, 'height'),
  },
  content: {
    position: 'absolute',
    paddingTop: 37,
    paddingLeft: 15,
    width: normalize(160, 'width'),
    height: normalize(173, 'height'),
    paddingRight: 35,
  },
  score: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
});
