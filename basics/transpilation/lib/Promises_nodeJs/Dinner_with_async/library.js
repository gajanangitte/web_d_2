'use strict';

/*
this is the brainstormDinner function. It's a little silly. 
It returns a promise that uses a series of setTimeout() functions to 
simulate a time-consuming asynchronous action. It's a good example of
"callback hell" or "the pyramid of doom," two ways people describe how
 confusing a bunch of nested callback functions can become.
*/

var brainstormDinner = function brainstormDinner() {
  return new Promise(function (resolve, reject) {
    console.log('I have to decide what\'s for dinner...');
    setTimeout(function () {
      console.log('Should I make salad...?');
      setTimeout(function () {
        console.log('Should I make ramen...?');
        setTimeout(function () {
          console.log('Should I make eggs...?');
          setTimeout(function () {
            console.log('Should I make chicken...?');
            setTimeout(function () {
              console.log('Should I make chowmin...?');
              setTimeout(function () {
                return resolve('beans');
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  });
};

module.exports = brainstormDinner;