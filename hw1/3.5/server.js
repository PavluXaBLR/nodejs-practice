const http = require('http');

const fs = require ('fs');


const server = http.createServer(function(request, response) {
    
    if (request.method === "POST" && request.url === '/post')  {
        response.setHeader ('Content-Type', 'application/json');
        response.write(`{"firstName" : "Pavel", "lastName" : "Ulasik"}`)

        return response.end();

    }
    else if (request.method === "PUT" && request.url === '/put')  {
        response.setHeader ('Content-Type', 'application/json');
        response.write(`{"firstName" : "Grisha", "lastName" : "Cvecick"}`)
        return response.end();
        

    }
    else if (request.method === "PATCH" && request.url === '/patch')  {
        response.write('PATCH method');
        return response.end();

    } 
    else if (request.method === "DELETE" && request.url === '/delete')  {
        response.write('DELITE method');
        return response.end();

    }else {
        response.statusCode = 404;
        response.write("Not found");
        return response.end(); 
    } 

    
    
});

server.listen(3000, () => {
    console.log('It is runing');

}) 