const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function PokemonCard() {
  let pokemon=pokemonList[1];

  
    return <div>
             <img src={pokemon.imgSrc} alt={pokemon.name}/>
             <h1>{pokemon.name}</h1>
             <p>{pokemon.imgSrc?pokemon.imgSrc:"???"}</p>
          </div>;
    
};
  
  export default PokemonCard;