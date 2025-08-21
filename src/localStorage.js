class LocalStorage {
    setItem(key, value) {
        addItemToLocalSt(key, value);
    }
    getItem(key) { //key- path to the item we need
        getItemFromLocalSt(key);
    }
}

function addItemToLocalSt(key, val) {
    const tempStg = stringifyJson(val); // val is an object (todo). change it into a json string 
    localStorage.setItem(key, val);
}

function getItemFromLocalSt(key) {
    const tempStg = parseJson(localStorage.getItem(key)); // changing into an object
    return tempStg;
}

function parseJson(jsonStr) {
    return JSON.parse(jsonStr);
}

function stringifyJson(obj) {
    return JSON.stringify(obj);
};

export {LocalStorage};