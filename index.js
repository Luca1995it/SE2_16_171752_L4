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

//listen in a specific port
app.set('port', (process.env.PORT || 1337));


//create a server for responding get requests
app.get('/', function(request, response) 
{
    bind.toFile('tpl/home.html',
    {}, 
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
	response.writeHead(200, {'Content-Type': 'text/html'});
		
    request.on('data', function(data) 
    {
        body += data;
    });

    request.on('end', function() 
    {
        postVar = qs.decode(body);
    });

    response.end('search request');
  	
});
 
//create a server for answering to search requests
app.post('/delete', function(request, response) 
{
	response.writeHead(200, {'Content-Type': 'text/html'});
		
    request.on('data', function(data) 
    {
        body += data;
    });

    request.on('end', function() 
    {
        postVar = qs.decode(body);
    });

    response.end('delete request');
  	
});
 
//create a server for answering to search requests
app.post('/insert', function(request, response) 
{
	response.writeHead(200, {'Content-Type': 'text/html'});
		
    request.on('data', function(data) 
    {
        body += data;
    });

    request.on('end', function() 
    {
        postVar = qs.decode(body);
    });

    response.end('insert request');
  	
});

//listen in a specific port
app.listen(1337, '127.0.0.1');
 
//check status
console.log('Navigate on http://localhost:1337/ or http://127.0.0.1:1337/ to use the application');