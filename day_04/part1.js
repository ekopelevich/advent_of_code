// Day 4: Part I

// Santa needs help mining some AdventCoins (very similar to bitcoins) to use as gifts for all the economically forward-thinking little girls and boys. To do this, he needs to find MD5 hashes which, in hexadecimal, start with at least five zeroes. The input to the MD5 hash is some secret key (your puzzle input, given below) followed by a number in decimal. To mine AdventCoins, you must find Santa the lowest positive number (no leading zeroes: 1, 2, 3, ...) that produces such a hash.

var md5 = require('md5');
var crypto = CryptoJS.Crypto.MD5;
var input = 'yzbqklnj';

function adventCoin(input){
  var coin = 0;
  var hash;
  var leading;
  var i = 0;

  while (coin === 0) {
    hash = MD5( input + i.toString() ).toString();
    leading = hash.slice(0,5);
    // if ( i % 25000 === 0 ){
    // 	console.log(hash);
    // }
    // if (leading === '00000' ){
    //   coin = i;
    // }
    i++;
  }

  console.log(coin);
}

adventCoin(input);
