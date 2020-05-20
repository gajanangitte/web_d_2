"use strict";

var _messageMixer = require("./messageMixer");

var _messageMixer2 = _interopRequireDefault(_messageMixer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function displayMessage() {
  console.log(_messageMixer2.default.countCharacter("What is the color of the sky?", "t"));
  console.log(_messageMixer2.default.capitalizeFirstCharacterOfWords("What is the color of the sky?"));
  console.log(_messageMixer2.default.reverseWord("What is the color of the sky?"));
  console.log(_messageMixer2.default.reverseAllWords("What is the color of the sky?"));
  console.log(_messageMixer2.default.replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
  console.log(_messageMixer2.default.encode("What is the color of the sky?"));
  console.log(_messageMixer2.default.palindrome("JazzinessBlueMan"));
  console.log(_messageMixer2.default.pigLatin("The color of Sky is Hollow", "o"));
}

displayMessage();