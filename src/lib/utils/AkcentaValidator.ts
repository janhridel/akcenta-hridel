const isCompanyRegNumberValid = (inputValue: string): boolean => {
  if (!inputValue) {
    return false;
  }

  const registrationNumberRegex = /\d{8}/;
  const formattedRegNumber = inputValue.replaceAll(/\s+/g, '');

  if (!registrationNumberRegex.test(formattedRegNumber)) {
    return false;
  }

  let checkSum = 0;
  for (let i = 0; i < 7; i++) {
    checkSum += +formattedRegNumber[i] * (8 - i);
  }

  const rest = checkSum % 11;
  let controlDigit;

  if (rest === 1) {
    controlDigit = 0;
  } else if (rest === 0) {
    controlDigit = 1;
  } else {
    controlDigit = 11 - rest;
  }

  return +formattedRegNumber[7] === controlDigit;
};

export { isCompanyRegNumberValid };
