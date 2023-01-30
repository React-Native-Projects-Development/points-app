import {expect, jest, test} from '@jest/globals';

import httpService from '../../src/services/httpService';

import {getProducts} from '../../src/api/fetchData';

test('should fetch data successfully', async () => {
  const response = {
    data: {
      createdAt: '2022-12-09T06:34:25.607Z',
      product: 'Handmade Metal Shoes',
      points: 16434,
      image: 'https://loremflickr.com/640/480/transport',
      is_redemption: false,
      id: '1',
    },
    status: 200,
  };

  jest.spyOn(httpService, 'get').mockResolvedValue(response);

  const results = await getProducts();

  expect(results).toEqual(response.data);

  expect(httpService.get).toHaveBeenCalled();
});
