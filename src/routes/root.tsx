import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

import DefaultLayout from '../components/layouts/DefaultLayout';

const RootPage = () => {
  const { t } = useTranslation();

  return (
    <DefaultLayout>
      <Container maxWidth={'lg'}>
        <Typography variant={'h1'} align={'center'}>
          {t('HEADLINES.HOMEPAGE')}
        </Typography>

        <Grid container spacing={4} sx={{ mt: 3 }}>
          <Grid item xs={12} md={6}>
            <Typography variant={'h6'} component={'h2'}>
              {t('WHY_AKCENTA.TITLE')}
            </Typography>
            <Typography>{t('WHY_AKCENTA.DESCRIPTION')}</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant={'h6'} component={'h2'}>
              {t('WHY_ME.TITLE')}
            </Typography>
            <Typography>{t('WHY_ME.DESCRIPTION')}</Typography>
          </Grid>
        </Grid>
      </Container>
    </DefaultLayout>
  );
};

export default RootPage;
