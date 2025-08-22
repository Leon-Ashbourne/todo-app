import deleteImg from './delete.png'; // will add later
import {addEventListener} from './index.html';

function toggleForm(target) { //toggle between hidden and visible of an element on webpage
    if(target.display === 'block') {
        target.display = 'none';
    }else {
        target.display = 'block';
    };
}

//just insert the todo list in the container.
function insertTodoList(list) { //need to adjust the code
    list.forEach((key) => {

    })
}

function todoEleList() {
    this.list = ['div', 'div', 'div', 'div', 'input', 'img'];
    return list;
}

function todoAttrList() { // required attributes as keys, and its values
    this.list = [
        {class: "todo-list-container"},
        {id: "todo-check"},
        {id: "todo-title"},
        {id: "todo-delete"},
        {type: "checkbox"},
        {src: deleteImg },
    ]
    return list;
};

function getTodo(rawData) {
    const attrList = new todoAttrList();
    const eleList = new todoEleList();
    const children = setELeAttr(eleList, attrList);
}

function setELeAttr(eleList, attrList) {
    let index = 0;
    eleList.forEach((ele) => {
        eleList[index] = document.createChild(ele);
        index++;
    })
    attrList.forEach((attr) => {
        index = 0;
        const keyList = Object.keys(attr);
        keyList.forEach((key) => {
            eleList[index].setAttribute(key, attr[key]);
        })
    })
    insertTodoList(list);
}

const projectAttr = function() { // element to add in the project category
    const list = {
        class: "prj-tab",
        "data-project": "unknown",
    }
};

function insertProject(target, name) { 
    const parent = target.parentNode();
    const child = getProject();
    if(!name) child.setAttribute(date-project, name);
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