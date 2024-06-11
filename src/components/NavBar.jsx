const NavBar = ({ pokemonIndex, setPokemonIndex, pokemonList }) => {
  const handlePrevious = () => {
    setPokemonIndex(pokemonIndex - 1);
  };
  const handleNext = () => {
    setPokemonIndex(pokemonIndex + 1);
  };

  console.log(pokemonIndex);
  return (
    <div>
      {pokemonIndex > 0 ? (
        <button type="button" onClick={handlePrevious}>
          Précédent
        </button>
      ) : null}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button type="button" onClick={handleNext}>
          suivant
        </button>
      ) : null}
    </div>
  );
};

export default NavBar;
