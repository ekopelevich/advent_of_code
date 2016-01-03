// Day 5, Part 2

//Realizing the error of his ways, Santa has switched to a better model of determining whether a string is naughty or nice. None of the old rules apply, as they are all clearly ridiculous. Now, a nice string is one with all of the following properties:

//It contains a pair of any two letters that appears at least twice in the string without overlapping, like xyxy (xy) or aabcdefgaa (aa), but not like aaa (aa, but it overlaps).

//It contains at least one letter which repeats with exactly one letter between them, like xyx, abcdefeghi (efe), or even aaa.

var fs = require('fs');

function readFile(file){
  var arr = [];
  fs.readFile(file, function(err, data) {
    if(err) throw err;
    arr = data.toString().split('\n');
    niceStrings(arr);
  });
}

function niceStrings(arr) {
  var nice = 0;
  var repeatPair;
  var repeatLtr;

  for (var i = 0; i < arr.length; i++) {
    repeatPair = false;
    repeatLtr = false;
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === arr[i][j-2]) {
        repeatLtr = true;
      }
      for (var k = j + 2; k < arr[i].length; k++) {
        if (arr[i][j] === arr[i][k]){
          if (arr[i][j+1] === arr[i][k+1]) {
            repeatPair = true;
          }
        }
      }
    }
    if (repeatPair === true && repeatLtr === true) {
      nice++;
    }
  }
  console.log(nice);
}

readFile('strings.txt');
