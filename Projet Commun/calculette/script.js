// Sélectionner les éléments HTML
const display = document.getElementById('display');
const buttons = Array.from(document.querySelectorAll('button'));
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');

// Gérer les clics sur les boutons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    display.value += button.textContent;
  });
});

// Effacer l'écran
clearButton.addEventListener('click', () => {
  display.value = '';
});

// Évaluer l'expression
equalsButton.addEventListener('click', () => {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = 'Erreur';
  }
});
