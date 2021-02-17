import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import normalize from 'react-native-normalize';
import {
  ChatIcon,
  ChatIconInactive,
  HomeIcon,
  MapelIcon,
  MapelIconInactive,
  UserIcon,
  UserIconInactive,
  HomeIconInactive,
} from '../../../Assets';

const TabItems = ({title, onPress, onLongPress, active}) => {
  const Icon = () => {
    if (title === 'Mapel') {
      return active ? (
        <Image source={MapelIcon} style={styles.image} />
      ) : (
        <Image source={MapelIconInactive} style={styles.image} />
      );
    }
    if (title === 'Chat') {
      return active ? (
        <Image source={ChatIcon} style={styles.image} />
      ) : (
        <Image source={ChatIconInactive} style={styles.image} />
      );
    }
    if (title === 'User') {
      return active ? (
        <Image source={UserIcon} style={styles.image} />
      ) : (
        <Image source={UserIconInactive} style={styles.image} />
      );
    }
    return active ? (
      <Image source={HomeIcon} style={styles.image} />
    ) : (
      <Image source={HomeIconInactive} style={styles.image} />
    );
  };
  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default TabItems;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: normalize(30),
    height: normalize(30),
  },
});
