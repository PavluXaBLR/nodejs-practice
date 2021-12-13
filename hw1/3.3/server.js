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
});

server.listen(3000, () => {
    console.log('It is runing');

}) 