let varA = 'A';
let varB = 'B';
let varC = 'C';

const pVar = varA

varA = varB
varB = varC
varC = pVar

console.log(varA, varB, varC);