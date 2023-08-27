import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Switch} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {setIsDark} from '../featutes/darkMode/darkMode';

const Tab2 = ({navigation}) => {
  const isDark = useSelector(state => {
    return state.dark.value;
  });
  const dispatch = useDispatch();

  return (
    <View style={styles.view}>
      <View style={styles.card1}>
        {isDark ? (
          <Text style={{color: 'white'}}>Dark</Text>
        ) : (
          <Text>Light</Text>
        )}
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={true ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={value => dispatch(setIsDark(value))}
          value={isDark}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  card1: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Tab2;
