// Day 5 - Part 1

// Santa needs help figuring out which strings in his text file are naughty or nice.

// A nice string is one with all of the following properties:
// It contains at least three vowels (aeiou only), like aei, xazegov, or aeiouaeiouaeiou.
// It contains at least one letter that appears twice in a row, like xx, abcdde (dd), or aabbccdd (aa, bb, cc, or dd).
// It does not contain the strings ab, cd, pq, or xy, even if they are part of one of the other requirements.

var fs = require('fs');

function readFile( file ){
  var arr = [];
  fs.readFile( file, function( err, data ) {
    if( err ) throw err;
    arr = data.toString().split('\n');
    niceStrings( arr );
  });
}

function niceStrings(arr){
  var nice = 0;

  for (var i = 0; i < arr.length - 1; i++) {
    vowels = 0;
    doubles = false;
    badCombos = false;

    for (var j = 0; j < arr[i].length; j++) {

      if (arr[i][j] === 'a' ||
          arr[i][j] === 'e' ||
          arr[i][j] === 'i' ||
          arr[i][j] === 'o' ||
          arr[i][j] === 'u') {
            vowels++;
      }
      if (arr[i][j] === arr[i][j-1]) {
        doubles = true;
      }
      if (arr[i][j] === 'a' && arr[i][j+1] === 'b') {
        badCombos = true;
      }
      if (arr[i][j] === 'c' && arr[i][j+1] === 'd') {
        badCombos = true;
      }
      if (arr[i][j] === 'p' && arr[i][j+1] === 'q') {
        badCombos = true;
      }
      if (arr[i][j] === 'x' && arr[i][j+1] === 'y') {
        badCombos = true;
      }
    }
    if (vowels > 2 && doubles === true && badCombos === false) {
      nice++;
    }
  }
  console.log(nice);
}

readFile('strings.txt');
