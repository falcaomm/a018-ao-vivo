// // multiplicação
const arrayNumeros = [1, 2, 3, 4]

// const multiplicaPor3 = (array) => {
//   const arrayMultiplicado = []
//   for (let numero of array) {
//     arrayMultiplicado.push(numero * 3)
//   }
//   return arrayMultiplicado
// }

// console.log(multiplicaPor3(arrayNumeros));

// // pares
// const retornaPares = (array) => {
//   const arrayPares = []
//   for (let numero of array) {
//     if (numero % 2 === 0)
//       arrayPares.push(numero)
//   }
//   return arrayPares
// }

// console.log(retornaPares(arrayNumeros));

// // criando a callback - recebe dois parametros um array e uma funcao
// const funcaoImprimir = (array, callback) => {
//   const resposta = callback(array)
//   console.log(resposta);
// }

// // chama callback | chama o array | chama a funcao
// funcaoImprimir(arrayNumeros, multiplicaPor3)
// funcaoImprimir(arrayNumeros, retornaPares)

// MAP() - altera coisas no array 

const multiplicaPor3MAP = arrayNumeros.map((item, indice, array)=>{
  return item * 3
})

console.log(multiplicaPor3MAP);

// FILTER()- filtra coisa no array 

const retornaParesFilter = arrayNumeros.filter((item, indice, array)=>{
  return item % 2 === 0
})

console.log(retornaParesFilter);








// const pokemons = [
//   { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
//   { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
//   { nome: 'Charmander', tipo: 'fogo', vida: 35 },
//   { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
//   { nome: 'Squirtle', tipo: 'água', vida: 45 },
//   { nome: 'Psyduck', tipo: 'água', vida: 25 },
// ]