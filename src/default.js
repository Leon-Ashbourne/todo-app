import {LocalStorage} from './localStorage.js';

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
    LocalStorage.setItem("defaultUser", todo);
}