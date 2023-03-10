import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

import DefaultLayout from '../components/layouts/DefaultLayout';

const FansPage = () => {
  const { t } = useTranslation();
  return (
    <DefaultLayout>
      <Container maxWidth={'lg'}>
        <Typography variant={'h1'} align={'center'}>
          {t('HEADLINES.FANS')}
        </Typography>

        <Box sx={{ p: 3 }}>
          <Typography>{t('COMING SOON')}</Typography>
        </Box>
      </Container>
    </DefaultLayout>
  );
};

export default FansPage;
