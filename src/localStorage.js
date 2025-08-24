class LocalStorage {
    constructor(){
        throw Error("application denied! client doesn't has necessary permisson");
    };
    static #data;
    setItem(key, value) {
        addItemToLocalSt(key, value);
    }
    getItem(key) { //key- path to the item we need
        getItemFromLocalSt(key);
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
    if(Object.getPrototypeOf(val) === Array.prototype) {
        tempStg = stringifyJson(val) // data is alrady in an array;
    }else {
        tempStg = stringifyJson([val]); // val is an object (todo). change it into a json string 
    }
    let value = localStorage.getItem(key);
    if(value) { //pushing the todo object to the array of todo objects if the category is present beforehand
        value = parseJson(value);
        value.push(tempStg);
        value = stringifyJson(value);
        localStorage.setItem(key, value);
        return;
    }
    localStorage.setItem(key, tempStg);
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