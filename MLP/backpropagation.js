var nnFeedForward  = require('./neuralNetwork');
var MathLib = require('./Math');
var wih = [];
var who = [];
var learningRate = 0.3;
var outputs = [];

var backpropagation = function (target){

    var outputError = MathLib.d1.minus(target, outputs);
    var hiddenError = MathLib.d2.dot2x1(MathLib.d2.transpose(who), outputError);
    return {outE: outputError, hidE: hiddenError};

}

var updateWeights = (outputError, hiddenError, hiddenLayer, inputs) => {

    outputError = MathLib.d1.multiply(outputError, outputs);
    outputs = MathLib.d1.multiplyScalar(outputs, -1);
    outputs = MathLib.d1.addScalar(outputs, 1);
    outputError = MathLib.d1.multiply(outputError, outputs);
    var updateWHO = MathLib.d2.dot1x1(outputError, hiddenLayer);
    updateWHO = MathLib.d2.multiplyScalar(updateWHO, learningRate);
    who = MathLib.d2.add(who, updateWHO);


    hiddenError = MathLib.d1.multiply(hiddenError, hiddenLayer);
    hiddenLayer = MathLib.d1.multiplyScalar(hiddenLayer, -1);
    hiddenLayer = MathLib.d1.addScalar(hiddenLayer, 1);
    hiddenError = MathLib.d1.multiply(hiddenError, hiddenLayer);
    var updateWIH = MathLib.d2.dot1x1(hiddenError, inputs);
    updateWIH = MathLib.d2.multiplyScalar(updateWIH, learningRate);
    wih = MathLib.d2.add(wih, updateWIH);

}

var init = () => {
    for (let i = 0; i < 35; i++){
        wih.push([]);
        for (let j = 0; j < 784; j++){
            wih[i].push(Math.random() * (0.07) - 0.035);
        }
    }
    for (let i = 0; i < 10; i++){
        who.push([]);
        for (let j = 0; j < 35; j++){
            who[i].push(Math.random() * (0.516) - 0.258);
        }
    }
}

var train = (inputData, target, id, t) => {
    init();
    for (let epoch = 0; epoch < 1; epoch++){
        for (let i = 0; i < inputData.length; i++){
            var result = nnFeedForward(inputData[i], wih, who);
            outputs = result.outputs;
            var errors = backpropagation(target[i]);
            updateWeights(errors.outE, errors.hidE, result.hiddenLayer, inputData[i]);
            console.log("Epoch "+ epoch + "||| test "+ (i+1) + " of 55000");
        }
    }
    test(id, t);
}

var test = (inputData, target) => {
    var success = 0;
    for (let i = 0; i < inputData.length; i++){
        outputs = nnFeedForward(inputData[i], wih, who).outputs;
        var ar = target[i];
        var tar = ar.indexOf(Math.max(...ar));
        var out = outputs.indexOf(Math.max(...outputs));
        if ( tar == out ){
            success++;
        }else{
        }
        console.log("Test " + i);
    }
    console.log('hit rate: ' + ((success/inputData.length)*100) + "%.");
}

module.exports = train;