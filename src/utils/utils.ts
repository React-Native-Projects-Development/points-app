import {format} from 'date-fns';
import es from 'date-fns/locale/es';

import {Status} from '../hooks/useProducts';
import {Product} from '../interfaces/product';

export const filterData = (
  products: Product[] = [],
  selectedOption: Status,
) => {
  switch (selectedOption) {
    case 'earned':
      return products
        .filter(prod => !prod.is_redemption)
        .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
    case 'exchanged':
      return products
        .filter(prod => prod.is_redemption)
        .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
    default:
      return products.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  }
};

export const getTotalPoints = (products: Product[]) =>
  products?.map(el => el.points).reduce((prev, next) => prev + next, 0);

export const getTotalDiscountPoints = (products: Product[]) =>
  products
    ?.filter(el => el.is_redemption)
    .map(el => el.points)
    .reduce((prev, next) => prev + next, 0);

export const formatDate = (date: string) =>
  format(new Date(date), 'dd MMMM, yyyy', {locale: es});
