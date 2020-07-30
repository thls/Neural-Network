const csvjson = require('csvjson');
const readFileSync = require('fs').readFileSync;                          

module.exports = {
    testTarget: ()=>{
        console.log("Loading test target...");
        return toArray(csvjson.toObject(readFileSync('./data/testTargetHeaders.csv', 'utf-8')), 10000);
    },
    trainTarget: () => {
        console.log("Loading train target...");
        return toArray(csvjson.toObject(readFileSync('./data/trainTargetHeaders.csv', 'utf-8')), 55000);
    },
    test: () => {
        console.log("Normalizing test...");

        return normalize(csvjson.toObject(readFileSync('./data/test.csv', 'utf-8')), 10000);
    },
    train: () => {
        console.log("Normalizing train...");

        return normalize(csvjson.toObject(readFileSync('./data/train.csv', 'utf-8')), 55000);
    }
}

var toArray = (json, length) => {
    var result = [];
    for(let i = 0; i < length; i++){
        result.push([]);
        for (var key in json[i]){
            result[i].push(parseFloat(json[i][key]));
        }
    }
    return result;
}

var normalize = (json, length) => {
    var result = [];
    for (let i = 0; i < length; i++){
        result.push([]);
        var cont = -1;
        for (var key in json[i]){
            if (cont!= -1){
                result[i].push((json[i][key] / 255) * 0.999);
            }
            cont++;
        }
    }
    return result;
}
