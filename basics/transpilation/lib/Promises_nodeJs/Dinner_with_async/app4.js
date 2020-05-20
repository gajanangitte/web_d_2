'use strict';

// Write your code below:
var hostDinnerParty = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.t0 = console;
                        _context.next = 4;
                        return cookBeanSouffle();

                    case 4:
                        _context.t1 = _context.sent;
                        _context.t2 = _context.t1 + ' is served!';

                        _context.t0.log.call(_context.t0, _context.t2);

                        _context.next = 13;
                        break;

                    case 9:
                        _context.prev = 9;
                        _context.t3 = _context['catch'](0);

                        console.log(_context.t3);
                        console.log('Ordering a pizza!');

                    case 13:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[0, 9]]);
    }));

    return function hostDinnerParty() {
        return _ref.apply(this, arguments);
    };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var cookBeanSouffle = require('./library.js');

hostDinnerParty();