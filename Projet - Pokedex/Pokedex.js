const pokemonCarte = document.querySelector('.card-pokemon');
const pokemonNom = document.querySelector('.pokemon-nom');
const pokemonImage = document.querySelector('.card-image');
const pokemonImageContainer = document.querySelector('.card-image-container');
const pokemonId = document.querySelector('.pokemon-id');
const pokemonType = document.querySelector('.pokemon-type');
const pokemonStats = document.querySelector('.pokemon-stats');


const typeColors = {
    électrik: "#ffc800",
    normal: "#939393",
    feu: "#c95a0a",
    eau: "#1d43c2",
    glace: "#1da9c2",
    roche: "#5e402a",
    vol: "#b4b8b8",
    plante: "#054f09",
    psy: "#964492",
    spectre: "#561d25",
    insecte: "#a2faa3",
    poison: "#795663",
    sol: "#5e402a",
    dragon: "#da627d",
    acier: "#1d8a99",
    combat: "#2f2f2f",
    defaut: "#2a1a1f"
  }

  const recherchePokemon = event => {
    event.preventDefault();
    const {value} = event.target.pokemon;
    fetch(`https://tyradex.vercel.app/api/v1/pokemon/${value.toLowerCase()}`)
    .then(data => data.json())
    .then(response => pokemonData(response));
  }

    const pokemonData = data => {
        const sprite = data.sprites.regular;
        const {stats, types} = data;
        console.log(data);

        pokemonNom.textContent = data.name.fr;
        pokemonImage.setAttribute('src', sprite);
        pokemonId.textContent = `N°${data.pokedex_id}`;

        funcPokemonTypes(types);
        funcPokemonStats(stats);
  }

  const funcPokemonTypes = types => {
  pokemonType.innerText = ``;
  types.forEach(type => {
     pokemonType.innerHTML += `<p><span>TYPE:</span> ${type.name}</p>`;
     if (typeColors[type.name.toLowerCase()]) {
      pokemonType.style.background = typeColors[type.name.toLowerCase()]
      pokemonType.innerHTML = typeSprites[types.src.image];
    }
  });
}
  const funcPokemonStats = stats => {
    pokemonStats.innerHTML = '';
    Object.keys(stats).forEach(key => {
        const statElement = document.createElement('div');
        const statElementName = document.createElement('p');
        const statElementVal = document.createElement('p');
        statElementName.textContent = key;
        statElementVal.textContent = stats[key];
        statElement.appendChild(statElementName);
        statElement.appendChild(statElementVal);
        pokemonStats.appendChild(statElement);
    });
  }

  const chargement = document.querySelector('.loader');