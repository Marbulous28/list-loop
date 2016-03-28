var sentence = [];
sentence = prompt("Type in a sentence.");
sentence = sentence.split([" "]);
alert(sentence);

var newSentence = [];
var letters = 0;
sentence.forEach(function(words){
  letters = words.length;
  if (letters >= 3) {
    newSentence.push(words);
  }
});

var reversedSentence = newSentence.reverse();
var finalForm = reversedSentence.join([" "]);
alert(finalForm);
