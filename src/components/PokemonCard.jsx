import styles from "./PokemonCard.module.css";
import PropTypes from "prop-types";

const PokemonCard = ({ pokemon }) => {
  return (
    <figure className={styles.card}>
      {pokemon.imgSrc ? (
        <img className={styles.cardImg} src={pokemon.imgSrc} alt="" />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};

export default PokemonCard;
