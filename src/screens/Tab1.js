import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {multiplication, division, reset} from '../featutes/counter/counterSlice';
import {ScrollView} from 'react-native-gesture-handler';
import {useGetPokemonByNameQuery} from './../services/pokemon';

const Tab1 = ({navigation}) => {
  const count = useSelector(state => {
    return state.counter.value;
  });
  const dispatch = useDispatch();

  const {data, error, isLoading} = useGetPokemonByNameQuery('gible');

  return (
    <ScrollView style={styles.view}>
      <View style={styles.card1}>
        <Button
          title="Increment value"
          onPress={() => dispatch(multiplication(2))}
          color={'blue'}
        />
        <Button
          title="Decrement value"
          onPress={() => dispatch(division(2))}
          color={'red'}
        />
        <Button
          title="Reset"
          onPress={() => dispatch(reset())}
          color={'gray'}
        />
        <Text style={{fontSize: 20}}>{count}</Text>
      </View>
      {isLoading ? (
        <View style={styles.card2Text}>
          <Text>Loading...</Text>
        </View>
      ) : error ? (
        <View style={styles.card2Text}>
          <Text>{error?.data}</Text>
        </View>
      ) : (
        <View style={styles.card2Text}>
          <Text>
            {'name: '}
            {data?.name}
          </Text>
          <Text>
            {'height: '}
            {data?.height}
          </Text>
          <Text>
            {'weight: '}
            {data?.weight}
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  card1: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#gray',
    padding: 10,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card2Text: {
    alignItems: 'center',
  },
});

export default Tab1;
