'use strict';

// Add the code you want to test below:
var view = document.getElementById('view-button');
var close = document.getElementById('close-button');
var codey = document.getElementById('codey');

var open = function open() {
  codey.style.display = 'block';
  close.style.display = 'block';
};

var hide = function hide() {
  codey.style.display = 'none';
  close.style.display = 'none';
};

view.onclick = open;
close.onclick = hide;

// Write your code here
var textChange = function textChange() {
  view.innerHTML = "Hello, World!";
};

var textReturn = function textReturn() {
  view.innerHTML = "View";
};

view.addEventListener('click', textChange);
close.addEventListener('click', textReturn);