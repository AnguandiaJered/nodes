let express = require('express');
const app = express();

app.get('/', (request,response)=>{
    response.send('Salut le server est en marche dans la racine')
});

app.get('/demo', (request,response)=>{
    response.send('Salut le server est en marche au demo')
});

app.listen(8080);