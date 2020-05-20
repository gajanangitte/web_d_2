'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Media = function () {
  function Media(title) {
    _classCallCheck(this, Media);

    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  _createClass(Media, [{
    key: 'toggleCheckOutStatus',
    value: function toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
    }
  }, {
    key: 'addRating',
    value: function addRating(rating) {
      if (rating >= 1 && rating <= 5) this._ratings.push(rating);else console.log('invalid rating');
    }
  }, {
    key: 'getAverageRating',
    value: function getAverageRating() {
      return this._ratings.reduce(function (currentSum, rating) {
        return currentSum + rating;
      }, 0) / this.ratings.length;
    }
  }, {
    key: 'title',
    get: function get() {
      return this._title;
    }
  }, {
    key: 'isCheckedOut',
    get: function get() {
      return this._isCheckedOut;
    },
    set: function set(abba) {
      this._isChecked = abba;
    }
  }, {
    key: 'ratings',
    get: function get() {
      return this._ratings;
    }
  }]);

  return Media;
}();

var Book = function (_Media) {
  _inherits(Book, _Media);

  function Book(author, title, pages) {
    _classCallCheck(this, Book);

    var _this = _possibleConstructorReturn(this, (Book.__proto__ || Object.getPrototypeOf(Book)).call(this, title));

    _this._author = author;
    _this._pages = pages;
    return _this;
  }

  _createClass(Book, [{
    key: 'author',
    get: function get() {
      return this._author;
    }
  }, {
    key: 'pages',
    get: function get() {
      return this._pages;
    }
  }]);

  return Book;
}(Media);

var Movie = function (_Media2) {
  _inherits(Movie, _Media2);

  function Movie(director, title, runTime) {
    var movieCast = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    var songTitles = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];

    _classCallCheck(this, Movie);

    var _this2 = _possibleConstructorReturn(this, (Movie.__proto__ || Object.getPrototypeOf(Movie)).call(this, title));

    _this2._director = director;
    _this2._runTime = runTime;
    _this2._movieCast = movieCast;
    _this2._songTitles = songTitles;
    return _this2;
  }

  _createClass(Movie, [{
    key: 'director',
    get: function get() {
      return this._director;
    }
  }, {
    key: 'runTime',
    get: function get() {
      return this._runTime;
    }
  }]);

  return Movie;
}(Media);

var CD = function (_Media3) {
  _inherits(CD, _Media3);

  function CD(artist, title, songs) {
    _classCallCheck(this, CD);

    var _this3 = _possibleConstructorReturn(this, (CD.__proto__ || Object.getPrototypeOf(CD)).call(this, title));

    _this3._artist = artist;
    _this3._songs = songs;
    return _this3;
  }

  _createClass(CD, [{
    key: 'artist',
    get: function get() {
      return this._artist;
    }
  }, {
    key: 'songs',
    get: function get() {
      return this._songs;
    }
  }]);

  return CD;
}(Media);

var historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
// console.log(historyOfEverything.ratings)
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(3);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating().toFixed(1));

var speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating().toFixed(1));