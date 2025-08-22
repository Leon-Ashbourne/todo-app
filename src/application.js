import {LocalStorage} from "./localStorage";
import {toggleForm, insertTodoList, insertProject} from "./dom.js";

const addTodoBtn = document.querySelector('#add-todo');
const addPrjBtn = document.querySelector('#add-project');
const todoSbmtBtn = document.querySelector('#todo-submit');

class Todo {
    constructor(title = 'unknown', description='Unknown', date='00-00-000', priority='0', category='default') {
        return {title, description, date, priority, category};
    }
}

addTodoBtn.addEventListener('click', (event) => {
    toggleForm(event.target);
})

addPrjBtn.addEventListener('click', (event) => {
    toggleForm(event.target)
})

todoSbmtBtn.addEventListener('click', (event) => {
    createTodo(event.target);
})

function createTodo(todo) {
    
    const newTodo = new Todo()
    // LocalStorage.setItem(newTodo);
    console.log(newTodo);
}

// addPrjBtn.addEventListener('click', () => {
//     prjForm();
// })

// prjSbmtBtn.addEventListener('click', (event) => {
//     displayPrj(event.target.name);
// })

// navCategory.addEventListener('click', (event) => {
//     caller(event.target);
// })

function caller(target) { // a cller to get details from the localStorage by giving a path, an easier way to get them 
    const todoList = JSON.parse(LocalStorage.getItem(target.name));
    insertTodoList(todoList, target);
}


function addListener() { //adding anevent listener each time a new todo or a todo list is introduced
    const todoShow = document.querySelector('.todo');
    todoShow.forEach((target) => {
        target.addEventListener('click', (event) => {
            calcToShow(event.target.path); //should add some kind of key (path) to get the value from a localstorage easier
        })
    })
}

function calcToShow(path) {
    const todo = LocalStorage.getItem(path); //need to check whether the one we got is a single todo or a list of todos
    displayTodo(todo); //make the form not mutable with readonly attribute
}

function todoEdit(target) {
    target.addEventListener('click', (event)=> {
        event.target.removeAttribute('readonly'); //add another event listner to the submit button upon choosing edit option.
    })
}

function eventListener(target, callbackFn) { //adds an eventlistner upon the target
    if(target || callBackFn) return;
    if (Object.getPrototypeOf(target) === Array.prototype) {
        target.forEach((ele) => {
            ele.addEventListener('click', callbackFn);
        })
    }
}

function editedTodo(key, value) {
    LocalStorage.setItem(key, value); //here can be a long path like firstkey.secondkey , we are gonna access the inner key through do notation
}

function deleteTodo (key){ //I am calling the path as key
    deleteFromDOM(key);
    localStorage.removeItem(key);
}


//I need to add an event listener for delete button in dom.js to remove it from both dom and localstorage