'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Employee = {
  salary: 100000,
  getCadre: function getCadre() {
    if (this.salary >= payGrades.entryLevel.minSalary && this.salary <= payGrades.entryLevel.maxSalary) {
      return 'entryLevel';
    } else if (this.salary >= payGrades.midLevel.minSalary && this.salary <= payGrades.midLevel.maxSalary) {
      return 'midLevel';
    } else return 'seniorLevel';
  },
  calculateTax: function calculateTax() {
    return payGrades[this.getCadre()].taxMultiplier * this.salary;
  },
  getBenefits: function getBenefits() {
    return payGrades[this.getCadre()].benefits.join(', ');
  },
  calculateBonus: function calculateBonus() {
    return .02 * this.salary;
  },
  reimbursementEligibility: function reimbursementEligibility() {
    var reimbursementCosts = { health: 5000, housing: 8000, wellness: 6000, gym: 12000 };
    var totalBenefitsValue = 0;
    var employeeBenefits = payGrades[this.getCadre()].benefits;
    for (var i = 0; i < employeeBenefits.length; i++) {
      totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
    }
    return totalBenefitsValue;
  }
};

var payGrades = {
  entryLevel: { taxMultiplier: .05, benefits: ['health'], minSalary: 10000, maxSalary: 49999 },
  midLevel: { taxMultiplier: .1, benefits: ['health', 'housing'], minSalary: 50000, maxSalary: 99999 },
  seniorLevel: { taxMultiplier: .2, benefits: ['health', 'housing', 'wellness', 'gym'], minSalary: 100000, maxSalary: 200000 }
};

exports.default = Employee;