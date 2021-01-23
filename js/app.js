'use strict';

// Selectors
const btnSubmit = document.querySelector('.submit-pokedex-input');
const pokemonData = document.querySelector('.pokemon-data');

// Event Listener
btnSubmit.addEventListener('click', getPokemonData);

// Fetch Pokemon Data

async function getPokemonData() {
  const pokedexValue = document.querySelector('.pokedex-input').value;

  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokedexValue}`
    );
    const pokemon = await response.json();
    console.log(pokemon);

    let output = `
      <ul>
        <li>${pokemon.name}</li>
        <li>${pokemon.types[0].type.name}</li>
      </ul>
    `;
    pokemonData.innerHTML = output;
  } catch (err) {
    console.log(`Looks like we have an error: ${err}`);
  }
}
