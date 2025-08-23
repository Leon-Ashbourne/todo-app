import {LocalStorage} from "./localStorage";
import {toggleForm, getTodo, getProject} from "./dom.js";

const addTodoBtn = document.querySelector('#add-todo');
const addPrjBtn = document.querySelector('#add-project');
const todoSbmtBtn = document.querySelector('#todo-submit');
const prjSbmtBtn = document.querySelector('#prj-submit-btn');

/** todo code from adding to submitting the form */
class Todo {};

addTodoBtn.addEventListener('click', (event) => {
    toggleForm(event.target);
})

todoSbmtBtn.addEventListener('click', (event) => {
    formData(event.target);
    postFormSubmit(event.target);
})

function formData(target) { // data from the form element
    const todoData = target.parentNode.querySelectorAll('.todo');
    const data = new Todo();
    todoData.forEach((ele) => {
        let name = ele.getAttribute('name');
        let value = ele.value;
        if(!value) value = "unknowm";
        data[name] = value;
    })
    LocalStgMedium(data);
}

function postFormSubmit(target) { // practices to do after submitting form
    toggleForm(target);
}

function LocalStgMedium(data) {
    const key = data.category; // we are using the category as the key for easier access (this is to set a todo under a category)
    LocalStorage.setItem(key, data);
    if(checkCurrentTab(key)) todoFromLocalStg(key);
}

function checkCurrentTab(category) { //checks which page the user is viewing
    const tab = document.querySelector('.current-tab');
    if(category === tab.getAttribute("data-tab")) return true;
    return false;
}

function changeCurrentTab(target) { // change the current to the user selected and remove the class name from the previous
    const tab = document.querySelector('.current-tab');
    tab.classList.remove('current-tab');
    target.classList.add('current-tab');
}

document.addEventListener('DOMContentLoaded', () => {
    projectSection(); // call projectsection function to display projects
    defaultTodoSection() // display default todos
})

function todoFromLocalStg(category) { // a caller to get details to append them
    const todoList = JSON.parse(LocalStorage.getItem(category));
    LocalStorage.storeData = todoList;
    getTodo();
}

/*project code related frrom adding to submitting it */ 
addPrjBtn.addEventListener('click', (event) => {
    toggleForm(event.target);
})

prjSbmtBtn.addEventListener('click', (event) => {
    getProject(event.target.value);
    postFormSubmit(prjSbmtBtn.parentNode);
})

/* todo code from displaying to editing and submiting it */
function todoEdit(target) {
    target.addEventListener('click', (event)=> {
        event.target.removeAttribute('readonly'); //add another event listner to the submit button upon choosing edit option.
    })
}

// function eventListener(target, callbackFn) { //adds an eventlistner upon the target
//     if(target || callBackFn) return;
//     if (Object.getPrototypeOf(target) === Array.prototype) {
//         target.forEach((ele) => {
//             ele.addEventListener('click', callbackFn);
//         })
//     }
// }

function editedTodo(key, value) {
    LocalStorage.setItem(key, value); //here can be a long path like firstkey.secondkey , we are gonna access the inner key through do notation
}

function deleteTodo (key){ //I am calling the path as key
    deleteFromDOM(key);
    localStorage.removeItem(key);
}


export {addListener};

//I need to add an event listener for delete button in dom.js to remove it from both dom and localstorage