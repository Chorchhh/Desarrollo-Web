///////////////////////////////////Handle's Add Task/////////////////////////////////////////////////////////7
let = tareas;
function createTask(tarea) {
  const node = document.createElement("div");
  node.innerHTML = `<div class="marginTask">
    <input value="${tarea.title}" type="text"></input>
    <button class="deleteTask">X</button>
    </div>`;
  const myDiv = document.getElementById("tareas");
  myDiv.appendChild(node);
}
function drawTasks() {
  tareas.forEach((e) => createTask(e));
}
function handleAddTask() {
  const newDiv = document.createElement("div");
  newDiv.classList.add("marginTask");
  const newInput = document.createElement("input");
  newDiv.appendChild(newInput);
  const newDeleteButton = document.createElement("button");
  newDeleteButton.textContent = "X";
  newDeleteButton.classList.add("deleteTask");
  newDeleteButton.addEventListener("click", handleDeleteTask);
  newDiv.appendChild(newDeleteButton);
  const myDiv = document.getElementById("tareas");
  myDiv.appendChild(newDiv);
}
function handleAddTask2() {
  const newDiv2 = document.createElement("div");
  newDiv2.classList.add("marginTask");
  const newInput2 = document.createElement("input");
  newDiv2.appendChild(newInput2);
  const newDeleteButton2 = document.createElement("button");
  newDeleteButton2.textContent = "X";
  newDeleteButton2.classList.add("deleteTask");
  newDeleteButton2.addEventListener("click", handleDeleteTask);
  newDiv2.appendChild(newDeleteButton2);
  const myDiv2 = document.getElementById("proceso");
  myDiv2.appendChild(newDiv2);
}
function handleAddTask3() {
  const newDiv3 = document.createElement("div");
  newDiv3.classList.add("marginTask");
  const newInput3 = document.createElement("input");
  newDiv3.appendChild(newInput3);
  const newDeleteButton3 = document.createElement("button");
  newDeleteButton3.textContent = "X";
  newDeleteButton3.classList.add("deleteTask");
  newDeleteButton3.addEventListener("click", handleDeleteTask);
  newDiv3.appendChild(newDeleteButton3);
  const myDiv3 = document.getElementById("terminado");
  myDiv3.appendChild(newDiv3);
}

//////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////Handle Delete para las task's////////////////////////////////////////////////////////////////

function handleDeleteTask(event) {
  const taskToDelete = event.target.parentElement;
  taskToDelete.remove();
}

//////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////AddButton pero con el modal///////////////////////////////////////////////

const add = document.getElementById("addButton");
add.addEventListener("click", () => {
  taskModal.classList.add("modal--show");
});
add.addEventListener("click", handleAddTask);

const add2 = document.getElementById("addButton2");
add2.addEventListener("click", () => {
  taskModal.classList.add("modal--show");
});
add2.addEventListener("click", handleAddTask2);

const add3 = document.getElementById("addButton3");
add3.addEventListener("click", () => {
  taskModal.classList.add("modal--show");
});
add3.addEventListener("click", handleAddTask3);

//////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////Modal para la notificación////////////////////////////////////////////////////////////
const openModal = document.querySelector(".notif");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal__close");

//////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////Modal para las task's//////////////////////////////////////////////////////////////

const openTaskModal = document.querySelector(".button button");
const taskModal = document.querySelector(".task-modal");
const closeTaskDelete = document.querySelector(".task-modal .modal__close");

//////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////Delete buttons para las task's////////////////////////////////////////////////////////////

const deleteButtons = document.querySelectorAll(".deleteTask");
deleteButtons.forEach((button) => {
  button.addEventListener("click", handleDeleteTask);
});

//////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////Open y close listener modal Notificación////////////////////////////////////

openModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("modal--show");
});

closeModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("modal--show");
});

///////////////////////////////////////////////////////////////

//////////////////////////////////Open y close listener modal task's////////////////////////////////////////////////////////////////

openTaskModal.addEventListener("click", (e) => {
  e.preventDefault();
  taskModal.classList.add("modal--show");
});

closeTaskDelete.addEventListener("click", (e) => {
  e.preventDefault();
  taskModal.classList.remove("modal--show");
});

function fetchData() {
  fetch("http://localhost:3000/api/tasks", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    // body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      tareas = data;
      drawTasks();
    });
}
fetchData();

//////////////////////////////////////////////////////////////////////////////////////////////////
///////http://localhost:3000/api/task
