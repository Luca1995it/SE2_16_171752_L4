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
    showOnltID();
}

function cancel(){
    showOnltID();
}

function insert(){
    showAll();
}
