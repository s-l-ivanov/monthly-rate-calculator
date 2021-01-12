/**
 * Function that calculates the payment for a loan based on constant
 * payments and a constant interest rate.
 * @param {number} monthlyInterestRate - in decimal value
 * @param {number} numberOfMonths - The total number of payments for the loan
 * @param {number} principalValue - The present value, or the total amount that
 * a series of future payments is worth now; also known as the principal.
 * @param {number} futureValue The future value, or a cash balance you want to attain after
 * the last payment is made. If futureValue is omitted, it is assumed to be 0 (zero),
 * that is, the future value of a loan is 0.
 * @returns {number} monthlyPayment - the monthly payment
 */
function calculateMonthlyPayment(
  monthlyInterestRate,
  numberOfMonths,
  principalValue,
  futureValue = 0
) {
  if (monthlyInterestRate === 0) {
    return -(principalValue + futureValue) / numberOfMonths;
  }

  const presentValueInterestFactor =
    (1 + monthlyInterestRate) ** numberOfMonths;

  const monthlyPayment =
    (monthlyInterestRate / (presentValueInterestFactor - 1)) *
    -(principalValue * presentValueInterestFactor + futureValue);

  return monthlyPayment;
}

export default calculateMonthlyPayment;
