
function NavBar(props) {
let setPokemonIndex=props.setPokemonIndex;
let pokemonList=props.pokemonList;

  const handleNextClick = () => {
    setPokemonIndex((prevIndex) => (prevIndex < pokemonList.length - 1 ? prevIndex + 1 : prevIndex));
    
  };
  
  const handlePrevClick = () => {
    setPokemonIndex((prevIndex) => (prevIndex >0 ? prevIndex - 1 : prevIndex));
    
  };
    
    return (
   
        <div>
          <button onClick={handlePrevClick}>Précédent</button>
          <button onClick={handleNextClick}>Suivant</button>
        </div>
           
    );
  }
  
  export default NavBar;