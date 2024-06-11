import styles from "./PokemonCard.module.css";

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

export default PokemonCard;
