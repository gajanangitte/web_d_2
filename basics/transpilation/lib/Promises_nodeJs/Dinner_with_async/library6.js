'use strict';

var cookBeans = function cookBeans() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('beans');
    }, 1000);
  });
};

var steamBroccoli = function steamBroccoli() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('broccoli');
    }, 1000);
  });
};

var cookRice = function cookRice() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('rice');
    }, 1000);
  });
};

var bakeChicken = function bakeChicken() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('chicken');
    }, 1000);
  });
};

module.exports = { cookBeans: cookBeans, steamBroccoli: steamBroccoli, cookRice: cookRice, bakeChicken: bakeChicken };