let pokemonList = [
    { name: "Bulbasaur", height: 0.7 },
    { name: "Charizard", height: 1.7 },
    { name: "Pikachu", height: 0.4 }
  ];

// Write Pokemon's name and height
  for (let i=0; i<pokemonList.length; i++){
    let pokemon = pokemonList[i];
    let output = pokemon.name + " (height: " + pokemon.height + ")";

    // finds a big Pokemon
    if (pokemonList[i].height >1){
      output += " - Wow,that's big!";
      console.log(pokemonList[i].name.height + " Wow,that's big!")
    }
    document.write("<p>" + output + "</p>");
  }
