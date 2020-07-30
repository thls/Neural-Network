var MathLib = require('./Math');
var hiddenLayer;


var feedForward = function (inputs, wih, who){
    hiddenLayer = MathLib.d2.dot2x1(wih, inputs);
    hiddenLayer = MathLib.d1.applyActivationFunction(hiddenLayer, MathLib.sigmoid);

    var outputs = MathLib.d2.dot2x1(who, hiddenLayer);
    outputs = MathLib.d1.applyActivationFunction(outputs, MathLib.sigmoid);

    return {outputs: outputs, hiddenLayer: hiddenLayer};
}

module.exports = feedForward;



