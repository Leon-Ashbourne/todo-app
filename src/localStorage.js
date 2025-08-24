class LocalStorage {
    constructor(){
        throw Error("application denied! client doesn't has necessary permisson");
    };
    static #data;
    static setItem(key, value) {
        addItemToLocalSt(key, value);
    }
    static getItem(key) { //key- path to the item we need
        const value = getItemFromLocalSt(key);
        return value;
    }
    static get storeData() {
        return LocalStorage.#data;
    }
    static set storeData(data) {
        LocalStorage.#data = data;
    }
    static getKeys() {
         return getKeysFromLS();
    }
}

function addItemToLocalSt(key, val) {
    let tempStg = val;
    let value = localStorage.getItem(key);
    if(value) { //pushing the todo object to the array of todo objects if the category is present beforehand
        value = parseJson(value);
        pushElements(value, tempStg);
        value = stringifyJson(value);
        localStorage.setItem(key, value);
        return;
    }
    tempStg = stringifyJson(tempStg);
    localStorage.setItem(key, tempStg);
}

function pushElements(value, temp) {
    if(Object.getPrototypeOf(temp) === Array.prototype) {
        temp.forEach(todo => {
            value.push(todo);
        })
    }else {
        value.push(temp);
    }
}

function getItemFromLocalSt(key) {
    const tempStg = parseJson(localStorage.getItem(key)); // changing into an object
    return tempStg;
}

function getKeysFromLS() {
    let keys = [];
    let key = false;
    let index = 0;
    do{
        key = localStorage.key(index);
        if(key) keys.push(key);
        index++
    } while(key);
    return keys;
}

function parseJson(jsonStr) {
    return JSON.parse(jsonStr);
}

function stringifyJson(obj) {
    return JSON.stringify(obj);
};

export {LocalStorage};