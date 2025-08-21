import deleteImg from './delete.png'; // will add later

function toggleForm(target) { //toggle between hidden and visible of an element on webpage
    if(target.display === 'block') {
        target.display = 'none';
    }else {
        target.display = 'block';
    };
}

//need to rewrite (adding document.createChild) and some other properties
function InsertTodoList(list, target) { //need to adjust the code
    const eleList = todoEleList();
    const attrList = todoAttrList();
    eleList.forEach((ele) =>  {
        let key = attrList[i].key
        ele.key = key; //key should change each time.
    })
}

function todoEleList() {
    const list = ['div', 'div', 'div', 'div', 'input', 'img'];
    return list;
}

function todoAttrList() { // required attributes as keys, and its values
    const list = [
        {class: "todo-list-container"},
        {id: "todo-check"},
        {id: "todo-title"},
        {id: "todo-delete"},
        {type: "checkbox"},
        {src: deleteImg },
    ]
    return list;
};

const projectEle = function() { // element to add in the project category
    // const listOne = [];
};

function insertProject(target) {
    const parent = target.parentNode();
    const prj = projectEle();
    parent.appendChild(prj)
}