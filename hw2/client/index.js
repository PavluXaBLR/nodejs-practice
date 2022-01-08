const express = require ('express');
const handlebars = require('express-handlebars'); 

app = express ();

app.engine('hbs', handlebars.engine({
    extname: '.hbs',
}))

app.set('view engine', 'hbs');

app.set('views', './views');
app.set('img', '.views/img');

app.get('/', (request, response) => {
    response.render('home') 
})

app.get('/home', (request, response) => {
    response.render('home', {
        title: 'Home page'
    })
} )

app.get('/post', (req, res) => {
    const post = {
		name: 'name 1',
		body: "body 1",
		categories: "news" ,
		author: "Boby"
	}
	
    res.render('post', { post,
        title: 'post page'
    })
});


app.listen (4000, () => {
    console.log ("Servak pasha, but he not Pasha")
});