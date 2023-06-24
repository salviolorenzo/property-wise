/**
 * P = Principal
 * r = interest rate
 * n = number of payments per year
 * t = number of years
 */

const getMonthlyPaymentData = (
  price: number,
  downPayment = 0,
  rate = 0.07,
  years = 30,
  propertyTaxRate = 0.0083,
  homeInsuranceRate = 0.0035,
  mortgageInsuranceRate = 0.0008,
) => {
  const principal = price - downPayment;
  const n = years * 12; // total payments
  const r = rate / 12; // monthly interest

  const mortgage = (principal * r * ((1 + r) ^ n)) / ((1 + r) ^ n) - 1;
  const mortgageInsurance = principal * mortgageInsuranceRate;
  const tax = (principal * propertyTaxRate) / 12;
  const homeInsurance = (principal * homeInsuranceRate) / 12;

  const monthlyPayment = Number(
    (mortgage + mortgageInsurance + tax + homeInsurance).toFixed(2),
  );
  return {
    mortgageInsurance,
    tax,
    homeInsurance,
    mortgage,
    monthlyPayment,
  };
};

function getAveragePrice(listings) {
  const prices = listings.map((listing) => listing.listPrice);
  const sum = prices.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);

  return sum / prices.length;
}

export { getMonthlyPaymentData, getAveragePrice };
