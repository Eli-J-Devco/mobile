/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import {apiConfigs} from '../configs/api-configs';
import {Alert} from 'react-native';

export const instance = axios.create({
  baseURL: apiConfigs.baseUrl,
  headers: {
    Accept: 'application/json',
  },
  timeout: 60000,
});

export const setToken = (token: string) => {
  if (token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    instance.defaults.headers.common.Authorization = '';
  }
};

export function getToken() {
  return instance.defaults.headers.common.Authorization;
}

export function setURL(url: string) {
  instance.defaults.baseURL = url;
}

export function getURL() {
  return instance?.defaults?.baseURL;
}

function getUrl(config: any) {
  if (config?.baseURL) {
    return config?.url?.replace(config?.baseURL, '');
  }

  return config?.url;
}

// Intercept all responses
instance.interceptors.response.use(
  response => {
    // /*
    console.log(
      `%c ${response?.status} - ${getUrl(response?.config)}:`,
      'color: #008000; font-weight: bold',
      response,
    );

    // */
    return response;
  },
  error => {
    // const navigation = useNavigation<NativeStackNavigationProp<any>>();

    console.log(error);

    if (error?.response?.status === 429) {
      Alert.alert('Too many requests. Please try again later.');
    }
    if (error?.response?.status === 401) {
      // navigation.navigate('Login');
      //   EventRegister.emit('LOGOUT', {});
      // Alert.alert('Phiên đăng nhập hết hạn, vui lòng đăng nhập lại', [
      //   {
      //     text: 'OK',
      //     onPress: () => {
      //       EventRegister.emit('LOGOUT', {});
      //     },
      //   },
      // ]);
      // Alert.alert('Phiên đăng nhập hết hạn, vui lòng đăng nhập lại', '', [{}]);
    }
    console.log(
      `%c ${error?.response?.status} - ${getUrl(error?.response?.config)}:`,
      'color: #a71d5d; font-weight: bold',
      error?.response,
    );

    return Promise.reject(error);
  },
);
