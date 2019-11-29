import { Constants } from 'expo';

const getApiUrl = (releaseChannel) => {
//tu ip a usar
return 'http://192.168.2.81:8765/';
}
export const STORAGE_KEYS = {
  AUTH_STATE: 'AUTH_STATE',
  TOKEN_DATA: 'TOKEN_DATA',
};

export const GATEWAY_API_URL = getApiUrl(Constants.manifest.releaseChannel);