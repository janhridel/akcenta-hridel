import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { Box, Button, Container, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import DefaultLayout from '../components/layouts/DefaultLayout';
import { useOrderCalculator } from '../lib/hooks/useOrderCalculator';

const OrderSummaryPage = () => {
  const { t, i18n } = useTranslation();
  const { orderData } = useOrderCalculator();
  const navigate = useNavigate();

  return (
    <DefaultLayout>
      <Container maxWidth={'lg'}>
        <Typography variant={'h1'} align={'center'}>
          {t('HEADLINES.ORDER_SUMMARY')}
        </Typography>

        <Table>
          <TableBody>
            <TableRow>
              <TableCell variant={'head'}>{t('ORDER.QUANTITY')}</TableCell>
              <TableCell variant={'body'} align={'right'}>
                {orderData.quantity}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant={'head'}>{`${t('ORDER.PRICE')} (${orderData.quantity} x ${process.env.REACT_APP_BASIC_HAPPINES_PRICE})`}</TableCell>
              <TableCell variant={'body'} align={'right'}>
                {orderData.totalPrice.toLocaleString(i18n.language)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant={'head'}>{t('ORDER.CUSTOMER')}</TableCell>
              <TableCell variant={'body'} align={'right'}>
                {orderData.companyId}
                <br />
                <Typography variant={'body2'} color={'text.secondary'}>
                  {orderData.phoneNumber}
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Box sx={{ mt: 5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Button
            onClick={() => navigate('/order')}
            color={'secondary'}
            variant={'text'}
            size={'large'}
            startIcon={<ArrowBackIosNewRoundedIcon />}
            disableElevation
          >
            {t('ORDER_FORM.CHANGE.LABEL')}
          </Button>
          <Button color={'primary'} variant={'contained'} size={'large'} disableElevation disabled>
            {t('ORDER_FORM.SUBMIT.LABEL')}
          </Button>
        </Box>
      </Container>
    </DefaultLayout>
  );
};

export default OrderSummaryPage;
