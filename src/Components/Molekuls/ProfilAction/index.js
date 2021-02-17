import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import normalize from 'react-native-normalize';
import {ActionProfil} from '../../../Assets';

const ProfilAction = ({title, onPress}) => {
  return (
    <View
      style={{flexDirection: 'row', marginHorizontal: 45, marginBottom: 30}}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{fontSize: normalize(20)}}>{title}</Text>
      </View>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <TouchableOpacity onPress={onPress}>
          <Image
            source={ActionProfil}
            style={{
              width: normalize(30, 'width'),
              height: normalize(26, 'height'),
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfilAction;

const styles = StyleSheet.create({});
