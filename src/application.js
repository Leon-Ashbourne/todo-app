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
    addListener(target, (event) => {changeCurrentTab(event.target)});
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

    try { // in case the current yet to be set !!
        const tab = document.querySelector('.current-tab');
        tab.classList.remove('current-tab');
    }catch(error) {
        console.log('The developer needs patience......');
    }
    target.classList.add('current-tab');
}

document.addEventListener('DOMContentLoaded', () => {
    projectSection(); // call projectsection function to display projects
    defaultTodoSection() // display default todos
    attachEventNavTabs();
})

function attachEventNavTabs() {
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach((tab) => {
        addListener(tab, (event) => {changeCurrentTab(event.target)})
    })
}

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
function getTodoDetails(target) {
    const todoListNodes = document.querySelector(".todolist-container").children;
    const indexNumber = todoListNodes.indexOf(target);
    const details = LocalStorage.getItem(target.getAttribute('data-category'));
    todoDetails(details[indexNumber]);
}

function todoDetails(todo) { // decides what should be done with todo details that user requested
    setTodoDetails(todo);
    toggleTodo();
    toggleForm();
}

function setTodoDetails(todo) {
    const textFields = document.querySelectorAll('.input-fields');
    const keys = Object.keys(todo);
    let index = 0;
    textFields.forEach(node => {
        if(node.getAttribute("name") === keys[index]) node.innerHTML = todo[keys[index]];
        index++;
    })
}

function toggleTodo() { //toggle between edit mode and display mode
    if(todoSbmtBtn.getAttribute('class') === 'todo-submit') {
        todoSbmtBtn.setAttribute('class', 'todo-edit');
        const formEle = document.querySelector('.todo-form');
        formEle.setAttribute('readonly', '');
        return;
    }
    todoSbmtBtn.setAttribute('class', 'todo-submit');
    formData.removeAttribute('readonly');
}  

function addListener(target, callBackFn) { //adds an eventlistner upon the target
    if(target || callBackFn) return;
    if (Object.getPrototypeOf(target) === Array.prototype) {
        target.forEach((ele) => {
            ele.addEventListener('click', callBackFn);
        })
        return;
    }
    target.addEventListener('click', callBackFn);
}

// delete todo in the localStorage
function removeTodofromLS(index) {
    const currentTab = document.querySelector('.current-tab');
    const category =  currentTab.getAttribute('id');
    const data = LocalStorage.getItem(category);
    data.splice(index,1);
    LocalStorage.setItem(category, data);
}

export {addListener, getTodoDetails, removeTodofromLS};

//I need to add an event listener for delete button in dom.js to remove it from both dom and localstorage