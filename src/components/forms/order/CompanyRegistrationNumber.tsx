import { TextField } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

const CompanyRegistrationNumber = (props: any) => {
  const { t } = useTranslation();
  const { defaultValue } = props;
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const getErrorMessage = () => {
    if (!errors.companyId) {
      return null;
    }

    if ((errors.companyId?.type as unknown as string) === 'required') {
      return t('ORDER_FORM.COMPANY_REG_NUMBER.ERRORS.REQUIRED');
    }

    if ((errors.companyId?.type as unknown as string) === 'matches') {
      return t('ORDER_FORM.COMPANY_REG_NUMBER.ERRORS.MATCH');
    }

    if ((errors.companyId?.type as unknown as string) === 'validFormat') {
      return t('ORDER_FORM.COMPANY_REG_NUMBER.ERRORS.VALID_FORMAT');
    }
    return '';
  };

  return (
    <>
      <Controller
        name="companyId"
        control={control}
        defaultValue={defaultValue || ''}
        render={({ field }) => (
          <TextField
            {...field}
            required
            fullWidth
            type="text"
            variant="filled"
            error={!!errors.companyId}
            helperText={getErrorMessage()}
            label={t('ORDER_FORM.COMPANY_REG_NUMBER.LABEL')}
            placeholder={`${t('ORDER_FORM.COMPANY_REG_NUMBER.PLACEHOLDER')}`}
          />
        )}
      />
    </>
  );
};

export default CompanyRegistrationNumber;
