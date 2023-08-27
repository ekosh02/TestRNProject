import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Tab2 = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Text>Tab2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Tab2;
