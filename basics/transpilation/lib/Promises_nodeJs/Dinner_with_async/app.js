'use strict';

// async/await version:
var announceDinner = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var val;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return brainstormDinner();

          case 2:
            val = _context.sent;

            console.log('I\'m going to make ' + val + ' for dinner.');

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function announceDinner() {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var brainstormDinner = require('./library.js');

// Native promise version:
function nativePromiseDinner() {
  brainstormDinner().then(function (meal) {
    console.log('I\'m going to make ' + meal + ' for dinner.');
  });
}

announceDinner();