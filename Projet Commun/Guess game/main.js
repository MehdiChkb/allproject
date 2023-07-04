function guessNumber() {
    let playerGuess;
    const numberToGuess = Math.ceil(Math.random() *10);

    prompt("Devinez le nobre entre 1 et 10 inclus");

    while(playerGuess != numberToGuess){
        playerGuess = prompt("Echec ! Devinez le nombre entre 1 et 10 inclus");
    }

    alert(`Vous avez trouvé le nombre qui était ${numberToGuess} !`);
}

guessNumber();