//library for a general purpose javascript web-server
var express = require('express');

//library for using template
var bind = require('bind');

//my javascript file with "database" function
var db = require('./db.js');

//instantiate express
var app = express(); 

//a middleware for json parsing
var bodyParser = require('body-parser');

/* This example demonstrates adding a generic 
JSON and urlencoded parser as a 
top-level middleware, which will parse 
the bodies of all incoming requests. This is the simplest setup. */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//listen in a specific port
app.set('port', (process.env.PORT || 1337));

//function to respond on get requests on /script.js
app.get('/script.js', function (req, res) {
  res.sendFile('tpl/script.js',{ root: __dirname });
});

//funcion to respond to get requests on /style.css
app.get('/style.css', function (req, res) {
  res.sendFile('tpl/style.css',{ root: __dirname });
});

//a dictionary object for defaults-setting which will be used by bind
var defaultOptions = {
    hidden: 'hidden',
    hiddenButton: 'hidden',
    id: '',
    nome: '',
    surname: '',
    level: '',
    salary: ''
}

//a simple function to merge two dictionary objects
function merge_options(obj1,obj2){
    var obj3 = {};
    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
    return obj3;
}

//create a server for responding get requests on /
app.get('/', function(request, response) 
{
    //bind to the home.html file with default-options.
    bind.toFile('tpl/home.html', defaultOptions, 
    function(data){
        //data contiene la pagina html dopo che sono stati risolti i bind ^
        //html head (type of the page)
        //codice di risposta 200 Htlm (OK) 
        //e mando una risposta di tipo text/html
        response.writeHead(200, {'Content-Type':'text/html'});
    
        //html content
        //contenuto della pagina html da inviare, contenuto in data
        response.end(data);
    });
  	
});

//create a server for answering on search requests on /search
app.post('/search', function(request, response) 
{
    //the database will return an array with the data of the employee if the employee with this id exist, otherwise undefined 
    var employee = db.get(request.body.id);
    if(employee != undefined){
        bind.toFile('tpl/home.html', 
        {   
            //setting the options to the employee's values
            id: employee[0],
            nome: employee[1],
            surname: employee[2],
            level: employee[3],
            salary: employee[4],
            hiddenButton : 'hidden'
        }, 
        function(data){
            //data contiene la pagina html dopo che sono stati risolti i bind ^
            //html head (type of the page)
            //codice di risposta 200 Htlm (OK) 
            //e mando una risposta di tipo text/plain
            response.writeHead(200, {'Content-Type':'text/html'});
    
            //html content
            //contenuto della pagina html da inviare, contenuto in data
            response.end(data);
        });
        
    } else{
        bind.toFile('tpl/home.html', 
        merge_options(defaultOptions,{
            //adding the "Not Found" message to notify that the search had no result
            message: "Not Found"
        }), 
        function(data){
        
            //data contiene la pagina html dopo che sono stati risolti i bind ^
            //html head (type of the page)
            //codice di risposta 200 Htlm (OK) 
            //e mando una risposta di tipo text/plain
            response.writeHead(200, {'Content-Type':'text/html'});
    
            //html content
            //contenuto della pagina html da inviare, contenuto in data
            response.end(data);
        });
    }
  	
});
 
//create a server for answering on delete requests on /delete
app.post('/delete', function(request, response) 
{
    //x will return 0 if the item existed and was deleted, 1 otherwise
    var x = db.remove(request.body.id);
    
    var msg;
    if(x==0) msg = 'Deleted successfully';
    else msg = 'Item to delete not found';
    
    bind.toFile('tpl/home.html', 
    merge_options(defaultOptions,{
        message: msg
    }), 
    function(data){
        
        //data contiene la pagina html dopo che sono stati risolti i bind ^
        //html head (type of the page)
        //codice di risposta 200 Htlm (OK) 
        //e mando una risposta di tipo text/plain
        response.writeHead(200, {'Content-Type':'text/html'});
    
        //html content
        //contenuto della pagina html da inviare, contenuto in data
        response.end(data);
    });
  	
  	
});
 
//create a server for answering on insert requests on /insert
app.post('/insert', function(request, response) 
{
    //the database will return 1 if the item has been added correctly, 0 if it was modified successfully
    var x = db.add(request.body.id,
           request.body.nome,
           request.body.surname,
           request.body.level,
           request.body.salary
    );
    var msg;
    if(x==0) msg = 'Modified successfully';
    else msg = 'Inserted successfully';
    
	bind.toFile('tpl/home.html', 
    merge_options(defaultOptions,{
        message: msg
    }), 
    function(data){
        
        //data contiene la pagina html dopo che sono stati risolti i bind ^
        //html head (type of the page)
        //codice di risposta 200 Htlm (OK) 
        //e mando una risposta di tipo text/plain
        response.writeHead(200, {'Content-Type':'text/html'});
    
        //html content
        //contenuto della pagina html da inviare, contenuto in data
        response.end(data);
    });
  	
});

//listen in a specific port
app.listen(1337, '127.0.0.1');
 
//check status
console.log('Navigate on http://localhost:1337/ or http://127.0.0.1:1337/');