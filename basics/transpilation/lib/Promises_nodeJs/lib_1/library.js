"use strict";

var store = {
  sunglasses: {
    inventory: 817,
    cost: 9.99
  },
  pants: {
    inventory: 236,
    cost: 7.99
  },
  bags: {
    inventory: 17,
    cost: 12.99
  }
};

var checkInventory = function checkInventory(order) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var itemsArr = order.items;
      var inStock = itemsArr.every(function (item) {
        return store[item[0]].inventory >= item[1];
      });

      if (inStock) {
        var total = 0;
        itemsArr.forEach(function (item) {
          total += item[1] * store[item[0]].cost;
        });
        console.log("All of the items are in stock. The total cost of the order is " + total + ".");
        resolve([order, total]);
      } else {
        reject("The order could not be completed because some items are sold out.");
      }
    }, generateRandomDelay());
  });
};

var processPayment = function processPayment(responseArray) {
  var order = responseArray[0];
  var total = responseArray[1];
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var hasEnoughMoney = order.giftcardBalance >= total;
      // For simplicity we've omited a lot of functionality
      // If we were making more realistic code, we would want to update the giftcardBalance and the inventory
      if (hasEnoughMoney) {
        console.log("Payment processed with giftcard. Generating shipping label.");
        var trackingNum = generateTrackingNumber();
        resolve([order, trackingNum]);
      } else {
        reject("Cannot process order: giftcard balance was insufficient.");
      }
    }, generateRandomDelay());
  });
};

var shipOrder = function shipOrder(responseArray) {
  var order = responseArray[0];
  var trackingNum = responseArray[1];
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("The order has been shipped. The tracking number is: " + trackingNum + ".");
    }, generateRandomDelay());
  });
};

// This function generates a random number to serve as a "tracking number" on the shipping label. In real life this wouldn't be a random number
function generateTrackingNumber() {
  return Math.floor(Math.random() * 1000000);
}

// This function generates a random number to serve as delay in a setTimeout() since real asynchrnous operations take variable amounts of time
function generateRandomDelay() {
  return Math.floor(Math.random() * 2000);
}

module.exports = { checkInventory: checkInventory, processPayment: processPayment, shipOrder: shipOrder };