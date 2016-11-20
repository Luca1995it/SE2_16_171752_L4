var memoria = [];
var tmp1 = 1;

var add = function(id, name, surname, level, salary){
    var res;
    if(id == ''){
        id = String(tmp1++);
        memoria.push([id,name,surname,level,salary]);
        res = 1;
    } else if(find(id)!=(-1)){
        remove(id);
        memoria.push([id,name,surname,level,salary]);
        res = 0;
    } else {
        memoria.push([id,name,surname,level,salary]);
        res = 1;
    }
    return res;
}

var remove = function(id){
    var pos = find(id);
    if(pos!=(-1)){
        memoria.splice(pos,1);
        return 0;
    } else return 1;
}

var get = function(id){
    var pos = find(id);
    if(pos!=(-1)) return memoria[pos];
    else return undefined;
}


//funzioni locali
function find(id){
    for(i=0; i < memoria.length; i++) 
        if(memoria[i][0]==id) return i;
    return -1;
}

//export functions (if not defined here, it is private)
exports.add = add; 
exports.remove = remove;
exports.get = get;