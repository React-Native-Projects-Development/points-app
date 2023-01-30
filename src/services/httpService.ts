import {Alert} from 'react-native';

import axios, {AxiosError} from 'axios';

import {URL} from './constants';

const httpService = () => {
  const instance = axios.create({
    baseURL: URL,
  });

  instance.interceptors.response.use(
    response => response,
    (error: AxiosError) => {
      if (error.response?.status !== 200) {
        Alert.alert(error.message);
      }

      return Promise.reject(error);
    },
  );

  return instance;
};

export default httpService();
