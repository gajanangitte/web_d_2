'use strict';

// Write your code below:


var serveDinnerAgain = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var foodArray, vegetable, starch, protein, side;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]);

          case 2:
            foodArray = _context.sent;
            vegetable = foodArray[0];
            starch = foodArray[1];
            protein = foodArray[2];
            side = foodArray[3];


            console.log('Dinner is served. We\'re having ' + vegetable + ', ' + starch + ', ' + protein + ', and ' + side + '.');

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function serveDinnerAgain() {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _require = require('./library.js'),
    cookBeans = _require.cookBeans,
    steamBroccoli = _require.steamBroccoli,
    cookRice = _require.cookRice,
    bakeChicken = _require.bakeChicken;

serveDinnerAgain();