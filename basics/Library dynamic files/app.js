class Media {
  
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title
  }

  get isCheckedOut() {
    return this._isCheckedOut
  }

  get ratings() {
    return this._ratings
  }

  set isCheckedOut(abba) {
    this._isChecked = abba;
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = ! this._isCheckedOut;
  }

  addRating(rating) {
    if(rating >= 1 && rating <= 5)
      this._ratings.push(rating);
    else
      console.log('invalid rating')
  }

  getAverageRating() {
    return this._ratings.reduce( function(currentSum, rating) {
      return currentSum+ rating;
    }, 0)/this.ratings.length;
  }
}


class Book extends Media{

  constructor(author, title, pages ) {
    super(title);
    this._author = author;
    this._pages = pages;
  }  

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }

}

class Movie extends Media{
  constructor(director, title, runTime, movieCast = [], songTitles = []) {
    super(title);
    this._director = director;
    this._runTime = runTime;
    this._movieCast = movieCast;
    this._songTitles = songTitles;
  }  

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

class CD extends Media{

  constructor(artist, title, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs; 
  }

  get artist() {
    return this._artist;
  }

  get songs() {
    return this._songs;
  }

}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
// console.log(historyOfEverything.ratings)
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(3);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating().toFixed(1));

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating().toFixed(1));