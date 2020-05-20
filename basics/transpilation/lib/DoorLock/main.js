'use strict';

var door = document.getElementById('door');
var unlock = document.getElementById('unlock');
var lock = document.getElementById('lock');
var sign = document.getElementById('sign');
var cafeImage = document.getElementById('image');

cafeImage.hidden = true;

var openDoor = function openDoor() {
  door.hidden = true;
  cafeImage.hidden = false;
};

var closeDoor = function closeDoor() {
  door.hidden = false;
  cafeImage.hidden = true;
};

unlock.onclick = function () {
  sign.innerHTML = 'OPEN';
  unlock.style.backgroundColor = '#6400e4';
  lock.style.backgroundColor = 'lightgray';
};

lock.onclick = function () {
  sign.innerHTML = 'CLOSED';
  lock.style.backgroundColor = '#6400e4';
  unlock.style.backgroundColor = 'lightgray';
};

unlock.addEventListener('click', function () {
  door.addEventListener('click', openDoor);
  cafeImage.addEventListener('click', closeDoor);
});

// Write your code here
lock.addEventListener('click', function () {
  door.removeEventListener('click', openDoor);
});

unlock.click();