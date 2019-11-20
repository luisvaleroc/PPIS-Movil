import decode from 'jwt-decode';
import { getKey, saveKey, keyExist, removeKey } from '../common/storage';
import { STORAGE_KEYS } from '../boot/config';
export const isAuthenticated = () => {
  try {
    return keyExist(STORAGE_KEYS.AUTH_STATE);
  } catch (err) {
    return false;
  }
};
export const getUserData = async () => {
  const authenticated = await getKey(STORAGE_KEYS.AUTH_STATE);
  return Promise.resolve(decode(authenticated));
};
export const saveUserData = data => saveKey(STORAGE_KEYS.AUTH_STATE, data);
export const removeUserData = () => removeKey(STORAGE_KEYS.AUTH_STATE);
export const getTokenData = () => {
  try {
    return keyExist(STORAGE_KEYS.AUTH_STATE);
  } catch (err) {
    return false;
  }
};
export const saveTokenData = data => saveKey(STORAGE_KEYS.TOKEN_DATA, data);
export const removeTokenData = () => removeKey(STORAGE_KEYS.TOKEN_DATA);
export const logOut = () => Promise.all(removeUserData(), removeTokenData());
export const getPermissionList = async () => {
  const user = await getUserData();
  const userPermissions = user ? user.permissions : [];
  return userPermissions;
};
export const getConfigurationsList = async () => {
  const user = await getUserData();
  const systemConfigurations = user ? user.configurations : [];
  return systemConfigurations;
};