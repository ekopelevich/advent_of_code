// (Part II) The next year, to speed up the process, Santa creates a robot version of himself, Robo-Santa, to deliver presents with him. Santa and Robo-Santa start at the same location (delivering two presents to the same starting house), then take turns moving based on instructions from the elf, who is eggnoggedly reading from the same script as the previous year.

var fs = require( 'fs' );

function readFile( file ){
  var arr = [];
  fs.readFile( file, function( err, data ) {
    if( err ) throw err;
    arr = data.toString().split('');
    santaDelivery( arr );
  });
}

function santaDelivery( dir ){
  var santa = [];
  var roboSanta = [];
  var x = 0;
  var y = 0;
  var newHouse;
  var santaLog = [[x,y]];
  var roboSantaLog = [[x,y]];

  for (var k = 0; k < dir.length; k++) {
    if (k % 2 === 0) {
      santa.push(dir[k]);
    } else if (k % 2 !== 0) {
      roboSanta.push(dir[k]);
    }
  }

  for (var i = 0; i < santa.length; i++) {
    if (santa[i] === '>'){
      // move right
      x++;
      newHouse = [x,y];
      santaLog.push( newHouse );
    } else if(santa[i] === '<'){
      // move left
      x--;
      newHouse = [x,y];
      santaLog.push( newHouse );
    } else if (santa[i] === '^') {
      // move up
      y++;
      newHouse = [x,y];
      santaLog.push( newHouse );
    } else if (santa[i] === 'v') {
      // move down
      y--;
      newHouse = [x,y];
      santaLog.push( newHouse );
    }
  }

  x = 0;
  y = 0;

  for (var j = 0; j < roboSanta.length; j++) {
    if (roboSanta[j] === '>'){
      // move right
      x++;
      newHouse = [x,y];
      roboSantaLog.push( newHouse );
    } else if(roboSanta[j] === '<'){
      // move left
      x--;
      newHouse = [x,y];
      roboSantaLog.push( newHouse );
    } else if (roboSanta[j] === '^') {
      // move up
      y++;
      newHouse = [x,y];
      roboSantaLog.push( newHouse );
    } else if (roboSanta[j] === 'v') {
      // move down
      y--;
      newHouse = [x,y];
      roboSantaLog.push( newHouse );
    }
  }
  Array.prototype.push.apply(santaLog, roboSantaLog);
  removeDups(santaLog);
}

function removeDups( visitLog ){
  var house;
  var houseCount = 0;
  var uniqLog = {};
  var countArr = [];
  for (var i = 0; i < visitLog.length; i++) {
    uniqLog[visitLog[i]]=0;
  }
  for(house in uniqLog) {
    countArr.push(house);
  }
  houseCount = countArr.length;
  console.log( 'Total unique houses: ' + houseCount );
}

readFile('input.js');
