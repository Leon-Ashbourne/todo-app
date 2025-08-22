import deleteImg from './delete.png'; // will add later
import {LocalStorage} from './localStorage.js';


function toggleForm(target) { //toggle between hidden and visible of an element on webpage
    if(target.display === 'block') {
        target.display = 'none';
    }else {
        target.display = 'block';
    };
}

function insertTodoList(todo) {
    const data = LocalStorage.storeData;
    const todoContainer = document.querySelector(".todolist-container");
    data.forEach((dataBit) => {
        todo.innerHtml = dataBit.category;
    })
}

function todoElements(list) { // gets the appending done for each element
    appendChildren(list[0], list.slice(1,4))
    appending(list.slice(1, 4), list.slice(4));
    insertTodoList(list[0]);
}

function appendChildren(parent, children) { // append children on a single parent
    children.forEach((child) => {
        parent.appendChild(child);
    })
}

function appending(parent, child) { // mulltiple parents appeniding with resepective to their child
    parent.forEach((parentEle) => {
        parentEle.appendChild(child[index]);
    })
}

function todoEleList() { // get the list of elements needed for a single todo
    this.list = ['div', 'div', 'div', 'div', 'input', 'input', 'img'];
    return list;
}

function todoAttrList() { // get the list of attrbute list requied for each html element
    this.list = [
        {class: "container-todo"},
        {id: "todo-check-container"},
        {id: "todo-title-container"},
        {id: "todo-delete-container"},
        {type: "checkbox"},
        {type: "text"},
        {src: deleteImg },
    ]
    return list;
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

// everything works perfectly till here !!!

const projectAttr = function() { // element to add in the project category
    const list = {
        class: "prj-tab",
        "data-project": "unknown",
    }
};

function insertProject(target, name) { 
    const parent = target.parentNode;
    const child = getProject();
    if(name) child.setAttribute(date-project, name);
    parent.appendChild(child)
}

function getProject() { // create project element to append to projects parent
    const attr = projectAttr();
    const child = createChild('div');
    for(let key in attr) {
        child.setAttribute(key, attr[key]);
    }
};

export {toggleForm, getTodo, insertProject};