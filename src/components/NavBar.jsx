
function NavBar(props) {
let setPokemonIndex=props.setPokemonIndex;
let pokemonList=props.pokemonList;

const handleClick=(pokemon, index)=>{
  setPokemonIndex (index);

  if (pokemon.name=="pikachu"){
      alert('pika pikachu !!!');
    }
};
      
    return (
           <div>
             
            {pokemonList.map((pokemon, index) => (
                <button key={index} onClick={()=>handleClick (pokemon, index)}>{pokemon.name}</button> 
             
            ))
           }
       
        </div>
         );
  };
  
  export default NavBar;