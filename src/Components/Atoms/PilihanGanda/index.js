import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const PilihanGanda = ({data, initial}) => {
  const [choose, setChoosen] = useState(initial);
  return (
    <View>
      {data.map((item, key) => {
        return (
          <TouchableOpacity onPress={() => setChoosen(key)} key={key}>
            <View style={styles.wrapper}>
              <View style={styles.point}>
                {choose === key && <View style={styles.pointActive} />}
              </View>
              <View style={{justifyContent: 'center', paddingLeft: 15}}>
                <Text>{item}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default PilihanGanda;

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    paddingLeft: 20,
    marginBottom: 10,
  },
  point: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    borderColor: 'pink',
    borderWidth: 2,
  },
  pointActive: {
    width: 28,
    height: 28,
    borderRadius: 28 / 2,
    borderColor: 'pink',
    backgroundColor: 'pink',
    borderWidth: 2,
  },
});
