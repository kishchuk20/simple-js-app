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
    function showDetails(pokemon){
      console.log(pokemon);
    }

    function addListItem(pokemon){
      let pokemonListElement = document.querySelector(".pokemon-list");
      let listItem = document.createElement("li");
      let button = document.createElement("button");

      button.innerText = pokemon.name;
      button.classList.add("pokemon-button");
      listItem.appendChild(button);
      pokemonListElement.appendChild(listItem);
      button.addEventListener("click", function(){
        showDetails(pokemon);
      })
    }

    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
  };
}) ()

pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
});
