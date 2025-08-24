import {LocalStorage} from './localStorage.js';
import {getTodo, getProject} from './dom.js';

function defaultTodoData() {
    return [
        {
            title: "Wake up from sleep",
            description: "I don't know",
            category: "defaultUser",
            date: new Date(),
            priority: 0,
        },
        {
            title: "Wake up from the dream",
            description: "I don't know",
            category: "defaultUser",
            date: new Date(),
            priority: 0,
        },
        {
            title: "Wake up from laziness",
            description: "I don't know",
            category: "defaultUser",
            date: new Date(),
            priority: 0,
        },
        {
            title: "Wake up to reality",
            description: "I don't know",
            category: "defaultUser",
            date: new Date(),
            priority: 0,
        },
        {
            title: "Wake up from last night",
            description: "I don't know",
            category: "defaultUser",
            date: new Date(),
            priority: 0,
        }
    ]
}
function getDefaultTodo() {
    const todo = new defaultTodoData();
    LocalStorage.storeData = todo;
    LocalStorage.setItem = 'userDefined';
    displayDefaultTodo(todo);
}

function displayDefaultTodo(todo) {
    LocalStorage.storeData = todo;
    getTodo();
}

function getDefaultProject() {
    const keys = LocalStorage.getKeys();
    const prjList = [];
    keys.forEach(key => {
        if(key !== "userDefined") prjList.push(key);
    })
    if(prjList.length) displayDefaultProject(prjList);
    displayDefaultProject(prjList);
}

function displayDefaultProject(list) {
    list.forEach( prj => {
        getProject(prj);
    })
}

export {getDefaultTodo, getDefaultProject};