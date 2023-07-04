// Récupération des éléments du DOM
let button = document.getElementById("button"); // Le bouton
let image = document.getElementById("image"); // L'image
let pokeNumber = document.getElementById("number"); // Le numéro du Pokémon
let PokeName = document.getElementById("name"); // Le nom du Pokémon

// Fonction pour changer de Pokémon
const changePokemon = async () => {
    // Génération d'un nombre aléatoire entre 1 et 151
    let randomNumber = Math.ceil(Math.random() * 150) + 1;

    // Construction de l'URL de l'API avec le numéro aléatoire
    let requestsString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;

    // Appel de l'API pour obtenir les données du Pokémon
    let data = await fetch(requestsString);
    console.log(data);

    // Conversion de la réponse en format JSON
    let response = await data.json();
    console.log(response);

    // Mise à jour de l'image, du numéro et du nom du Pokémon affichés
    image.src = response.sprites.front_default;
    pokeNumber.textContent = `#${response.id}`;
    PokeName.textContent = response.name;
}

// Appel initial de la fonction pour afficher un Pokémon au chargement de la page
changePokemon();

// Ajout d'événement pour le clic sur le bouton
button.addEventListener('click', changePokemon);