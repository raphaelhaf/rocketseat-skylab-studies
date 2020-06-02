// 3.1
const arr = [1, 2, 3, 4, 5];

/*
arr.map(function (item) {
    return item + 10
})
*/
const items = arr.map(item => item + 10);
console.log(items);

// 3.2
/*
function mostraIdade(usuario) {
    return usuario.idade;
}
mostraIdade(usuario);
*/

const user = { name: 'Raphael', age: 32};

const showAge = user => user.age;
console.log(showAge(user));

// 3.3
/*
function mostraUsuario(nome = 'User', idade = 0) {
    return { nome, idade }
}

mostraUsuario(nome, idade)
mostraUsuario(nome)
*/

const showUser = (name='Raphael', age = 32)=> ({name, age});

console.log(showUser(user.name,user.age));
console.log(showUser(user.name));

// 3.4
const promise = () => new Promise((resolve,reject)=>resolve());

