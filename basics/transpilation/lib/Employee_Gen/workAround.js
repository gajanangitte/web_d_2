'use strict';

var _employee = require('./employee');

var _employee2 = _interopRequireDefault(_employee);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getEmployeeInformation(inputSalary) {
  _employee2.default.salary = inputSalary;
  console.log('Cadre: ' + _employee2.default.getCadre());
  console.log('Tax: ' + _employee2.default.calculateTax());
  console.log('Benefits: ' + _employee2.default.getBenefits());
  console.log('Bonus: ' + _employee2.default.calculateBonus());
  console.log('Reimbursement Eligibility: ' + _employee2.default.reimbursementEligibility() + '\n');
}

getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);