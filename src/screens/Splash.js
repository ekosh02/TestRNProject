import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('BottomNavigation');
    }, 1000);
  }, []);

  return (
    <View style={styles.view}>
      <Text>Splash</Text>
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

export default Splash;
