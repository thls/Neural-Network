var data = require('./data');
var backP = require('./backpropagation');

var test = data.test();
var testTarget = data.testTarget();
var train = data.train();
var trainTarget = data.trainTarget();

backP(train, trainTarget, test, testTarget);