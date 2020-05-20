'use strict';

//This function returns true 50% of the time.
var randomSuccess = function randomSuccess() {
  var num = Math.random();
  if (num < .5) {
    return true;
  } else {
    return false;
  }
};

//This function returns a promise that resolves half of the time and rejects half of the time
var cookBeanSouffle = function cookBeanSouffle() {
  return new Promise(function (resolve, reject) {
    console.log('Fingers crossed... Putting the Bean Souffle in the oven');
    setTimeout(function () {
      var success = randomSuccess();
      if (success) {
        resolve('Bean Souffle');
      } else {
        reject('Dinner is ruined!');
      }
    }, 1000);
  });
};

module.exports = cookBeanSouffle;