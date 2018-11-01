"use strict";

// ##### EXERCÍCIO 1 #####
// class User {
//     constructor(email, password) {
//         this.email = email;
//         this.password = password
//     }
//     isAdmin() {
//         return this.admin ? this.admin : false;
//     }
// }
// class Admin extends User{
//     constructor() {
//         super();
//         this.admin = true;
//     }
// }
// const User1 = new User('email@teste.com', 'senha123');
// const Adm1 = new Admin('email@teste.com', 'senha123');
// console.log(User1.isAdmin()) // false
// console.log(Adm1.isAdmin()) // true
// ##### FIM EXERCÍCIO 1 #####
// ##### EXERCÍCIO 2 #####
// const users = [
//     { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
//     { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
//     { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
// ];
// const users_map = users.map((item, index) => {
//     return item.idade;
// });
// console.log(users_map);
// const users_filter = users.filter((item) => {
//     return item.idade > 18;
// });
// console.log(users_filter);
// const users_find = users.find((item) => {
//     return item.empresa == 'Google';
// });
// console.log(users_find);
// const new_users_map = users.map((item, index) => {
//     item.idade = item.idade * 2;
//     return item;
// });
// const new_users_filter = users.filter((item) => {
//     return item.idade < 50;
// });
// console.log(new_users_filter)
// ##### FIM EXERCÍCIO 2 #####
// ##### EXERCÍCIO 3 #####
// 3.1
// const arr = [1, 2, 3, 4, 5];
// arr.map(function(item) {
//     return item + 10;
// });
// const arr = [1, 2, 3, 4, 5];
// const new_arr = arr.map(item => item + 10);
// console.log(new_arr);
// // 3.2
// // Dica: Utilize uma constante pra function
// // const usuario = { nome: 'Diego', idade: 23 };
// // function mostraIdade(usuario) {
// //     return usuario.idade;
// // }
// // mostraIdade(usuario);
// const usuario = { nome: 'Diego', idade: 23 };
// const mostraIdade = (usuario) => {
//     return usuario.idade;
// }
// console.log(mostraIdade(usuario));
// // 3.3
// // Dica: Utilize uma constante pra function
// const nome = "Diego";
// const idade = 23;
// const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });
// console.log(mostraUsuario(nome, idade));
// console.log(mostraUsuario(nome));
// // 3.4
// const promise = () => {
//     return new Promise(function(resolve, reject) {
//         return resolve();
//     })
// }
// ##### FIM EXERCÍCIO 3 #####
// ##### EXERCÍCIO 4 #####
// const empresa = {
//     nome: 'Rocketseat',
//     endereco: {
//         cidade: 'Rio do Sul',
//         estado: 'SC',
//     }
// };
// const { nome, endereco: {cidade}, endereco: {estado} } = empresa;
// console.log(nome); // Rocketseat
// console.log(cidade); // Rio do Sul
// console.log(estado); // SC
// function mostraInfo(usuario) {
//     return `${usuario.nome} tem ${usuario.idade} anos.`;
// }
// mostraInfo({ nome: 'Diego', idade: 23 })
// function mostraInfo( { nome, idade } ) {
//     return `${nome} tem ${idade} anos.`;
// }
// console.log(mostraInfo({ nome: 'Diego', idade: 23 }));
// ##### FIM EXERCÍCIO 4 #####
// ##### EXERCÍCIO 5 #####
// const arr = [1, 2, 3, 4, 5, 6];
// const [ x, ...y ] = arr;
// console.log(x); // 1
// console.log(y); // [2, 3, 4, 5, 6]
// const soma = (...params) => {
//     return params.reduce((total, next) => total + next);
// };
// console.log(soma(1, 2, 3, 4, 5, 6)); // 21
// console.log(soma(1, 2)); // 3
// const usuario = {
//     nome: 'Diego',
//     idade: 23,
//     endereco: {
//         cidade: 'Rio do Sul',
//         uf: 'SC',
//         pais: 'Brasil',
//     }
// };
// const usuario2 = { ...usuario, nome: 'Gabriel' };
// console.log(usuario2);
// const usuario3 = { ...usuario, endereco: { cidade: 'Lontras' } };
// console.log(usuario3);
// ##### FIM EXERCÍCIO 5 #####
// ##### EXERCÍCIO 6 #####
// const usuario = 'Diego';
// const idade = 23;
// console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');
// const usuario = 'Diego';
// const idade = 23;
// console.log(`O usuário ${usuario} possui ${idade} anos`);
// ##### FIM EXERCÍCIO 6 #####
// ##### EXERCÍCIO 7 #####
// const nome = 'Diego';
// const idade = 23;
// const usuario = {
//     nome: nome,
//     idade: idade,
//     cidade: 'Rio do Sul',
// };
var nome = 'Diego';
var idade = 23;
var usuario = {
  nome: nome,
  idade: idade,
  cidade: 'Rio do Sul'
}; // ##### FIM EXERCÍCIO 7 #####
