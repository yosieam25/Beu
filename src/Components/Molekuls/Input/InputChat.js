import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import normalize from 'react-native-normalize';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {SendInactive} from '../../../Assets';

const width = Dimensions.get('window').width;
const InputChat = ({value, onChangeText, placeholder, onPress}) => {
  return (
    <View
      style={{flexDirection: 'row', paddingHorizontal: 20, marginVertical: 20}}>
      <TextInput
        style={{
          flex: 1,
          borderWidth: 1,
          borderRadius: 10,
          paddingLeft: 20,
          fontSize: normalize(18),
        }}
        multiline
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
      <View style={{marginLeft: 10}}>
        <TouchableOpacity onPress={onPress}>
          <Image
            source={SendInactive}
            style={{width: normalize(50), height: normalize(50)}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({});
