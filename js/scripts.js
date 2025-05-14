let pokemonRepository = (function () {
  let pokemonList = [
    { name: "Bulbasaur", height: 0.7 },
    { name: "Charizard", height: 1.7 },
    { name: "Pikachu", height: 0.4 },
    { name: "Charmander", height: 0.6 },
    { name: "Golbat", height: 1.6 },
    { name: "Alakazam", height: 1.5 },
  ];
    function add(pokemon) {
      if (
        typeof pokemon === "object" &&
        "name" in pokemon &&
        "height" in pokemon &&
        Object.keys(pokemon).length === 2
      ) {
      pokemonList.push(pokemon);
    } 
    }

   function getAll(){
      return pokemonList;
    }
    return {
      add: add,
      getAll: getAll
  };
}) ()

pokemonRepository.getAll().forEach(function(pokemon){
  let output = pokemon.name + "(height: " + pokemon.height + ")";
  if (pokemon.height > 1.5) {
    output += " - Wow, that's big!";
  }

  document.write("<p>" + output + "</p>");
});
