const pokemonCount = 151; // Nombre total de Pokémon dans le Pokédex
var pokedex = {}; // Objet qui stocke les informations des Pokémon {1: {name, img, type, desc}, ...}

window.onload = async function() {
    for (let i = 1; i <= pokemonCount; i++) { // génère les pokémons jusqua 151
        await getPokemon(i); // attend que tous les pokémons soient générés
        
        let pokemon = document.createElement("div"); // Crée un élément div pour chaque Pokémon dans la liste
        pokemon.id = i;
        pokemon.innerText = i.toString() + ". " + pokedex[i]["name"].toUpperCase(); // {1. CHARMANDER}
        pokemon.classList.add("pokemon-name");
        pokemon.addEventListener("click", updatePokemon);
        document.getElementById("pokemon-list").append(pokemon);
        // on obtient <div id="1" class="pokemone-name">Bulbasaur</div> qui s'ajoute au html dans la liste
    }

    // Affiche la description du premier Pokémon dans la zone de description
    document.getElementById("pokemon-description").innerText = pokedex[1]["desc"];

    console.log(pokedex);
}

async function getPokemon(num) {
    let url = "https://pokeapi.co/api/v2/pokemon/" + num.toString();

    let res = await fetch(url);
    let pokemon = await res.json(); // Récupère les informations du Pokémon depuis la réponse JSON

    
    let pokemonName = pokemon["name"];
    let pokemonType = pokemon["types"];
    let pokemonImg = pokemon["sprites"]["front_default"];

    // Récupère la description du Pokémon à partir de l'API
    res = await fetch(pokemon["species"]["url"]); // recup la description dans l'api pour la descritpion
    let pokemonDesc = await res.json();
    pokemonDesc = pokemonDesc["flavor_text_entries"][16]["flavor_text"]; // on met dans la desc le numéro 16 qui est en francais

    // Ajoute les informations du Pokémon à l'objet pokedex
    pokedex[num] = {"name" : pokemonName, "img" : pokemonImg, "types" : pokemonType, "desc" : pokemonDesc};
}

function updatePokemon(){
    // Met à jour l'image du Pokémon
    document.getElementById("pokemon-img").src = pokedex[this.id]["img"];

    // Supprime les types précédents
    let typesDiv = document.getElementById("pokemon-types");
    while (typesDiv.firstChild) {
        typesDiv.firstChild.remove();
    }

    // Met à jour les types du Pokémon
    let types = pokedex[this.id]["types"];
    for (let i = 0; i < types.length; i++) {
        let type = document.createElement("span"); // créer un span s'il y a 2 type
        type.innerText = types[i]["type"]["name"].toUpperCase(); // va chercerh dans l'API le type
        type.classList.add("type-box");
        type.classList.add(types[i]["type"]["name"]); // Ajoute une classe pour le style CSS
        typesDiv.append(type);
    }

    // Met à jour la description du Pokémon
    document.getElementById("pokemon-description").innerText = pokedex[this.id]["desc"];
}