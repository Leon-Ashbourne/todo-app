import {LocalStorage} from './localStorage';

const addTodoBtn = document.querySelector('#add-todo');
const addPrjBtn = document.querySelector('#add-project');

class Todo {
    constructor(title = 'unknown', description='Unknown', date='00-00-000', priority='0', category='default') {
        return {title, description, date, priority, category};
    }
}

// addTodoBtn.addEventListener('click', (event)=> {
//     createTodo(event.target);
// })

(function createTodo(todo) {
    const newTodo = new Todo('noooo', 'asdfdsf', 1235, 1, 'deftiii');
    // LocalStorage.setItem(newTodo);
    console.log(newTodo);
})()