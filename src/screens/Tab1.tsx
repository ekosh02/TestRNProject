import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {
  multiplication,
  division,
  reset,
} from '../featutes/counter/counterSlice';
import {ScrollView} from 'react-native-gesture-handler';
import {useGetPokemonByNameQuery} from '../services/pokemon';
import {useAppDispatch, useAppSelector} from '../hooks/useStore';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import useTheme from '../hooks/useTheme';
import { BottomStackParamList } from '../@types/navigation';

type Props = NativeStackScreenProps<BottomStackParamList, 'Tab1'>;

const Tab1 = ({}: Props) => {
  const count = useAppSelector(state => {
    return state.counter.value;
  });
  const dispatch = useAppDispatch();

  const {colors} = useTheme();

  const {data, error, isLoading} = useGetPokemonByNameQuery('gible');

  return (
    <ScrollView style={[styles.view, {backgroundColor: colors.background}]}>
      <View style={[styles.card1, {borderColor: colors.border}]}>
        <Button
          title="Multiplication value"
          onPress={() => dispatch(multiplication(2))}
          color={'blue'}
        />
        <Button
          title="Division value"
          onPress={() => dispatch(division(2))}
          color={'red'}
        />
        <Button
          title="Reset"
          onPress={() => dispatch(reset())}
          color={'gray'}
        />
        <Text style={{fontSize: 20, color: colors.font}}>{count}</Text>
      </View>
      {isLoading ? (
        <View style={styles.card2Text}>
          <Text style={{color: colors.font}}>Loading...</Text>
        </View>
      ) : error ? (
        <View style={styles.card2Text}>
          <Text style={{color: colors.font}}>{error.data}</Text>
        </View>
      ) : (
        <View style={styles.card2Text}>
          <Text style={{color: colors.font}}>
            {'name: '}
            {data?.name}
          </Text>
          <Text style={{color: colors.font}}>
            {'height: '}
            {data?.height}
          </Text>
          <Text style={{color: colors.font}}>
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
