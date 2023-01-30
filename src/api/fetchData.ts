import httpService from '../services/httpService';
import {Product} from '../interfaces/product';
import {URL} from '../services/constants';

export const getProducts = async () => {
  try {
    const resp = await httpService.get<Product[]>(URL);
    return resp.data;
  } catch (error: any) {
    console.log(error);
  }
};
