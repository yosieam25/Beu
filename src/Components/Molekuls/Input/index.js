import React, {useState} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import normalize from 'react-native-normalize';
import {
  DateBirth,
  EmailIcon,
  Gender,
  NameIcon,
  PassIcon,
  PlaceBirth,
} from '../../../Assets';
import {Spacing} from '../../Atoms';
import InputChat from './InputChat';

const Input = ({
  title,
  secure,
  value,
  onChangeText,
  type,
  editable,
  onPress,
  placeholder,
}) => {
  const [border, setBorder] = useState('black');
  const Icon = () => {
    if (title === 'Email') {
      return <Image source={EmailIcon} style={styles.name} />;
    }
    if (title === 'Password') {
      return <Image source={PassIcon} style={styles.name} />;
    }
    if (title === 'Jenis Kelamin') {
      return <Image source={Gender} style={styles.name2} />;
    }
    if (title === 'Tempat Lahir') {
      return <Image source={PlaceBirth} style={styles.iconPlace} />;
    }
    if (title === 'Tanggal Lahir') {
      return <Image source={DateBirth} style={styles.name2} />;
    }
    return <Image source={NameIcon} style={styles.name} />;
  };
  if (type === 'chat') {
    return (
      <InputChat
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        onPress={onPress}
      />
    );
  }
  if (title === 'Tanggal Lahir') {
    return (
      <View>
        <Text style={{fontSize: normalize(15), opacity: 0.5}}>{title}</Text>
        <Spacing height={13} />
        <TouchableOpacity onPress={onPress} style={styles.input(border)}>
          <Text style={{marginTop: 15, flex: 1, fontWeight: 'bold'}}>
            {value}
          </Text>
          <Image source={DateBirth} style={styles.name2} />
        </TouchableOpacity>
      </View>
    );
  }
  const onFocusForm = () => {
    setBorder('#B9B8F1');
  };
  const onBlurFocus = () => {
    setBorder('black');
  };
  return (
    <View>
      <Text style={{fontSize: normalize(15), opacity: 0.5}}>{title}</Text>
      <Spacing height={13} />
      <View>
        <TextInput
          style={styles.input(border)}
          secureTextEntry={secure}
          value={value}
          onChangeText={onChangeText}
          editable={editable}
          onFocus={onFocusForm}
          onBlur={onBlurFocus}
        />
        <Icon />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: (border) => ({
    borderRadius: 20,
    borderWidth: 1,
    paddingLeft: 60,
    fontSize: normalize(15),
    height: normalize(40, 'height'),
    borderColor: border,
  }),
  name: {
    position: 'absolute',
    left: 20,
    top: 12,
    width: normalize(23),
    height: normalize(23),
  },
  name2: {
    position: 'absolute',
    left: 20,
    top: 12,
    width: normalize(23),
    height: normalize(23),
  },
  iconPlace: {
    position: 'absolute',
    left: 20,
    top: 12,
    width: normalize(20),
    height: normalize(25),
  },
});
