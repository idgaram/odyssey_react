const NavBar = ({ pokemonIndex, setPokemonIndex, pokemonList }) => {
  // const handlePrevious = () => {
  //   setPokemonIndex(pokemonIndex - 1);
  // };
  // const handleNext = () => {
  //   setPokemonIndex(pokemonIndex + 1);
  // };
  const handleButton = () => {
    setPokemonIndex(index);
    index === "3" ? alert("pika pikachu !!!") : null;
  };

  return (
    <div>
      {pokemonList.map((element, index) => (
        <button
          onClick={() => setPokemonIndex(index)}
          type="button"
          key={element.name}
        >
          {element.name}
        </button>
      ))}

      {/* {pokemonIndex > 0 ? (
        <button type="button" onClick={handlePrevious}>
          Précédent
        </button>
      ) : null}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button type="button" onClick={handleNext}>
          suivant
        </button>
      ) : null} */}
    </div>
  );
};

export default NavBar;
