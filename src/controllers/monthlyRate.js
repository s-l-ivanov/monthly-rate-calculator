/* eslint-disable operator-linebreak */
/* eslint-disable prettier/prettier */
import { validationResult } from 'express-validator';
import { logger } from '../config/logger';
import httpStatusCode from '../constants/httpStatusCode';
import BaseError from '../errors/BaseError';
import calculateMonthlyPayment from '../helpers/calculateMonthlyPayment';

const monthlyRate = (req, res, next) => {
  // Handle errors from input validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = new BaseError(
      errors.array()[0].msg,
      httpStatusCode.BAD_REQUEST
    );
    logger.error(
      `Wrong or missing input parameters: ${JSON.stringify(errors.array())}`
    );

    return next(err);
  }

  const {
    principal,
    downPayment,
    numberOfMonths,
    interestRate,
    finalPayment
  } = (req.query);

  const principalP = parseFloat(principal);
  const downPaymentP = parseFloat(downPayment);
  const numberOfMonthsP = parseInt(numberOfMonths, 10);
  const interestRateP = parseFloat(interestRate);
  const finalPaymentP = finalPayment ? parseFloat(finalPayment) : 0;

  const monthlyInterestRate = (interestRateP / 100) / 12;

  const loanBalance = principalP - downPaymentP;

  const monthlyPayment = calculateMonthlyPayment(
    monthlyInterestRate,
    numberOfMonthsP,
    -loanBalance,
    finalPaymentP
  );

  res.status(httpStatusCode.OK).json(monthlyPayment);
};

export default monthlyRate;
