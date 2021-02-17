import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import TabItems from '../../Atoms/TabItems';

const BottomNavigation = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabItems
            title={label}
            key={index}
            onPress={onPress}
            onLongPress={onLongPress}
            active={isFocused}
          />
        );
      })}
    </View>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    height: 60,
    borderTopWidth: 1,
    backgroundColor: 'white',
  },
});
