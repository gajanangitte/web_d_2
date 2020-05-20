'use strict';

// Write your code below:
var makeBeans = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var type, isSoft, dinner;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return shopForBeans();

          case 2:
            type = _context.sent;
            _context.next = 5;
            return soakTheBeans(type);

          case 5:
            isSoft = _context.sent;
            _context.next = 8;
            return cookTheBeans(isSoft);

          case 8:
            dinner = _context.sent;

            console.log(dinner);

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function makeBeans() {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _require = require('./library.js'),
    shopForBeans = _require.shopForBeans,
    soakTheBeans = _require.soakTheBeans,
    cookTheBeans = _require.cookTheBeans;

;

makeBeans();