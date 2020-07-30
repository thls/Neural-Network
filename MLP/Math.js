
module.exports = { d2:{

        dot2x2: function (m1, m2){
            var result = [];
            for (let i = 0; i < m1.length; i++){
                result.push([]);
                for (let j = 0; j < m2[0].length; j++){
                    result[i].push(0);
                    for (let k = 0; k < m2.length; k++){
                        result[i][j] = result[i][j] + m1[i][k]*m2[k][j];
                    }
                }
            }
            return result;
        },
        dot2x1: (m, v) =>{
            var result = [];
            for (let i = 0; i < m.length; i++){
                result.push(0);
                for (let j = 0; j < v.length; j++){
                    result[i] += m[i][j]*v[j];
                }
            }
            return result;
        },
        dot1x1: (v1, v2) =>{
            var result = [];
            for (let i = 0; i < v1.length; i++){
                result.push([]);
                for (let j = 0; j < v2.length; j++){
                    result[i].push(v1[i]*v2[j]);
                }
            }
            return result;
        },

        transpose: function (mat){
            var result = [];
            for (let i = 0;i < mat[0].length; i++){
                result.push([]);
                for (let j = 0; j < mat.length; j++){
                    result[i].push(mat[j][i]);
                }
            }
            return result;
        },

        addScalar: function (mat, scalar){
            for (let i = 0; i < mat.length; i++){
                for (let j = 0; j < mat[0].length; j++){
                    mat[i][j] += scalar;
                }
            }
        },

        multiplyScalar: function(mat, scalar){
            var result = [];
            for (let i = 0; i < mat.length; i++){
                result.push([]);
                for (let j = 0; j < mat[0].length; j++){
                    result[i].push(mat[i][j] * scalar);
                }
            }
            return result;
        },

        add: function (m1, m2){
            var result = [];
            for (let i = 0; i < m1.length; i++){
                result.push([]);
                for (let j = 0; j < m1[0].length; j++){
                    result[i].push(m1[i][j] + m2[i][j]);
                }
            }
            return result;
        },
        minus: function (m1, m2){
            for (let i = 0; i < m1.length; i++){
                for (let j = 0; j < m1[0].length; j++){
                    m1[i][j] = m1[i][j] - m2[i][j];
                }
            }
        },
        multiply: function (m1, m2){
            for (let i = 0; i < m1.length; i++){
                for (let j = 0; j < m1[0].length; j++){
                    m1[i][j] = m1[i][j] * m2[i][j];
                }
            }
        },
        applyActivationFunction: function (mat, func){
            for (let i = 0; i < mat.length; i++){
                for (let j = 0; j < mat[0].length; j++){
                    mat[i][j] = sigmoid(mat[i][j]);
                }
            }
        },
        toD2: (v) => {
            var result = [];
            for (let i = 0; i < v.length; i++){
                result.push([]);
                result[i].push(v[i]);
            }
            return result;
        }
    },
    sigmoid: function(x){
        return (1/(1 + (Math.exp(-1 * x))));
    },
    d1:{
        multiply: (v1, v2)=>{
            var result = [];
            for (let i = 0; i < v1.length; i++){
                result.push(v1[i] * v2[i]);
            }
            return result;
        },
        multiplyScalar: function(v, scalar){
            var result = [];
            for (let j = 0; j < v.length; j++){
                result.push(v[j] * scalar);
            }
            return result;
        },
        addScalar: function (v, scalar){
            var result = [];
            for (let j = 0; j < v.length; j++){
                result.push(v[j] + scalar);
            }
            return result;
        },
        minus: (v1, v2) => {
            var result = [];
            for (let i = 0; i < v1.length; i++){
                result.push(v1[i] - v2[i]);
            }
            return result;
        },
        applyActivationFunction: function (v, func){
            // console.log("Antes da sigmoid -----  \n", v);
            var result = v.map(func);
            return result;
        },
        toD1: (m) => {
            var result = [];
            for (let i = 0; i < m.length; i++){
                for (let j = 0; j < 1; j++){
                    result.push(m[i][j]);
                }
            }
            return result;
        }
    }
}