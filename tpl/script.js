var id = document.getElementById("id");
var name = document.getElementById("name");
var surname = document.getElementById("surname");
var level = document.getElementById("level");
var salary = document.getElementById("salary");

var idDescr = document.getElementById("idDescr");
var nameDescr = document.getElementById("nameDescr");
var surnameDescr = document.getElementById("surnameDescr");
var levelDescr = document.getElementById("levelDescr");
var salaryDescr = document.getElementById("salaryDescr");

var submitButton = document.getElementById("submitButton");

var form = document.getElementById("form");

var searchButton = document.getElementById("searchButton");
var deleteButton = document.getElementById("deleteButton");
var insertButton = document.getElementById("insertButton");

var activeSearch = false;
var activeDelete = false;
var activeInsert = false;

function hideAll(){
    idDescr.style.display = 'none';
    nameDescr.style.display = 'none';
    surnameDescr.style.display = 'none';
    levelDescr.style.display = 'none';
    salaryDescr.style.display = 'none';
    submitButton.style.display = 'none';
}

function showAll(){
    idDescr.style.display = 'block';
    nameDescr.style.display = 'block';
    surnameDescr.style.display = 'block';
    levelDescr.style.display = 'block';
    salaryDescr.style.display = 'block';
    submitButton.style.display = 'block';
}

function showOnltID(){
    idDescr.style.display = 'block';
    nameDescr.style.display = 'none';
    surnameDescr.style.display = 'none';
    levelDescr.style.display = 'none';
    salaryDescr.style.display = 'none';
    submitButton.style.display = 'block';
}

function search(){
    if(!activeSearch){
        activeSearch = true;
        activeDelete = false;
        activeInsert = false;
        searchButton.style.backgroundColor = 'blue';
        insertButton.style.backgroundColor = 'white';
        deleteButton.style.backgroundColor = 'white';
        showOnltID();
    }else{
        hideAll();
        activeSearch = false;
        searchButton.style.backgroundColor = 'white';
    }
    form.action = 'http://localhost:1337/search'; 
}

function cancel(){
    if(!activeDelete){
        activeSearch = false;
        activeDelete = true;
        activeInsert = false;
        searchButton.style.backgroundColor = 'white';
        insertButton.style.backgroundColor = 'white';
        deleteButton.style.backgroundColor = 'blue';
        showOnltID();
    }else{
        hideAll();
        activeDelete = false;
        deleteButton.style.backgroundColor = 'white';
    }
    form.action = 'http://localhost:1337/delete';
}

function insert(){
    if(!activeInsert){
        activeSearch = false;
        activeDelete = false;
        activeInsert = true;
        searchButton.style.backgroundColor = 'white';
        insertButton.style.backgroundColor = 'blue';
        deleteButton.style.backgroundColor = 'white';
        showAll();
    }else{
        hideAll();
        activeInsert = false;
        insertButton.style.backgroundColor = 'white';
    }
    form.action = 'http://localhost:1337/insert';
}

