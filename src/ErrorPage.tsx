import { Box, Stack, Typography } from '@mui/material';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  // @ts-ignore
  const error: { statusText?: string; message?: string } = useRouteError();

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', m: 0, p: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Stack spacing={4}>
        <Typography variant={'h1'} color={(theme) => theme.palette.error.main} align={'center'}>
          {'Ooops!'}
        </Typography>
        <Typography variant={'body1'} align={'center'}>
          {'Sorry, an unexpected error has occurred.'}
        </Typography>
        <Typography variant={'body2'} color={'text.secondary'} align={'center'}>
          {error?.statusText || error?.message}
        </Typography>
      </Stack>
    </Box>
  );
};

export default ErrorPage;
