// Day 2:

//  (Part I) The elves are running low on wrapping paper, and so they need to submit an order for more. They have a list of the dimensions (length l, width w, and height h) of each present, and only want to order exactly as much as they need. Fortunately, every present is a box (a perfect right rectangular prism), which makes calculating the required wrapping paper for each gift a little easier: find the surface area of the box, which is 2*l*w + 2*w*h + 2*h*l. The elves also need a little extra paper for each present: the area of the smallest side. All numbers in the elves' list are in feet. How many total square feet of wrapping paper should they order?

// (Part II) The ribbon required to wrap a present is the shortest distance around its sides, or the smallest perimeter of any one face. Each present also requires a bow made out of ribbon as well; the feet of ribbon required for the perfect bow is equal to the cubic feet of volume of the present.

var fs = require( 'fs' );

function readFile( file ){
  var arr = [];
  fs.readFile( file, function( err, data ) {
    if( err ) throw err;
    arr = data.toString().split('\n');
    elfCalculation( arr );
  });
}

function elfCalculation( gifts ){
  // console.log( gifts );
  var gift,
      l,
      w,
      h,
      min,
      sortedDims = [],
      shortestPerim,
      totalPaper = 0,
      totalVolume = 0,
      totalRibbon = 0;

  for (var i = 0; i < gifts.length - 1; i++) {
    gift = gifts[i].split('x');
    l = gift[0];
    w = gift[1];
    h = gift[2];

    sortedDims = gift.sort(function(a, b) {
      return +/\d+/.exec(a)[0] - +/\d+/.exec(b)[0];
    });

    min = sortedDims[0] * sortedDims[1];
    totalPaper = totalPaper + (2 * (l * w + l * h + w * h)) + min;
    totalVolume = sortedDims[0] * sortedDims[1] * sortedDims[2];
    shortestPerim = ( 2 * sortedDims[0]) + ( 2 * sortedDims[1] );
    totalRibbon = totalRibbon + totalVolume + shortestPerim;

  }
  console.log( totalPaper, totalRibbon );
  return totalPaper;
}

readFile('gift_dimensions.txt');
