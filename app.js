const express = require('express');
const ejs = require('ejs');
const path = require('path');
const app = express();
const router = require('./routes/routes')

const partialsPath = path.join(__dirname , 'views');
console.log(partialsPath);


app.set('views' , partialsPath);
app.set('view engine' , 'ejs');


//route
app.use(router);

app.get('/' , (req , res) => {
    res.redirect('/loginform');
})


app.listen(3000 , () => {
    console.log("Server listening on 3000 port.");
})