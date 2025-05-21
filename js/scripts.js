let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function add(pokemon) {
      if (
        typeof pokemon === "object" &&
        "name" in pokemon &&
        "detailsUrl" in pokemon
      ) {
      pokemonList.push(pokemon);
    } else{
      console.log("pokemon is not correct");
    }
    }

   function getAll(){
      return pokemonList;
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

    function loadList() {
      showLoadingMessage();
      return fetch(apiUrl).then(function (response){
        return response.json();
      }).then(function(json) {
        json.results.forEach(function(item){
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
          console.log(pokemon);
        });
        hideLoadingMessage();
      }).catch(function(e) {
        hideLoadingMessage();
        console.error(e);
      })
    }

    function loadDetails(item){
      showLoadingMessage();
      let url = item.detailsUrl;
      return fetch(url).then(function (response){
        return response.json();
      }).then(function(details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
        hideLoadingMessage();
      }).catch(function(e) {
        hideLoadingMessage();
        console.error(e);
      });
    }

    function showDetails(pokemon) {
      pokemonRepository.loadDetails(pokemon).then(function () {
        console.log(pokemon);
      });
    }

    function showLoadingMessage() {
      let message = document.createElement('p');
      message.innerText = 'Loading';
      message.id = 'liading-message';
      document.body.appendChild(message);
    }
function hideLoadingMessage() {
  let message = document.getElementById('loading-message');
  if (message) {
    message.remove();
  }
}
    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      loadList: loadList,
      loadDetails: loadDetails,
      showDetails: showDetails
  };
}) ();
console.log(pokemonRepository.getAll());
pokemonRepository.loadList().then(function(){

pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
});
});

