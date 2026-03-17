const usuarios = [
  { nome: "Ana", idade: 20, ativo: true, compras: [100, 50, 25] },
  { nome: "Bruno", idade: 17, ativo: false, compras: [30, 20] },
  { nome: "Carlos", idade: 32, ativo: true, compras: [200, 150, 50, 100] },
  { nome: "Diana", idade: 25, ativo: true, compras: [] },
  { nome: "Eduardo", idade: 15, ativo: false, compras: [10] }
];

// Parte 1
console.log("\n===================== PART 1\n")
console.log("Calculando o total de compra")

const SumArray = (arr) => {
    let value = 0;
    for(let val of arr)
        value += val;
    return value;
}
const GetTotalBuyUsers = (users) => {
    for(let user of users)
        user.totalBuy = SumArray(user.compras)
    return users
}
console.log(GetTotalBuyUsers(usuarios))

console.log("\n===================== PART 2\n")
console.log("Filtrando Usuarios ativos")
// Part 2

const GetActivedUsers = (users) => users.filter(x => x.ativo)
console.log(GetActivedUsers(usuarios))

console.log("\n===================== PART 3\n")
console.log("Filtrando Usuarios pela Idade")
// Part 3

const GetSortedAgeUsers = (users) => users.sort((user1, user2) => user1.idade - user2.idade)
const GetUsersFiltredByAge = (users, age) => users.filter(x => x.idade >= age)
console.log(GetUsersFiltredByAge(usuarios, 18))

console.log("\n===================== PART 4\n")
console.log("Pegando o maior comprador")
// part 4
const GetSortedTotalBuy = (users) => users.sort((user1, user2) => user1.totalBuy - user2.totalBuy)
const GetBiggestBuyerUser = (users) => GetSortedTotalBuy(users)[users.length-1];
console.log(GetBiggestBuyerUser(usuarios))

console.log("\n===================== PART 5\n")
console.log("Desafio de Coerção de Tipos")
// part 5

console.log("5" + 2); 
//"5" + 2 → "52" (concatenação: string + número vira string).

console.log("5" - 2); 
//"5" - 2 → 3 (subtração força conversão da string em número).

console.log(true + 1); 
//true + 1 → 2 (true vira 1 na operação numérica).

console.log(false == 0); 
//false == 0 → true (== faz coerção, false vira 0).

console.log(false === 0);
//false === 0 → false (=== verifica tipo e valor, tipos diferentes).

console.log("\n===================== PART 6\n")
console.log("Desafio Arrow Function vs Function")
// Part 6   

// Código 1 funciona corretamente → imprime "Maria", porque this dentro de uma função normal 
// aponta para o objeto que a chamou (pessoa).

// Código 2 não funciona → imprime undefined, porque arrow functions não têm o contexto do this.

// Comportamento de this em arrow functions → this é lexical, ou seja, depende de onde a função 
// foi definida, não de quem a chamou.

console.log("\n===================== PART 7\n")
console.log("Desafio Final - Gerar Relatorio")
// Part 7
function gerarRelatorio(){
    const GetMidAge = (users) => {
        let midAge = 0;
        for(let user of users)
            midAge += user.idade
        midAge /= users.length;
        return midAge;
    }

    const activedUsers = GetActivedUsers(usuarios);
    return {
        totalUsuarios: usuarios.length,
        usuariosAtivos: activedUsers.length,
        usuariosInativos: usuarios.length - activedUsers.length,
        mediaIdade: GetMidAge(usuarios),
        maiorComprador: GetBiggestBuyerUser(usuarios).nome
    }
}

console.log("=== Relatorio:")
console.log(gerarRelatorio());

console.log("\n===================== PART 8\n")
console.log("Desafio Extra")
// Part 8

let usersAged = GetSortedAgeUsers(usuarios);
console.log("Mais Jovem:")
console.log(usersAged[0])
console.log("Mais Velho:")
console.log(usersAged[usersAged.length-1])
const media = SumArray(usuarios.map(x => x.totalBuy))/usuarios.length
console.log(`Total Medio de Gasto: ${media}`) 