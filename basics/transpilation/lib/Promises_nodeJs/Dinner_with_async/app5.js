'use strict';

// Write your code below:
var serveDinner = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var vegetablePromise, starchPromise, proteinPromise, sidePromise;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        vegetablePromise = steamBroccoli();
                        starchPromise = cookRice();
                        proteinPromise = bakeChicken();
                        sidePromise = cookBeans();
                        _context.t0 = console;
                        _context.next = 7;
                        return vegetablePromise;

                    case 7:
                        _context.t1 = _context.sent;
                        _context.t2 = 'Dinner is served. We\'re having ' + _context.t1;
                        _context.t3 = _context.t2 + ', ';
                        _context.next = 12;
                        return starchPromise;

                    case 12:
                        _context.t4 = _context.sent;
                        _context.t5 = _context.t3 + _context.t4;
                        _context.t6 = _context.t5 + ', ';
                        _context.next = 17;
                        return proteinPromise;

                    case 17:
                        _context.t7 = _context.sent;
                        _context.t8 = _context.t6 + _context.t7;
                        _context.t9 = _context.t8 + ', and ';
                        _context.next = 22;
                        return sidePromise;

                    case 22:
                        _context.t10 = _context.sent;
                        _context.t11 = _context.t9 + _context.t10;
                        _context.t12 = _context.t11 + '.';

                        _context.t0.log.call(_context.t0, _context.t12);

                    case 26:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function serveDinner() {
        return _ref.apply(this, arguments);
    };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _require = require('./library.js'),
    cookBeans = _require.cookBeans,
    steamBroccoli = _require.steamBroccoli,
    cookRice = _require.cookRice,
    bakeChicken = _require.bakeChicken;

serveDinner();