import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Container, Grid, Slider, Typography } from '@mui/material';
import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import CompanyRegistrationNumber from '../components/forms/order/CompanyRegistrationNumber';
import Phone from '../components/forms/order/Phone';
import DefaultLayout from '../components/layouts/DefaultLayout';
import { OrderForm } from '../lib/definitions/forms/OrderForm';
import { orderFormSchema } from '../lib/definitions/schemas/orderFormSchema';
import { useOrderCalculator } from '../lib/hooks/useOrderCalculator';

const OrderPage = () => {
  const { t, i18n } = useTranslation();
  const { quantity, setQuantity, setCustomerData, orderData } = useOrderCalculator();
  const navigate = useNavigate();

  const orderFormMethods = useForm<OrderForm>({
    resolver: yupResolver(orderFormSchema),
  });

  const orderFormSubmitHandler: SubmitHandler<OrderForm> = (data) => {
    setCustomerData({ companyId: data.companyId, phoneNumber: data.phoneNumber });
    navigate('/order-summary');
  };
  const handleQuantityChange = (event: Event, newValue: number | number[]) => {
    setQuantity(newValue as number);
  };

  return (
    <DefaultLayout>
      <Container maxWidth={'lg'}>
        <Typography variant={'h1'} align={'center'}>
          {t('HEADLINES.ORDER')}
        </Typography>

        <Box sx={{ mt: 3 }}>
          <Typography variant={'h5'} component={'h2'}>
            {t('ORDER.QUANTITY')}
          </Typography>
          <Box sx={{ my: 2, px: 4, display: 'flex', justifyContent: 'center' }}>
            <Typography variant={'h3'}>{quantity}</Typography>
          </Box>
          <Box sx={{ my: 2, px: 4, display: 'flex', justifyContent: 'center' }}>
            <Slider value={quantity} valueLabelDisplay="auto" step={10} marks min={10} max={150} color={'secondary'} onChange={handleQuantityChange} />
          </Box>

          <Typography variant={'h5'} component={'h2'}>
            {t('ORDER.PRICE')}
          </Typography>
          <Box sx={{ my: 2, display: 'flex', justifyContent: 'center' }}>
            <Typography variant={'h3'}>
              {orderData.totalPrice.toLocaleString(i18n.language)} {t('CURRENCIES.UNIVERSAL_MONEY')}
            </Typography>
          </Box>

          <Typography variant={'h5'} component={'h2'}>
            {t('ORDER.CUSTOMER')}
          </Typography>
          <FormProvider {...orderFormMethods}>
            <form onSubmit={orderFormMethods.handleSubmit(orderFormSubmitHandler)} style={{ width: '100%' }}>
              <Grid container spacing={3} sx={{ my: 2 }}>
                <Grid item xs={12} md={6}>
                  <CompanyRegistrationNumber defaultValue={orderData.companyId} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Phone defaultValue={orderData.phoneNumber} />
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', pt: 3 }}>
                  <Button type={'submit'} color={'primary'} variant={'contained'} size={'large'} disableElevation>
                    {t('ORDER_FORM.SUMMARY.LABEL')}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </FormProvider>
        </Box>
      </Container>
    </DefaultLayout>
  );
};

export default OrderPage;
