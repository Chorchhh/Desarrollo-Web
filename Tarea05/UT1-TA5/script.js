function handleAddElement(){
    const newLi = document.createElement("li");
    const newInput = document.createElement("input");
    newLi.appendChild(newInput);
    const myDiv = document.getElementById("tareas");
    myDiv.appendChild(newLi);
}
function handleAddElement2(){
    const newLi2 = document.createElement("li");
    const newInput2 = document.createElement("input");
    newLi2.appendChild(newInput2);
    const myDiv2 = document.getElementById("proceso");
    myDiv2.appendChild(newLi2);
}
function handleAddElement3(){
    const newLi3 = document.createElement("li");
    const newInput3 = document.createElement("input");
    newLi3.appendChild(newInput3);
    const myDiv3 = document.getElementById("terminado");
    myDiv3.appendChild(newLi3);
}


const add = document.getElementById('addButton');
add.addEventListener('click', handleAddElement);

const add2 = document.getElementById('addButton2');
add2.addEventListener('click', handleAddElement2);

const add3 = document.getElementById('addButton3');
add3.addEventListener('click', handleAddElement3);
