import { Box, Button, CircularProgress, Container, Grid, Typography } from '@mui/material';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import DefaultLayout from '../components/layouts/DefaultLayout';
import UserCard from '../components/users/UserCard';
import { UserDto } from '../lib/definitions/dtos/UserDto';
import { fetchFans } from '../lib/services/FansService';
import { shuffleArray } from '../lib/utils/FisherYates';

const FansPage = () => {
  const { t } = useTranslation();
  const [fans, setFans] = useState<UserDto[]>([]);
  const queryClient = useQueryClient();
  const fetchFansQuery = useQuery(['fetch-fans'], () => fetchFans());

  useEffect(() => {
    setFans(fetchFansQuery.data);
  }, [fetchFansQuery.data]);

  const reloadFans = () => {
    queryClient.invalidateQueries(['fetch-fans']);
  };

  const shuffleFans = () => {
    const newOrderFans = shuffleArray([...fans]);
    setFans(newOrderFans);
  };

  return (
    <DefaultLayout>
      <Container maxWidth={'lg'}>
        <Typography variant={'h1'} align={'center'}>
          {t('HEADLINES.FANS')}
        </Typography>

        {fetchFansQuery.isLoading && (
          <Box sx={{ mt: 5, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '30vh' }}>
            <CircularProgress />
          </Box>
        )}

        {!fetchFansQuery.isLoading && !!fans?.length && (
          <>
            <Grid container spacing={2} sx={{ mt: 5 }}>
              {fans.map((user: UserDto) => (
                <Grid key={`user-item-${user.id}`} item xs={12} md={6}>
                  <UserCard userData={user} />
                </Grid>
              ))}
            </Grid>

            <Box sx={{ mt: 5, pb: 5, display: 'flex', justifyContent: 'center' }}>
              <Button variant={'text'} size={'large'} color={'secondary'} sx={{ mr: 2 }} onClick={shuffleFans}>
                {t('SHUFFLE')}
              </Button>
              <Button variant={'text'} size={'large'} color={'secondary'} sx={{ mr: 2 }} onClick={reloadFans}>
                {t('RELOAD')}
              </Button>
            </Box>
          </>
        )}
      </Container>
    </DefaultLayout>
  );
};

export default FansPage;
