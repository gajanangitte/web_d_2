'use strict';

var _require = require('./library.js'),
    checkInventory = _require.checkInventory,
    processPayment = _require.processPayment,
    shipOrder = _require.shipOrder;

var order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

// Refactor the code below:

checkInventory(order).then(function (resolvedValueArray) {
  return processPayment(resolvedValueArray);
}).then(function (resolvedValueArray) {
  return shipOrder(resolvedValueArray);
}).then(function (successMessage) {
  console.log(successMessage);
});