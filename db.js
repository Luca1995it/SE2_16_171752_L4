//for storing the employees
var memoria = [];

//for getting a new id if the user has left it blanck
var tmp1 = 1;

var add = function(id, name, surname, level, salary){
    var res;
    if(id == ''){
        //case with empty id field
        id = String(tmp1++);
        memoria.push([id,name,surname,level,salary]);
        res = 1;
    } else if(find(id)!=(-1)){
        //case with just used id, overwriting of the previus data
        remove(id);
        memoria.push([id,name,surname,level,salary]);
        res = 0;
    } else {
        //case with new id
        memoria.push([id,name,surname,level,salary]);
        res = 1;
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

//export functions (if not defined here, it is private)
exports.add = add; 
exports.remove = remove;
exports.get = get;