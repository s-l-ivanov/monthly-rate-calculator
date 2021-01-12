# Simple Monthly Rate calculator
 The calculator uses the Excel PMT Function which returns the periodic payment for a loan.
### Installation

SMRBC requires [Node.js](https://nodejs.org/) v12.18.3+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd monthly-rate-calculator
$ yarn install
$ yarn start
```

### Example API call:
```sh
GET http://localhost:3000/rate?principal=500000&downPayment=0&numberOfMonths=120&interestRate=3.5&finalPayment=10000
```
### Expected Result:
4874.574172299913