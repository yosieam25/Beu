import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Spacing from '../Spacing';
import Isme from './Isme';
import Other from './Other';

const BubleChat = ({isme, chat, time, nama}) => {
  if (isme) {
    return (
      <View>
        <Isme chat={chat} time={time} />
      </View>
    );
  }
  return (
    <View>
      <Other chat={chat} time={time} nama={nama} />
    </View>
  );
};

export default BubleChat;

const styles = StyleSheet.create({});
