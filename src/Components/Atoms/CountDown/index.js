import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CountDown from 'react-native-countdown-component';

const Count = ({time, onFinish, onChange, running}) => {
  return (
    <View>
      <CountDown
        size={15}
        until={time}
        onFinish={onFinish}
        onChange={onChange}
        digitStyle={{
          backgroundColor: '#FFF',
          borderWidth: 2,
          borderColor: '#817FFA',
        }}
        digitTxtStyle={{color: '#817FFA'}}
        timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
        separatorStyle={{color: 'white'}}
        timeToShow={['M', 'S']}
        timeLabels={{m: null, s: null}}
        showSeparator
        running={running}
      />
    </View>
  );
};

export default Count;

const styles = StyleSheet.create({});
