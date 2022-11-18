let coxinha = prompt("Você deseja mais coxinhas?\n'S' para 'Sim' e 'N' para não.").toUpperCase()
let conta = 0

// while (coxinha === "S"){
//     conta = conta + 2.5
//     coxinha = prompt("Você deseja mais coxinhas?\n'S' para 'Sim' e 'N' para não.").toUpperCase()
// }
// console.log(conta)

while (coxinha !== "N"){
    if (coxinha === "S") {
        conta += 2.5
    } else {
        console.log("Valor incorreto. Por favor, insira 'S' ou 'N'.");
    }
    coxinha = prompt("Você deseja mais coxinhas?\n'S' para 'Sim' e 'N' para não.").toUpperCase()
}
console.log(conta)