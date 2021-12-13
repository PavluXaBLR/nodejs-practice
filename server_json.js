const http = require('http');

const fs = require ('fs');


const server = http.createServer(function(request, response) {
    response.setHeader ('Content-Type', 'application/json');
    
    const json = fs.readFileSync('./index.json');
    
    

    response.write(json);
   
    response.end();
});

server.listen(3000, () => {
    console.log('It is runing');

}) 