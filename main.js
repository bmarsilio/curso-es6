// // Object short syntax
// const nome = 'Bruno';
// const idade = 23;

// const usuario = {
//     nome,
//     idade
// }
// console.log(usuario);


// // Template literals
// const nome = 'Bruno';
// const idade = 23;

// console.log(`Meu nome é ${nome} e tenho ${idade} anos`);



// // REST
// // 3 pontos (resto)
// const usuario = {
//     nome: 'bruno',
//     idade: 23
// }

// const { nome, ...resto } = usuario;

// console.log(nome);
// console.log(resto);

// function soma(...params) {
//     return params.reduce((total, next) => total + next);
// }

// console.log(soma(1,2,3));


// // SPREAD
// // merge das variaveis
// const arr1 = [1,2,3];
// const arr2 = [4,5,6];

// const arr3 = [ ...arr1, ...arr2];

// console.log(arr3);


// const usuario1 = {
//     nome: 'bruno',
//     idade: 23
// }

// const usuario2 = { ...usuario1, nome: 'pedro' }
// console.log(usuario2);

// ############################################
// const usuario = {
//     nome: 'bruno',
//     endereco: {
//         cidade: 'caxias'
//     }
// }

// const { nome, endereco: { cidade } } = usuario;

// console.log(nome, cidade);


// ############################################
// const soma = (a = 1, b = 3) => a + b;

// console.log(soma());


// ############################################
// const arr = [1,3,4,5,6,7,8,9];

// const newArr = arr.map((item, index) => {

//     return item * 2;
// });

// const teste = () => ({
//     nome: 'teste'
// });

// console.log(newArr);
// console.log(teste());


// ############################################
// const arr = [1,3,4,5,6,7,8,9];

// const newArr = arr.map(function(item, index) {

//     return item * 2;
// });

// // console.log(newArr);

// const sum = arr.reduce(function(total, next) {
//     return total + next;
// });

// // console.log(sum);

// const filter = arr.filter(function(item) {
//     return item % 2 === 0;
// });

// // console.log(filter);

// const find = arr.find(function(item) {
//     return item === 4;
// });

// console.log(find);