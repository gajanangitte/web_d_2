'use strict';

/*
This is the shopForBeans function from the last exercise
*/

var shopForBeans = function shopForBeans() {
  return new Promise(function (resolve, reject) {
    var beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
    setTimeout(function () {
      var randomIndex = Math.floor(Math.random() * 5);
      var beanType = beanTypes[randomIndex];
      console.log('I bought ' + beanType + ' beans because they were on sale.');
      resolve(beanType);
    }, 1000);
  });
};

var soakTheBeans = function soakTheBeans(beanType) {
  return new Promise(function (resolve, reject) {
    console.log('Time to soak the beans.');
    setTimeout(function () {
      console.log('... The ' + beanType + ' beans are softened.');
      resolve(true);
    }, 1000);
  });
};

var cookTheBeans = function cookTheBeans(isSoftened) {
  return new Promise(function (resolve, reject) {
    console.log('Time to cook the beans.');
    setTimeout(function () {
      if (isSoftened) {
        console.log('... The beans are cooked!');
        resolve('\n\nDinner is served!');
      }
    }, 1000);
  });
};

module.exports = { shopForBeans: shopForBeans, soakTheBeans: soakTheBeans, cookTheBeans: cookTheBeans };