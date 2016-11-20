//Libraries
var http = require('http');
//general lib
var express = require('express');
//parse URL
var url = require('url');
//inspect variables
var util = require('util');

var qs = require('qs-parse');
//instantiate express
var app = express(); 

var bind = require('bind');

var db = require('./db.js');

//POST
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
//JSON post
app.use(bodyParser.json());


//listen in a specific port
app.set('port', (process.env.PORT || 1337));

app.get('/script.js', function (req, res) {
  res.sendFile('tpl/script.js',{ root: __dirname });
});

app.get('/style.css', function (req, res) {
  res.sendFile('tpl/style.css',{ root: __dirname });
});


var defaultOptions = {
    hidden: 'hidden',
    hiddenButton: 'hidden',
    id: '',
    nome: '',
    surname: '',
    level: '',
    salary: ''
}

function merge_options(obj1,obj2){
    var obj3 = {};
    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
    return obj3;
}

//create a server for responding get requests
app.get('/', function(request, response) 
{
    bind.toFile('tpl/home.html', defaultOptions, 
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

//create a server for answering to search requests
app.post('/search', function(request, response) 
{
    var employee = db.get(request.body.id);
    if(employee!=undefined){
        bind.toFile('tpl/home.html', 
        {
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
 
//create a server for answering to search requests
app.post('/delete', function(request, response) 
{
    db.remove(request.body.id);
    
    bind.toFile('tpl/home.html', 
    merge_options(defaultOptions,{
        message: "Deleted successfully"
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
 
//create a server for answering to search requests
app.post('/insert', function(request, response) 
{
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
console.log('Navigate on http://localhost:1337/ or http://127.0.0.1:1337/ to use the application');