/*
Denilson Santos tem 24 anos, pesa 74 kg
tem 1.75 de altura e seu IMC é de 24,18
Denilson Santos nasceu em 1999
*/

const nome = 'Denilson Santos';
const sobrenome = 'Silva';
const idade = 24;
const peso = 74;
const alturaEmM = 1.75;
let imc; // peso / (altura * altura)
let anoNascimento;

imc = 74 / (alturaEmM * alturaEmM);

console.log('o calculo é', imc);

anoNascimento = 2023 - idade;

console.log('O ano de nascimento do ', nome , 'é', anoNascimento);