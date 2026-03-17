const pedidos = [
  { id: 1, cliente: "Ana", total: 120, status: "aprovado" },
  { id: 2, cliente: "Bruno", total: 80, status: "pendente" },
  { id: 3, cliente: "Ana", total: 200, status: "aprovado" },
  { id: 4, cliente: "Carlos", total: 50, status: "cancelado" },
  { id: 5, cliente: "Bruno", total: 150, status: "aprovado" }
];

console.log("\n=====================\n")
console.log("Manipulação Básica (map e filter)")

const pedidosAPV = pedidos.filter(x => x.status === "aprovado")
const pedidosNames = pedidosAPV.map(x => x.cliente)

console.log("=== Pedidos APV")
console.log(pedidosAPV)
console.log(pedidosNames)

console.log("\n=====================\n")
console.log("Agregação de Dados (reduce)")

const SumArray = (arr) => {
    let value = 0;
    for(let val of arr)
        value += val;
    return value;
}

const totalDeVendas = SumArray(pedidosAPV.map(x => x.total))
console.log(totalDeVendas)

console.log("\n=====================\n")
console.log("Hash Table (Agrupamento por Cliente)")

const HashClientes = pedidos.reduce((acc, pedido) => {
    (acc[pedido.cliente] ??= []).push(pedido)
    return acc;
}, {})

console.log(HashClientes)

console.log("\n=====================\n")
console.log("Classe (Modelagem)")

class Pedido {
    constructor(id, cliente, total, status)
    {
        this.id = id;
        this.cliente = cliente;
        this.total = total;
        this.status = status;
    }

    isAprovado() {
        return this.status === "aprovado"
    }
}

const pedidosObj = pedidos.map(x => new Pedido(x.id, x.cliente, x.total, x.status))
console.log(pedidosObj)

console.log("\n=====================\n")
console.log("Programação Funcional")

const calcularTotalCliente = (pedidos, nomeCliente) => {
    return pedidos.reduce((acc, pedido) => {

        if (pedido.cliente === nomeCliente)
            acc += pedido.total

        return acc;
    }, 0)
}
console.log("Bruno:")
console.log(calcularTotalCliente(pedidos, "Bruno"))

console.log("\n=====================\n")
console.log("Desafio com map + filter + reduce")

const valoresDesafio = pedidosAPV.reduce((acc, pedido) => {
    if (!acc[pedido.cliente])
        acc[pedido.cliente] = { cliente: pedido.cliente, total: pedido.total }
    else
        acc[pedido.cliente].total += pedido.total;

    return acc;
}, {})
console.log(valoresDesafio)

console.log("\n=====================\n")
console.log("var, let e const (Análise)")

//for (var i = 0; i < 3; i++) {
//  setTimeout(() => {
//    console.log(i);
//  }, 100);
//}
// 1) 3 printado 3 vezes.

//for (let i = 0; i < 3; i++) {
//  setTimeout(() => {
//    console.log(i);
//  }, 100);
//}

// 2) 0,1,2 
// 3) o var e por função ou seja global o estado dele enquanto let e local o estado.

console.log("\n=====================\n")
console.log("Desafio Extra")

const pedidosSort = pedidos.sort((a, b) => b.total - a.total)
console.log(pedidosSort[0])
console.log(JSON.stringify(pedidosSort[0]))