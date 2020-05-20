'use strict';

/*
This is the shopForBeans function. It uses a setTimeout() function to simulate a time-consuming\
 asynchronous action. The function returns a promise with a resolved value of a string
 representing a type of bean. It settles on a random beanType from the beanTypes array using
 Math.random().
*/

var shopForBeans = function shopForBeans() {
  return new Promise(function (resolve, reject) {
    var beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
    setTimeout(function () {
      var randomIndex = Math.floor(Math.random() * 5);
      var beanType = beanTypes[randomIndex];
      console.log('2. I bought ' + beanType + ' beans because they were on sale.');
      resolve(beanType);
    }, 1000);
  });
};

module.exports = shopForBeans;