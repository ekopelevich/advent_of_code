// Day 3

// (Part I) Santa is delivering presents to an infinite two-dimensional grid of houses. He begins by delivering a present to the house at his starting location, and then an elf at the North Pole calls him via radio and tells him where to move next. Moves are always exactly one house to the north (^), south (v), east (>), or west (<). After each move, he delivers another present to the house at his new location. However, the elf back at the north pole has had a little too much eggnog, and so his directions are a little off, and Santa ends up visiting some houses more than once. How many houses receive at least one present?


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
  var houseCount = 0;
  var x = 0;
  var y = 0;
  var newHouse;
  var visitLog = [[x,y]];

  //console.log( visitLog );
  for (var i = 0; i < dir.length; i++) {
    if (dir[i] === '>'){
      // move right
      x++;
      newHouse = [x,y];
      visitLog.push( newHouse );
    } else if(dir[i] === '<'){
      // move left
      x--;
      newHouse = [x,y];
      visitLog.push( newHouse );
    } else if (dir[i] === '^') {
      // move up
      y++;
      newHouse = [x,y];
      visitLog.push( newHouse );
    } else if (dir[i] === 'v') {
      // move down
      y--;
      newHouse = [x,y];
      visitLog.push( newHouse );
    }
  }
  removeDups(visitLog);
}

function removeDups( visitLog ){
  var uniqLog = {};
  var countArr = [];
  for (var i = 0; i < visitLog.length; i++) {
    uniqLog[visitLog[i]]=0;
  }
  for(i in uniqLog) {
    countArr.push(i);
  }
  houseCount = countArr.length;
  console.log( 'Total unique houses: ' + houseCount );
}

readFile('input.js');
