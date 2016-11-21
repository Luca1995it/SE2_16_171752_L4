//getting links to html objects
var id = document.getElementById("id");
var nome = document.getElementById("nome");
var surname = document.getElementById("surname");
var level = document.getElementById("level");
var salary = document.getElementById("salary");

var idDescr = document.getElementById("idDescr");
var nomeDescr = document.getElementById("nomeDescr");
var surnameDescr = document.getElementById("surnameDescr");
var levelDescr = document.getElementById("levelDescr");
var salaryDescr = document.getElementById("salaryDescr");

var submitButton = document.getElementById("submitButton");

var form = document.getElementById("form");

var searchButton = document.getElementById("searchButton");
var deleteButton = document.getElementById("deleteButton");
var insertButton = document.getElementById("insertButton");

var message = document.getElementById("message");


//to remember if the user is using the search, delete or insert function and for showing him the right form-item
var activeSearch = false;
var activeDelete = false;
var activeInsert = false;

//base hex color for blue
var color_blue = '#00abff';

//it hide the all form field and the sumbit-button
function hideAll(){
    idDescr.style.display = 'none';
    nomeDescr.style.display = 'none';
    surnameDescr.style.display = 'none';
    levelDescr.style.display = 'none';
    salaryDescr.style.display = 'none';
    submitButton.style.display = 'none';
}

//it shows the all form field and the sumbit-button
function showAll(){
    idDescr.style.display = 'block';
    nomeDescr.style.display = 'block';
    surnameDescr.style.display = 'block';
    levelDescr.style.display = 'block';
    salaryDescr.style.display = 'block';
    submitButton.style.display = 'block';
}

//it shows only the id field and the sumbit-button
function showOnltID(){
    idDescr.style.display = 'block';
    nomeDescr.style.display = 'none';
    surnameDescr.style.display = 'none';
    levelDescr.style.display = 'none';
    salaryDescr.style.display = 'none';
    submitButton.style.display = 'block';
}

//it reset the form field content to the empty string ''
function reset(){
    id.value = '';
    nome.value = '';
    surname.value = '';
    level.value = '';
    salary.value = '';
}

//this function is clicked when user clicks on Search button. 
function search(){
    //resetting error-message
    message.innerHTML = '';
    if(!activeSearch){
        //if the user was not in search mode ...
        //setting to search mode
        activeSearch = true;
        activeDelete = false;
        activeInsert = false;
        
        //coloring the search button with blue, the other with white
        searchButton.style.backgroundColor = color_blue;
        insertButton.style.backgroundColor = 'white';
        deleteButton.style.backgroundColor = 'white';
        
        //showing id and submit button for search operation
        showOnltID();
    }else{
        //if the user was just in search mode ...
        hideAll();
        activeSearch = false;
        searchButton.style.backgroundColor = 'white';
    }
    //setting the form action to /search
    form.action = 'http://localhost:1337/search'; 
}

//this function is clicked when user clicks on Delete button.
function cancel(){
    //resetting error-message
    message.innerHTML = '';
    if(!activeDelete){
        //if the user was not in delete mode ...
        //setting to delete mode
        activeSearch = false;
        activeDelete = true;
        activeInsert = false;
        
        //coloring the delete button with blue, the other with white
        searchButton.style.backgroundColor = 'white';
        insertButton.style.backgroundColor = 'white';
        deleteButton.style.backgroundColor = color_blue;
        
        //showing id and submit button for delete operation
        showOnltID();
    }else{
        //if the user was just in delete mode ...
        hideAll();
        activeDelete = false;
        deleteButton.style.backgroundColor = 'white';
    }
    //setting the form action to /delete
    form.action = 'http://localhost:1337/delete';
}

//this function is clicked when user clicks on Insert button.
function insert(){
    //resetting error-message
    message.innerHTML = '';
    if(!activeInsert){
        //if the user was not in insert mode ...
        //setting to insert mode
        activeSearch = false;
        activeDelete = false;
        activeInsert = true;
        
        //coloring the insert button with blue, the other with white
        searchButton.style.backgroundColor = 'white';
        insertButton.style.backgroundColor = color_blue;
        deleteButton.style.backgroundColor = 'white';
        
        //showing all for insert operation
        showAll();
        //resetting the input field
        reset();
    }else{
        //if the user was just in insert mode ...
        hideAll();
        activeInsert = false;
        insertButton.style.backgroundColor = 'white';
    }
    //setting the form action to /insert
    form.action = 'http://localhost:1337/insert';
}

//called when the user clicks on go to send the form
function send(){
    
    if(activeInsert){
        //if the user was in Insert Mode
        //controlling the correct form of the data inserted in the input's field
        var check = true;
        
        //pattern for generic number with 0 or more digits
        var patt = /^[0-9]*$/;
        
        //testing the pattern on the id field
        if(!patt.test(id.value)) check = false;
        
        //pattern for generic number with at least one digit
        patt = /^[0-9]+$/;
        
        //testing the pattern on level and salary
        if(!patt.test(level.value)) check = false;
        if(!patt.test(salary.value)) check = false;
        
        //pattern for generic alphabetic strings
        patt = /^[A-z]+$/;
        
        //testing pattern on name and surname
        if(!patt.test(nome.value)) check = false;
        if(!patt.test(surname.value)) check = false;       
        
        //if all controls where successfully submit the form, else show an error-message
        if(check) form.submit();
        else message.innerHTML = "Incorrect input data";
        
    } else if(activeDelete || activeSearch){
        //checking if the id field is in the right form
        var patt = /^[0-9]*$/;
        
        //if the control where successfully submit the form, else show an error-message
        if(patt.test(id.value)) form.submit();
        else message.innerHTML = "Incorrect input data";
    }
}