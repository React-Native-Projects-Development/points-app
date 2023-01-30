import {useCallback, useEffect, useState} from 'react';

import {Product} from '../interfaces/product';
import {getProducts} from '../api/fetchData';
import {
  filterData,
  getTotalDiscountPoints,
  getTotalPoints,
} from '../utils/utils';

export type Status = 'all' | 'earned' | 'exchanged';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedOption, setSelectedOption] = useState<Status>('all');
  const [isLoading, setIsLoading] = useState(true);
  const [isCalculatingPoints, setIsCalculatingPoints] = useState(true);

  const onFetchData = useCallback(async () => {
    const responseData = await getProducts();
    setProducts(responseData || []);
    setIsLoading(false);
    setIsCalculatingPoints(false);
  }, []);

  const totalPoints =
    getTotalPoints(products) - getTotalDiscountPoints(products);

  const filteredData = filterData(products, selectedOption);

  useEffect(() => {
    onFetchData();
  }, [onFetchData]);

  return {
    products,
    filteredData,
    selectedOption,
    setSelectedOption,
    totalPoints,
    isCalculatingPoints,
    isLoading,
  };
};
