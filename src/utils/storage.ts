import AsyncStorage from '@react-native-async-storage/async-storage';
import { Keys } from '../constants/keys';

type KeysType = keyof typeof Keys;

export const getStorage = async (key: KeysType) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.log('🚀 ~ file: storage.ts:8 ~ getStorage ~ error:', error);
  }
};

export const setStorage = async (key: KeysType, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.log('🚀 ~ file: storage.ts:17 ~ setStorage ~ error:', error);
  }
};

export const removeStorage = async (key: KeysType) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log('🚀 ~ file: storage.ts:25 ~ removeStorage ~ error:', error);
  }
};
