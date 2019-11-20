import { AsyncStorage } from 'react-native';

export const keyExist = key => AsyncStorage.getItem(key);

export const saveKey = (key, value) => AsyncStorage.setItem(key, JSON.stringify(value));

export const getKey = key => AsyncStorage.getItem(key)
  .then(value => Promise.resolve(JSON.parse(value)));

export const removeKey = key => AsyncStorage.removeItem(key);

export const clear = () => AsyncStorage.clear();