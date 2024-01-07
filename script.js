let addButton = document.getElementById("add");
let deleteButton = document.getElementById("delete");

const INDEXDB_NAME = "clickBD";
const INDEXDB_VERSION = 1;

let db;
let counter = 1;

addButton.addEventListener('click', () => addNote());


/**
 * Función para agregar una nota
 */
function addNote() {
  var newNote = document.createElement("div");
  newNote.className = "note";

  // Agregar la estructura interna de la nota (tools y textarea)
  newNote.innerHTML = `
      <div class="tools">
          <button class="edit"><img src="https://cdn.pixabay.com/photo/2019/04/08/20/26/pencil-4112898_1280.png" width="20px"></button>
          <button class="delete" onclick="deleteNote(this)"><img src="https://cdn-icons-png.flaticon.com/512/18/18297.png" width="20px"></button>
      </div>
      <textarea></textarea>
  `;

  // Agregar la nueva nota al cuerpo del documento
  document.body.appendChild(newNote);
}


/**
 * Función para eliminar todas las notas que haya creadas
 */
function deleteAll() {
  // Seleccionar todas las notas por su clase y eliminarlas
  var notes = document.getElementsByClassName("note");
  while (notes.length > 0) {
      notes[0].parentNode.removeChild(notes[0]);
  }
}

function deleteNote(button){
  // Obtener el elemento de la nota asociado al botón de eliminar
  var note = button.parentNode.parentNode;
            
  // Eliminar la nota del documento
  note.parentNode.removeChild(note);
}