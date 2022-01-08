const express = require ('express');
const fs = require('fs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const categoryRoutes = require('./routes/categories');
const postRoutes = require('./routes/posts');
const authorRoutes = require('./routes/authors');
const tagRoutes = require('./routes/tags');
const router = require('./routes/categories');


app = express();

app.use(bodyParser.json());



const log = (request, response, next) => {

     
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    


    router.all('/*/:id', function (req, res, next) {

        fs.appendFile("./logs.json", JSON.stringify(`'ID:', ${req.params.id}`), () => {
            console.log('logs postsID was updated');
        });

        next();
    });

    // router.all('/*/:id', function (req, res, next) {
    //     console.log('ID:', req.body);
    //     next();
    // });


    let logs = `${request.url} ; ${request.method} ; ${now.toDateString()} ; ${hour}:${minutes}:${seconds}`;

    fs.appendFile("./logs.json", JSON.stringify(logs) + "\n", () => {
        console.log('logs was updated');
    });
    next();
};

app.use(log);

 
app.use(categoryRoutes);
app.use(postRoutes);
app.use(authorRoutes);
app.use(tagRoutes);

app.get('/', (req, res) => {
    res.send('It is homepage')
});

const url = 'mongodb+srv://Pavel:qweqwe@cluster0.b7fsr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(url, (error) => {
    if (error) {
        console.log(error)
        return
    }

    console.log('It is connected')
    app.listen(3000, () => {
        console.log('It is running')
    })
});

// app.listen (3000, () => {
//     console.log ("Servak pasha, but he not Pasha")
// });