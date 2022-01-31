let myForm = document.getElementById('my-form');
let myField = document.getElementById('my-field');
let myList = document.getElementById('my-list');

myForm.addEventListener('submit', (e) => {
  e.preventDefault();
  creatItem(myField.value);
});

function creatItem(input) {
  let myHTML = `<li>${input}<button onclick="deleteItem(this)">Delete</button></li>`;
  myList.insertAdjacentHTML('beforeend', myHTML);
  myField.value = '';
  myField.focus();
}
function deleteItem(elementToDelete) {
  elementToDelete.parentElement.remove();
}
