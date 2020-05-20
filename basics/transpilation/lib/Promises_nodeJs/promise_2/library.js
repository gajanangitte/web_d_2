"use strict";

var checkAvailability = function checkAvailability(itemName, distributorName) {
    console.log("Checking availability of " + itemName + " at " + distributorName + "...");
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (restockSuccess()) {
                console.log(itemName + " are in stock at " + distributorName);
                resolve(itemName);
            } else {
                reject("Error: " + itemName + " is unavailable from " + distributorName + " at this time.");
            }
        }, 1000);
    });
};

module.exports = { checkAvailability: checkAvailability };

// This is a function that returns true 80% of the time
// We're using it to simulate a request to the distributor being successful this often
function restockSuccess() {
    return Math.random() > .2;
}