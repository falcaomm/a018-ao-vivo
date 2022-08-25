const pokemons = [
    { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
    { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
    { nome: 'Charmander', tipo: 'fogo', vida: 35 },
    { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
    { nome: 'Squirtle', tipo: 'água', vida: 45 },
    { nome: 'Psyduck', tipo: 'água', vida: 25 },
]

// parte A

const aumentaVida = (objetoPokemon) => {
    // return {
    //     nome: objetoPokemon.nome,
    //     tipo: objetoPokemon.tipo,
    //     vida: 100
    // }
    return{...objetoPokemon, vida: 100}
}
// parte b 

const pokemonsVidaCheia = pokemons.map(aumentaVida)

console.log(pokemonsVidaCheia);

const pokemonsVidaCheia2 = pokemons.map((item) => item.vida = 100)

// parte c

const pokemonsDeFogo = pokemons.filter((item) => {
    return item.tipo === 'fogo'
})

console.log(pokemonsDeFogo);