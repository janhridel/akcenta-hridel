import { TextField } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

const Phone = (props: any) => {
  const { t } = useTranslation();
  const { defaultValue } = props;
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const getErrorMessage = () => {
    if (!errors.phoneNumber) {
      return null;
    }

    if ((errors.phoneNumber?.type as unknown as string) === 'required') {
      return t('ORDER_FORM.PHONE.ERRORS.REQUIRED');
    }

    if ((errors.phoneNumber?.type as unknown as string) === 'matches') {
      return t('ORDER_FORM.PHONE.ERRORS.MATCHES');
    }

    return '';
  };

  return (
    <>
      <Controller
        name="phoneNumber"
        control={control}
        defaultValue={defaultValue || ''}
        render={({ field }) => (
          <TextField
            {...field}
            required
            fullWidth
            type="text"
            variant="filled"
            error={!!errors.phoneNumber}
            helperText={getErrorMessage()}
            label={t('ORDER_FORM.PHONE.LABEL')}
            placeholder={`${t('ORDER_FORM.PHONE.PLACEHOLDER')}`}
          />
        )}
      />
    </>
  );
};

export default Phone;
