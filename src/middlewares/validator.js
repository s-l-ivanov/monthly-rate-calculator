import { query } from 'express-validator';

// eslint-disable-next-line import/prefer-default-export
export const monthlyRateValidator = [
  query('principal')
    .exists()
    .withMessage('Please provide principal value.')
    .isNumeric()
    .withMessage('Please provide numeric input value for principal.'),
  query('downPayment')
    .exists()
    .withMessage('Please provide down payment value.')
    .isNumeric()
    .withMessage('Please provide numeric input value for down payment.'),
  query('numberOfMonths')
    .exists()
    .withMessage('Please provide number of months.')
    .isNumeric()
    .withMessage('Please provide numeric input value for months.'),
  query('interestRate')
    .exists()
    .withMessage('Please provide interest rate.')
    .isNumeric()
    .withMessage('Please provide numeric input value for interest rate.')
];
