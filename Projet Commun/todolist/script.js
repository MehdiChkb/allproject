// Sélectionner les éléments HTML
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Créer un tableau pour stocker les tâches
let tasks = [];

// Fonction pour afficher les tâches
function displayTasks() {
  // Effacer le contenu précédent de la liste
  taskList.innerHTML = '';

  // Pour chaque tâche dans le tableau des tâches
  tasks.forEach(task => {
    // Créer un nouvel élément de liste (li)
    const li = document.createElement('li');

    // Définir le texte de l'élément de liste avec la tâche actuelle
    li.textContent = task;

    // Ajouter l'élément de liste à la liste des tâches
    taskList.appendChild(li);
  });
}

// Ajouter un écouteur d'événements pour ajouter de nouvelles tâches
taskForm.addEventListener('submit', e => {
  // Empêcher le rechargement de la page
  e.preventDefault();

  // Récupérer la valeur de la tâche à partir du champ de saisie
  const task = taskInput.value.trim();

  // Si la tâche n'est pas vide
  if (task !== '') {
    // Ajouter la tâche au tableau des tâches
    tasks.push(task);

    // Appeler la fonction pour afficher les tâches
    displayTasks();

    // Réinitialiser la valeur du champ de saisie
    taskInput.value = '';
  }
});