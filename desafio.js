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

const arr = [1, 2, 3, 4, 5];
const new_arr = arr.map((item) => {
    return item + 10;
});
console.log(new_arr);




// ##### FIM EXERCÍCIO 3 #####