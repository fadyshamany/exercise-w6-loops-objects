const pokemons = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Metapod",
  "Weedle",
  "Pikachu",
  "Pidgey"
];

// 1) Loop that prints all pokemons
function printPokemons() {
  for (let i = 0; i < pokemons.length; i++) {
    console.log(pokemons[i]);
  }
}

printPokemons(); // run it


// 2) Create a Pikachu object
let pikachu = {
  name: "Pikachu",
  element: "electricity",
  strength: 32,
  color: "yellow",
  amountOfLegs: 2
};

// 3) Console log Pikachu info
console.log(`${pikachu.name} is an ${pikachu.element} pokemon with the strength of ${pikachu.strength}`);


// 4) Add new property stillToCatch: true
pikachu.stillToCatch = true;
console.log(pikachu);


// 5) Change the strength value
pikachu.strength = 50;


// 6) Delete a property
delete pikachu.color;
console.log(pikachu);


// 7) Array with objects — add more pokemons if you want
const moreAboutPokemons = [
  {
    name: "Bulbasaur",
    element: "grass",
    strength: 13
  },
  {
    name: "Charmander",
    element: "fire",
    strength: 32
  },
  {
    name: "Squirtle",
    element: "water",
    strength: 20
  }
];


// 8) Print only the names
moreAboutPokemons.forEach(pokemon => {
  console.log(pokemon.name);
});


// 9) Print full sentences
moreAboutPokemons.forEach(pokemon => {
  console.log(`${pokemon.name} is a ${pokemon.element} pokemon with the strength of ${pokemon.strength}`);
});

