import * as yup from 'yup';

import { isCompanyRegNumberValid } from '../../utils/AkcentaValidator';
import { PhoneNumberRegex } from '../constants';

export const orderFormSchema = yup.object().shape({
  companyId: yup
    .string()
    .matches(/^\d{8}$/)
    .required()
    .test('validFormat', 'Reg. number is invalid', (companyRegNr) => isCompanyRegNumberValid(companyRegNr as string)),
  phoneNumber: yup.string().trim().matches(PhoneNumberRegex).required(),
});
