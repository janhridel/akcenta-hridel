import { atom } from 'recoil';

import { OrderState } from '../definitions/states/OrderState';

export const orderState = atom<OrderState>({
  key: 'order-state',
  default: {
    quantity: 30,
    totalPrice: 30 * (process.env.REACT_APP_BASIC_HAPPINES_PRICE ? +process.env.REACT_APP_BASIC_HAPPINES_PRICE : 0),
    companyId: '',
    phoneNumber: '',
  },
});
