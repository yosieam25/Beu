import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import normalize from 'react-native-normalize';
import {ActionProfil} from '../../../Assets';
import {Spacing} from '../../Atoms';

const ItemMateri = ({onPress, title, subtitle}) => {
  return (
    <View
      style={{
        height: normalize(50, 'height'),
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <View style={{flex: 1}}>
        <Text style={{fontSize: normalize(18), fontWeight: 'bold'}}>
          {title}
        </Text>
        <Spacing height={normalize(10)} />
        <Text style={{fontSize: normalize(14), opacity: 0.5}}>{subtitle}</Text>
      </View>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <TouchableOpacity onPress={onPress}>
          <Image
            source={ActionProfil}
            style={{width: normalize(31), height: normalize(30)}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemMateri;

const styles = StyleSheet.create({});
