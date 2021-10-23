function P(X, lambda){
    let factorial = 1;

    for(let i=2; i<=X; i++){ // 1,2,3,4,5,6,7,...,x
        factorial *= i;
    }

    return Math.exp(-lambda) * Math.pow(lambda, X) / factorial;
}

let L = ['0.5', '1.0', '1.5', '2.0', '2.5', '3.0'];
let poissonTable = [];
let x = 8;

for(let i=0; i<=x; i++){ 
    poissonTable.push({});
    L.forEach( lambdaValue => { poissonTable[i][lambdaValue] = P(i, lambdaValue).toFixed(4) })
}

console.table(poissonTable);
