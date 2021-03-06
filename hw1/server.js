const http = require('http');

const fs = require ('fs');


const server = http.createServer(function(request, response) {
    response.setHeader ('Content-Type', 'text/html');
    const index = fs.readFileSync('./index.html');
    const about = fs.readFileSync('./about.html');
    const services = fs.readFileSync('./services.html');

    
    if (request.url === '/about') {
        response.write(about);
        return response.end();
    }
    else if (request.url === '/services') {
        response.write(services);
        return response.end();
    } 
    else if (request.url === '/' || request.url === '/index' ) {
        response.write(index);
        return response.end();
    } 
    else if (request.method === "POST" && request.url === '/post')  {
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