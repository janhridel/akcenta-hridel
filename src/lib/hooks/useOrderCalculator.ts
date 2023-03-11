import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { orderState } from '../atoms';
import { OrderState } from '../definitions/states/OrderState';

export function useOrderCalculator() {
  const [orderData, setOrderData] = useRecoilState<OrderState>(orderState);
  const [quantity, setQuantity] = useState<number>(orderData.quantity);

  useEffect(() => {
    recalculatePrice(quantity);
  }, [quantity]);

  const recalculatePrice = (quantity: number) => {
    setOrderData((currentValue) => ({
      ...currentValue,
      quantity,
      totalPrice: quantity * (process.env.REACT_APP_BASIC_HAPPINES_PRICE ? +process.env.REACT_APP_BASIC_HAPPINES_PRICE : 0),
    }));
  };

  const setCustomerData = (data: { companyId: string; phoneNumber: string }) => {
    setOrderData((currentValue) => ({ ...currentValue, companyId: data.companyId, phoneNumber: data.phoneNumber }));
  };

  return {
    orderData,
    quantity,
    setQuantity,
    setCustomerData,
  };
}
