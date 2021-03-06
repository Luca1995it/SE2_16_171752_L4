//for storing the employees
var memoria = [];

//for adding a new employee
var add = function(id, name, surname, level, salary){
    var res;
    if(id == ''){
        //case with empty id field
        id = String(getNewId());
        memoria.push([id,name,surname,level,salary]);
        res = 1;
        console.log("Registered with id: " + id);
    } else if(find(id)!=(-1)){
        //case with just used id, overwriting of the previus data
        remove(id);
        memoria.push([id,name,surname,level,salary]);
        res = 0;
        console.log("Registered with id: " + id);
    } else {
        //case with new id
        memoria.push([id,name,surname,level,salary]);
        res = 1;
        console.log("Registered with id: " + id);
    }
    return res;
}

//to remove the employee with this id. 0 if the employee was found and deleted, 1 otherwise
var remove = function(id){
    var pos = find(id);
    if(pos!=(-1)){
        memoria.splice(pos,1);
        return 0;
    } else return 1;
}

//to get the employee with this id if the employee exist, undefined otherwise
var get = function(id){
    var pos = find(id);
    if(pos!=(-1)) return memoria[pos];
    else return undefined;
}

//to find the position on an employee with this id
function find(id){
    for(i=0; i < memoria.length; i++) 
        if(memoria[i][0]==id) return i;
    return -1;
}

//for getting a new id if the user has left it blanck
function getNewId(){
    newId = 1;
    found = false;
    while(!found){
        if(!existId(newId)) found = true;
        else newId++;
    }   
    return newId;
}

//return true if the selected id has just been used
function existId(newId){
    for(i = 0; i < memoria.length; i++){
        if(newId==memoria[i][0]) return true;
    }
    return false;
}

//export functions (if not defined here, it is private)
exports.add = add; 
exports.remove = remove;
exports.get = get;