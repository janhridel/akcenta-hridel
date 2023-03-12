import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import { Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import DefaultLayout from '../components/layouts/DefaultLayout';

const gists = [
  'https://gist.github.com/janhridel/e338dd1d2e42577235c9c9dfa4a55f58',
  'https://gist.github.com/janhridel/271a88cd7e03968fd16c3033b5d2958f',
  'https://gist.github.com/janhridel/77cb0190fd346993b342051359729f53',
];

const CodeSamplesPage = () => {
  const { t } = useTranslation();

  return (
    <DefaultLayout>
      <Container maxWidth={'lg'}>
        <Typography variant={'h1'} align={'center'}>
          {t('HEADLINES.CODE_SAMPLES')}
        </Typography>

        <Stack sx={{ mt: 5 }} spacing={3}>
          {gists.map((url) => (
            <Link key={`link-${url}`} target={'_blank'} to={url}>
              {url} <OpenInNewRoundedIcon fontSize={'small'} />
            </Link>
          ))}
        </Stack>
      </Container>
    </DefaultLayout>
  );
};

export default CodeSamplesPage;
