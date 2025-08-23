import deleteImg from './delete.png'; // will add later
import {LocalStorage} from './localStorage.js';
import {addListener, getTodoDetails, removeTodofromLS} from './application.js';


function toggleForm(target) { //toggle between hidden and visible of an element on webpage
    if(target.display === 'block') {
        target.display = 'none';
    }else {
        target.display = 'block';
    };
}

function insertTodoList(todo) { //display todo list on the webpage
    const data = LocalStorage.storeData;
    const todoContainer = document.querySelector(".todolist-container");

    todoContainer.innerHTML = '';
    data.forEach((dataBit) => {
        const children = todo.children;
        const eventEle = [todo, children[2].firstChild];
        
        children[2].innerHTML = dataBit['title'];
        setEventListeners(eventEle);
        todoContainer.appendChild(todo);
    })
}

function setEventListeners(eventList) {
    addListener(eventList[0], callBackForTodo())
    addListener(eventList[1], callBackForDelete());
}
function callBackForDelete() {
    return (event) => {
        deleteTodo(event.target);
    }
}

function callBackForTodo() {
    return (event) => {
        getTodoDetails(event.target);
    }
}

function todoElements(list) { // gets the appending done for each element
    appendChildren(list[0], list.slice(1,4))
    appending(list.slice(1, 2).push(list[3]), list.slice(4));
    setTodoTitle(list[2]);
    insertTodoList(list[0]);
}

function appendChildren(parent, children) { // append children on a single parent
    children.forEach((child) => {
        parent.appendChild(child);
    })
}

function appending(parent, child) { // mulltiple parents appeniding with resepective to their child
    let index = 0;
    parent.forEach((parentEle) => {
        parentEle.appendChild(child[index]);
        index++;
    })
}

function todoEleList() { // get the list of elements needed for a single todo
    this.list = ['div', 'div', 'div', 'div', 'input', 'img'];
    return this.list;
}

function todoAttrList() { // get the list of attrbute list requied for each html element
    this.list = [
        {class: "container-todo"},
        {id: "todo-check-container"},
        {id: "todo-title-container"},
        {id: "todo-delete-container"},
        {type: "checkbox"},
        {src: deleteImg },
    ]
    return this.list;
};

function getTodo() { // the mediator between the creation of attr list, element list and attaching those attributes with respective their elements
    const attrList = new todoAttrList();
    const eleList = new todoEleList();
    setELeAttr(eleList, attrList);
}

function setELeAttr(eleList, attrList) { // set attributes to their respective elements
    let index = 0;
    eleList.forEach((ele) => {
        eleList[index] = document.createElement(ele);
        index++;
    })
    index = 0;
    attrList.forEach((attrs) => {
        const keyList = Object.keys(attrs);
        keyList.forEach((key) => {
            eleList[index].setAttribute(key, attrs[key]);
            index++;
        })
    })
    todoElements(eleList);
}

/* project code */
function getProject(category) { // decide what you should do with the project data you got
    categoryName.setCategory(category);
    createPrjElement() //for now just call createELement for the category navTab
};

const categoryName = (function categoryName() { // track the category name each time a new category is created;
    let categoryName = "unknown";
    function setCategory(name) {
        categoryName = name;
    }
    function getCategory() {
        return categoryName;
    }
    return {setCategory, getCategory};
})()

function createPrjElement() { // create the element and its attribute required for the project tag in the html
    const attr = new projectAttr();
    const child = document.createElement('div');
    setPrjElements(attr, child);
}

function setPrjElements(attrObjList, child) { //set project element with its attributes
    for(let key in attrObjList) {
        child.setAttribute(key, attrObjList[key]);
    }
    const category = categoryName.getCategory();
    if(category) child.setAttribute('data-category', categoryName);
    insertProject(child);
}

function insertProject(child) { //append the project element to the project section
    const projectContainer = document.querySelector('.project-section');
    projectContainer.appendChild(child);
}

function projectAttr() { // attributes to add in the project element
    this.list = {
        class: "nav-tab",
        "data-project": "unknown",
    }
    return this.list;
};

// delete todo from dom
function deleteTodo(target) {
    const parent = target.parentNode;
    const children = parent.children;
    const index = children.indexOf(target);
    parent.removeChild(target);
    removeTodofromLS(index);
}


export {toggleForm, getTodo, getProject};