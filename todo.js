const toDoForm=document.querySelector('.js-toDoForm'),
    toDoInput = toDoForm.querySelector('input'),
    toDoList = document.querySelector('.js-toDoList');


const TODOS_LS = 'toDos';
var toDos = [];

function filterFn(toDo){
    return toDo.id == 1

}
function deleteToDo(event){
    console.log(event.target.parentNode);
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        console.log(toDo.id , li.id);
        return toDo.id != li.id;
    });
    toDos = cleanToDos;
    console.log(cleanToDos);
    saveToDos()
}
function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));

}
function paintToDo(text){
    console.log(text);
    const li = document.createElement('ul');
    const delBtn = document.createElement('button');
    delBtn.value='X';
    delBtn.addEventListener('click',deleteToDo);

    const span = document.createElement('span');
    const newId = toDos.length+1

    span.innerText = text;

    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;

    toDoList.appendChild(li);

    const toDoObj = {
        text:text,
        id : toDos.length + 1

    };
    toDos.push(toDoObj);
    saveToDos();


}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value='';


}

function something(toDo){
    console.log(toDo.text);
}
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);

    if (loadedToDos !== null){
        console.log(loadedToDos);
        const parsedToDos = JSON.parse(loadedToDos);
        console.log(parsedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        })
    }
}
function init() {
    loadToDos();
    toDoForm.addEventListener('submit',handleSubmit);
    toDoForm
}

init();

