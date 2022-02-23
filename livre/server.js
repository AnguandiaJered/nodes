const express = require('express');
const app = express();

app.set('view engine','ejs');

app.use('/assets',express.static('public'));

app.get('/', (request,response) =>{
    response.render('pages/index');
});

app.post('/', (request,response) =>{
    console.log(request);
})

app.listen(8080)