import {LocalStorage} from "./localStorage";
import {toggleForm, getTodo, insertProject} from "./dom.js";

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
    toggleForm(event.target);
})

todoSbmtBtn.addEventListener('click', (event) => {
    formData(event.target);
})

function formData(target) { // data from the form element
    const todoData = target.parentNode.querySelectorAll('.todo');
    const data = {};
    todoData.forEach((ele) => {
        let name = ele.getAttribute('name');
        let value = ele.value;
        if(!value) value = "unknowm";
        data[name] = value;
    })
    createTodoObject(data);
}

function createTodoObject(data) {
    const newTodo = new Todo(data);
    const key = data.category; // we are using the category as the kay for easier access
    LocalStorage.setItem(key, data);
    if(checkCurrentTab(key)) caller(key);
}

function checkCurrentTab(category) { //checks which page the user is viewing
    const tab = document.querySelector('.current-tab');
    if(category === tab.getAttribute("data-tab")) return true;
    return false;
}

function changeCurrentTab(target) { // change the curren to the user selected and remove the class name from the previous
    const tab = document.querySelector('.current-tab');
    tab.classList.remove('current-tab');
    target.classList.add('current-tab');
}

function caller(category) { // a caller to get details from the localStorage by giving the key (key is nothing but the category name)
    const todoList = JSON.parse(LocalStorage.getItem(category));
    getTodo(todoList);
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

function addListener(target) { //adding anevent listener each time a new todo or a todo list is introduced
        target.addEventListener('click', (event) => {
            calcToShow(target.key); //should add some kind of key (path) to get the value from a localstorage easier
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


export {addListener};

//I need to add an event listener for delete button in dom.js to remove it from both dom and localstorage