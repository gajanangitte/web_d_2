"use strict";

var MessageMixer = {
  countCharacter: function countCharacter(inputString, inputCharacter) {
    var count = 0;
    var string = inputString.toLowerCase();
    var character = inputCharacter.toLowerCase();
    for (var i = 0; i < string.length; i++) {
      if (string[i] === character) {
        count++;
      }
    }
    return count;
  },
  capitalizeFirstCharacterOfWords: function capitalizeFirstCharacterOfWords(string) {
    var arr = string.split(" ");
    for (var i = 0; i < arr.length; i++) {
      var word = arr[i];
      arr[i] = word[0].toUpperCase() + word.substring(1);
    }
    return arr.join(" ");
  },
  reverseWord: function reverseWord(word) {
    return word.split("").reverse().join("");
  },
  reverseAllWords: function reverseAllWords(sentence) {
    var words = sentence.split(" ");
    for (var i = 0; i < words.length; i++) {
      words[i] = this.reverseWord(words[i]);
    }
    return words.join(" ");
  },
  replaceFirstOccurence: function replaceFirstOccurence(string, toBeReplaced, replaceWith) {
    return string.replace(toBeReplaced, replaceWith);
  },
  replaceAllOccurrences: function replaceAllOccurrences(string, toBeReplaced, replaceWith) {
    return string.split(toBeReplaced).join(replaceWith);
  },
  encode: function encode(string) {
    var replacementObject = { "a": "@", "s": "$", "i": "!", "o": "0", "e": "3", "t": "7" };
    for (var key in replacementObject) {
      string = this.replaceAllOccurrences(string, key, replacementObject[key]);
    }
    return string;
  },
  palindrome: function palindrome(str) {
    return str + " " + MessageMixer.reverseWord(str);
  },
  pigLatin: function pigLatin(sentence, character) {
    return sentence.split(' ').join(character + ' ');
  }
};

module.exports = MessageMixer;