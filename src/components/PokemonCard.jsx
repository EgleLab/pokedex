
import PropTypes from "prop-types";

function PokemonCard(props) {
  console.log(props);

 
//let pokemon=props.pokemon;
const {pokemon}=props;




    return <figure>
           
             <figcaption>{pokemon.name}</figcaption>
             {pokemon.imgSrc ? (
            < img src={pokemon.imgSrc} alt={pokemon.name}/>
        ) : (
            <p>???</p>
        )}
          </figure>;
    
};

PokemonCard.propTypes={
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc:PropTypes.string.isRequired,
  }).isRequired,
    }
  
  export default PokemonCard;