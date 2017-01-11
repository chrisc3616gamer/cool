
var math = require('./math');
var util = require('util');

for (var num = 1; num < 8000; num++) {
    // util.log('Gel for '+ num +' = '+ math.gel(num));
    util.log('Gel for '+ num +' = '+ math.gelLoop(num));
}